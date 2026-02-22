#!/usr/bin/env node
/**
 * FAQ to JSON converter
 * Parse tennis-breakdown/agents/support/faq.md and outputs structured JSON
 */

const fs = require('fs');
const path = require('path');

const faqPath = path.join(__dirname, 'faq.md');
const outputPath = path.join(__dirname, 'faq.json');

const content = fs.readFileSync(faqPath, 'utf8');
const lines = content.split('\n');

// State machine
let state = 'header'; // header, menu, section, question, answer
let currentCategory = null;
let categories = [];
let welcomeMessage = '';
let menuItems = [];

// Helpers
const isHeader = (line) => line.startsWith('# ');
const isSubHeader = (line) => line.startsWith('## ');
const isMenuItem = (line) => line.includes('[') && line.includes(']');
const isQuestion = (line) => line.startsWith('### Q:');
const extractText = (line) => line.replace(/^### [QA]:\s*/, '').trim();

// Parse
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (state === 'header') {
    welcomeMessage = line.replace(/^# /, '').trim();
    state = 'menu';
    continue;
  }

  if (state === 'menu' && line.includes('Messages d\'accueil')) {
    skipToNextSection(lines, i);
    state = 'section';
    continue;
  }

  if (state === 'menu' && isMenuItem(line)) {
    const match = line.match(/\[([^\]]+)\]/);
    if (match) {
      menuItems.push({
        label: match[1],
        categoryId: slugify(match[1].split(' ')[0].toLowerCase())
      });
    }
    continue;
  }

  if (state === 'section' && line.startsWith('## ')) {
    // New category
    const catName = line.replace(/^##\s*/, '').trim();
    // Extract number prefix if exists (e.g., "1. UPLOAD VIDÉO")
    const catMatch = catName.match(/^\d+\.\s*(.+)/);
    const cleanName = catMatch ? catMatch[1] : catName;
    const catId = slugify(cleanName.split(' ')[0].toLowerCase());

    currentCategory = {
      id: catId,
      name: cleanName,
      icon: extractIcon(line),
      questions: []
    };
    categories.push(currentCategory);
    continue;
  }

  if (state === 'section' && isQuestion(line)) {
    const questionText = extractText(line);
    const qId = slugify(questionText.substring(0, 30));
    const answerLines = [];
    i++;
    while (i < lines.length && !isQuestion(lines[i]) && !lines[i].startsWith('## ')) {
      if (lines[i].trim() && !lines[i].startsWith('#')) {
        answerLines.push(lines[i].trim());
      }
      i++;
    }
    i--; // back up one

    if (currentCategory) {
      currentCategory.questions.push({
        id: `${currentCategory.id}_${qId}`,
        question: questionText,
        answer: answerLines.join('\n'),
        keywords: generateKeywords(questionText)
      });
    }
  }
}

// Build final JSON
const result = {
  meta: {
    version: '1.0',
    generated: new Date().toISOString(),
    totalQuestions: categories.reduce((sum, cat) => sum + cat.questions.length, 0)
  },
  welcome: welcomeMessage,
  menu: menuItems,
  categories: categories
};

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
console.log(`✅ Generated ${outputPath} with ${result.meta.totalQuestions} questions`);

// Utilities
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function extractIcon(line) {
  const emojiMatch = line.match(/^([\p{Emoji}]+)/u);
  return emojiMatch ? emojiMatch[1] : '❓';
}

function generateKeywords(question) {
  const stopWords = ['le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'ou', 'pour', 'avec', 'ma', 'mon', 'mes', 'ta', 'ton', 'tes', 'sa', 'son', 'ses', 'notre', 'nos', 'votre', 'vos', 'leur', 'leurs', 'que', 'qui', 'quoi', 'dans', 'sur', 'par', 'au', 'aux', 'en', 'est', 'sont', 'être', 'avoir', 'faire', 'aller', 'venir', 'voir', 'pouvoir', 'vouloir', 'savoir', 'dois', 'peux', 'faut', 'besoin', 'comment', 'quel', 'quelle', 'quels', 'quelles', 'quand', 'où', 'pourquoi', 'combien'];
  return question
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.includes(word))
    .slice(0, 5); // top 5 keywords
}

function skipToNextSection(lines, startIdx) {
  for (let i = startIdx; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) return i;
  }
  return lines.length;
}

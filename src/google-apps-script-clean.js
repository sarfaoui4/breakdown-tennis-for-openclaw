// Tennis Breakdown - Lead Magnet Email Automation
// Ce script envoie automatiquement le guide aux nouveaux leads

const SUPABASE_URL = 'https://tzdypqpexlwugehsscec.supabase.co';
const SPREADSHEET_ID = '1x5S5fTh72Wk3RtUTP5YrqZZVWzC0STdB5xcq9toCWDs';
const GUIDE_URL = 'https://tennis-breakdown-pwaf31cr9-sarfaoui4s-projects.vercel.app/lead-guide.html';

function sendGuideToLeads() {
  const supabaseKey = PropertiesService.getScriptProperties().getProperty('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseKey) {
    console.error('SUPABASE_SERVICE_ROLE_KEY non définie dans les propriétés du script');
    return;
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  const url = `${SUPABASE_URL}/rest/v1/leads?select=id,email,source,created_at&notified_at=is.null&order=created_at.asc`;
  
  const options = {
    method: 'GET',
    muteHttpExceptions: true,
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json'
    }
  };
  
  const response = UrlFetchApp.fetch(url, options);
  const leads = JSON.parse(response.getContentText());
  
  if (!Array.isArray(leads) || leads.length === 0) {
    console.log('Aucun nouveau lead à traiter.');
    return;
  }
  
  const now = new Date().toISOString();
  
  leads.forEach(lead => {
    try {
      const subject = "🎾 Votre guide ultime de l'analyse vidéo tennis";
      const body = `
        <p>Bonjour,</p>
        <p>Merci de votre intérêt pour Tennis Breakdown !</p>
        <p>Vous trouverez ci-dessous le lien pour télécharger le guide <strong>« Le guide ultime de l'analyse vidéo tennis »</strong> (PDF, 30 pages) :</p>
        <p style="margin: 20px 0;">
          <a href="${GUIDE_URL}" style="background-color: #ea580c; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            📥 Télécharger le guide
          </a>
        </p>
        <p>Bonne lecture !</p>
        <p>À bientôt,<br/>L'équipe Tennis Breakdown</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="font-size: 0.9em; color: #666;">Vous recevez cet email car vous vous êtes inscrit sur tennis-breakdown.vercel.app.</p>
      `;
      
      GmailApp.sendEmail(lead.email, subject, '', {
        htmlBody: body,
        name: 'Tennis Breakdown'
      });
      
      // Marquer comme notifié dans Supabase
      UrlFetchApp.fetch(
        `${SUPABASE_URL}/rest/v1/leads?id=eq.${lead.id}`,
        {
          method: 'PATCH',
          contentType: 'application/json',
          payload: JSON.stringify({ notified_at: now }),
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal'
          }
        }
      );
      
      // Ajouter dans le Google Sheet
      sheet.appendRow([
        lead.email,
        lead.source || 'lead_magnet_guide',
        lead.created_at,
        now,
        '', // follow-up 1 sent
        ''  // follow-up 2 sent
      ]);
      
      console.log(`Guide envoyé à ${lead.email}`);
      
    } catch (error) {
      console.error(`Erreur pour ${lead.email}:`, error.toString());
    }
  });
}

function testSend() {
  sendGuideToLeads();
}

function sendFollowUps() {
  const supabaseKey = PropertiesService.getScriptProperties().getProperty('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseKey) {
    console.error('SUPABASE_SERVICE_ROLE_KEY non définie');
    return;
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const rows = data.slice(1);
  const now = new Date();
  
  rows.forEach((row, index) => {
    const email = row[0];
    const notifiedAt = row[3] ? new Date(row[3]) : null;
    const followUp1Sent = row[4];
    const followUp2Sent = row[5];
    
    if (!email || !notifiedAt) return;
    
    const daysSinceNotified = (now - notifiedAt) / (1000 * 60 * 60 * 24);
    
    if (!followUp1Sent && daysSinceNotified >= 2) {
      sendFollowUpEmail(email, 1, supabaseKey);
      sheet.getRange(index + 2, 5).setValue(now.toISOString());
    }
    
    if (!followUp2Sent && daysSinceNotified >= 7) {
      sendFollowUpEmail(email, 2, supabaseKey);
      sheet.getRange(index + 2, 6).setValue(now.toISOString());
    }
  });
}

function sendFollowUpEmail(email, sequence, supabaseKey) {
  const subject = sequence === 1 
    ? "🎾 Des questions sur le guide d'analyse vidéo ?"
    : "🎾 Offre spéciale - 20% sur votre première analyse";
  
  const pricingUrl = "https://tennis-breakdown-pwaf31cr9-sarfaoui4s-projects.vercel.app/pricing";
  
  let body;
  if (sequence === 1) {
    body = `
      <p>Bonjour,</p>
      <p>Je vous ai envoyé le guide d'analyse vidéo tennis il y a quelques jours.</p>
      <p>Des questions ? Répondez directement à cet email.</p>
      <p>Bonne journée,<br/>Sami, Tennis Breakdown</p>
    `;
  } else {
    body = `
      <p>Bonjour,</p>
      <p>Votre guide vous a-t-il été utile ?</p>
      <p>Profitez de <strong>-20% sur votre première analyse</strong> avec le code <strong>WELCOME20</strong>.</p>
      <p><a href="${pricingUrl}" style="background:#ea580c;color:white;padding:10px 20px;text-decoration:none;border-radius:6px;">Voir les tarifs</a></p>
      <p>À bientôt,<br/>Sami</p>
    `;
  }
  
  GmailApp.sendEmail(email, subject, '', {
    htmlBody: body,
    name: 'Sami - Tennis Breakdown'
  });
}

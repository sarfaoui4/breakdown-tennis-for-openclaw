// 📄 API Route - Génération du PDF lead magnet
// Fichier: app/api/lead/download/route.ts

import { NextRequest, NextResponse } from 'next/server';
import PDFDocument from 'pdfkit';
import { leadMagnetContent } from '@/lib/lead-magnet-content';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    // Sans email, on refuse (optionnel selon ta politique)
    // Si tu veux permettre téléchargement sans email, enlève ce bloc
    if (!email) {
      return NextResponse.json(
        { error: 'Email requis pour télécharger le guide' },
        { status: 400 }
      );
    }

    // Créer un buffer pour le PDF
    const buffers: Buffer[] = [];
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 50, bottom: 50, left: 50, right: 50 },
      info: {
        Title: leadMagnetContent.titre,
        Author: 'Tennis Breakdown',
        Subject: 'Guide gratuit - 10 erreurs tennis',
        Keywords: 'tennis, erreurs techniques, progression, guide',
      },
    });

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', async () => {
      // Rien ici — on envoie après
    });

    // 📌 STYLE - Couleurs noir/orange
    const orange = '#f97316'; // Orange Tailwind
    const dark = '#111827';   // Gray-900
    const gray = '#9ca3af';   // Gray-400
    const white = '#ffffff';

    // En-tête
    doc
      .fontSize(24)
      .font('Helvetica-Bold')
      .fillColor(orange)
      .text('Tennis Breakdown', { align: 'left' })
      .fontSize(12)
      .fillColor(gray)
      .text('Guide Expert', { align: 'left', y: doc.y + 5 })
      .moveDown(2);

    // Titre principal
    doc
      .fontSize(28)
      .fillColor(dark)
      .font('Helvetica-Bold')
      .text(leadMagnetContent.titre, { align: 'center', width: 500 })
      .moveDown(1);

    doc
      .fontSize(12)
      .fillColor(gray)
      .font('Helvetica')
      .text(leadMagnetContent.sousTitre, { align: 'center' })
      .moveDown(2);

    // Ligne de séparation orange
    doc
      .strokeColor(orange)
      .lineWidth(3)
      .moveTo(50, doc.y)
      .lineTo(545, doc.y)
      .stroke()
      .moveDown(1);

    // Introduction
    doc
      .fontSize(12)
      .fillColor(dark)
      .font('Helvetica')
      .text(leadMagnetContent.introduction, {
        align: 'justified',
        width: 500,
        lineGap: 4,
      })
      .moveDown(1.5);

    // Sections 1-10
    leadMagnetContent.sections.forEach((section, index) => {
      // En-tête de section
      doc
        .fontSize(16)
        .fillColor(orange)
        .font('Helvetica-Bold')
        .text(`Erreur #${section.numero} - ${section.titre}`, { align: 'left' })
        .moveDown(0.5);

      // Description
      doc
        .fontSize(11)
        .fillColor(dark)
        .font('Helvetica')
        .text(section.description, {
          align: 'justified',
          width: 500,
          lineGap: 3,
        })
        .moveDown(0.8);

      // Conséquences
      doc
        .fontSize(12)
        .fillColor(dark)
        .font('Helvetica-Bold')
        .text('Conséquences:', { align: 'left' })
        .moveDown(0.3);

      doc
        .fontSize(10)
        .fillColor(dark)
        .font('Helvetica')
        .text(section.consequences.map(c => `• ${c}`).join('\n'), {
          align: 'left',
          width: 500,
          lineGap: 2,
        })
        .moveDown(0.8);

      // Solutions
      doc
        .fontSize(12)
        .fillColor(dark)
        .font('Helvetica-Bold')
        .text('Solutions:', { align: 'left' })
        .moveDown(0.3);

      doc
        .fontSize(10)
        .fillColor(dark)
        .font('Helvetica')
        .text(section.solutions.map(s => `✓ ${s}`).join('\n'), {
          align: 'left',
          width: 500,
          lineGap: 2,
        })
        .moveDown(0.8);

      // Exercice
      doc
        .fontSize(12)
        .fillColor(orange)
        .font('Helvetica-Bold')
        .text('Exercice pratique:', { align: 'left' })
        .moveDown(0.3);

      doc
        .fontSize(10)
        .fillColor(dark)
        .font('Helvetica')
        .text(section.exercice, {
          align: 'justified',
          width: 500,
          lineGap: 3,
        })
        .moveDown(1.5);

      // Ligne séparatrice entre sections (sauf dernière)
      if (index < leadMagnetContent.sections.length - 1) {
        doc
          .strokeColor('#e5e7eb')
          .lineWidth(1)
          .moveTo(50, doc.y - 10)
          .lineTo(545, doc.y - 10)
          .stroke();
      }
    });

    // Conclusion
    doc
      .fontSize(14)
      .fillColor(orange)
      .font('Helvetica-Bold')
      .text('Conclusion', { align: 'left' })
      .moveDown(0.5);

    doc
      .fontSize(11)
      .fillColor(dark)
      .font('Helvetica')
      .text(leadMagnetContent.conclusion, {
        align: 'justified',
        width: 500,
        lineGap: 4,
      })
      .moveDown(1);

    // Call to action
    doc
      .fillColor(orange)
      .fontSize(12)
      .font('Helvetica-Bold')
      .text(leadMagnetContent.callToAction, { align: 'center', width: 500 })
      .moveDown(0.5);

    doc
      .fillColor(dark)
      .fontSize(10)
      .font('Helvetica')
      .text(leadMagnetContent.ctaUrl, { align: 'center' })
      .moveDown(2);

    // Footer
    doc
      .fontSize(8)
      .fillColor(gray)
      .font('Helvetica')
      .text(leadMagnetContent.footer, {
        align: 'center',
        width: 500,
      });

    doc.end();

    // Attendre la fin de la génération
    await new Promise<void>((resolve) => {
      doc.on('end', () => resolve());
    });

    const pdfBuffer = Buffer.concat(buffers);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="guide-erreurs-tennis-${email}.pdf"`,
        'Content-Length': pdfBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la génération du PDF' },
      { status: 500 }
    );
  }
}

// POST pour enregistrer l'email + envoyer PDF (à faire après)
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    // TODO: Enregistrer l'email dans Supabase
    // TODO: Envoyer le PDF par email (Resend/SendGrid)
    // Pour l'instant, on renvoie le PDF directement

    return NextResponse.json({
      success: true,
      message: 'Email enregistré, PDF généré',
      downloadUrl: `/api/lead/download?email=${encodeURIComponent(email)}`,
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de lenregistrement' },
      { status: 500 }
    );
  }
}

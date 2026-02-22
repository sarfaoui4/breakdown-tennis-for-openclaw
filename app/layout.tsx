// 🎯 ULTRA-MINIMAL Next.js app - DOIT BUILD
// Fichier: app/layout.tsx (simplifié)

import './globals.css'

export const metadata = {
  title: 'Tennis Breakdown',
  description: 'Analyse professionnelle de vos matchs de tennis',
  verification: {
    google: 'google620f3bb84650dabf.html',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
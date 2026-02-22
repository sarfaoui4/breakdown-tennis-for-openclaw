// 🎯 ULTRA-MINIMAL Next.js app - DOIT BUILD
// Fichier: app/layout.tsx (simplifié)

import './globals.css'

export const metadata = {
  title: 'Tennis Breakdown',
  description: 'Analyse professionnelle de vos matchs de tennis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="7A1sx6d7ifr4E4lqq-FJKNxIBeSvJswtA-C0WD6yWaU" />
      </head>
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
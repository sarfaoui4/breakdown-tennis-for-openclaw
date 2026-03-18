import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Comment choisir sa raquette de tennis ? Guide complet 2025 | Tennis Breakdown",
  description: "Guide 2025 pour choisir LA raquette idéale selon votre niveau, style de jeu et morphologie. Poids, taille, équilibre, rigidité : tous les critères décryptés.",
  keywords: ["choisir raquette tennis", "guide raquette tennis 2025", "raquette tennis débutant", "raquette tennis intermédiaire", "conseil équipement tennis"],
}

export default function ArticleChoisirRaquette() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <a href="/" className="text-xl font-bold">Tennis Breakdown</a>
          </div>
          <a href="/pricing" className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-medium transition-colors">
            Voir les tarifs
          </a>
        </div>
      </nav>

      {/* Article */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Comment choisir sa raquette de tennis ? Guide complet 2025</h1>
          <p className="text-gray-400 mb-8">
            Publié le 18 mars 2025 • 10 min de lecture
          </p>

          <p className="mb-6">
            Choisir une raquette de tennis n'est pas simple. Entre le poids, la taille, l'équilibre, la rigidité et les technologies, 
            on s'y perd facilement. Pourtant, une raquette adaptée à votre jeu change tout : confort, puissance, contrôle, et même 
            prévention des blessures.
          </p>

          <p className="mb-6">
            Ce guide 2025 vous explique chaque critère simplement, et vous aide à trouver la raquette idéale selon votre niveau 
            et votre style de jeu.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">1. Le poids : stabilité vs maniabilité</h2>
          <p className="mb-6">
            <strong>Léger (260-280g) :</strong> Idéal pour les enfants, juniors et adultes débutants. Facile à accélérer, 
            moins fatiguant pour le bras. Mais moins stable sur les balles rapides.
          </p>
          <p className="mb-6">
            <strong>Moyen (290-310g) :</strong> Le plus polyvalent. Convient à la plupart des joueurs intermédiaires à avancés. 
            Bon équilibre puissance/contrôle.
          </p>
          <p className="mb-6">
            <strong>Lourd (320g+) :</strong> Pour les joueurs expérimentés avec un bon niveau technique. Beaucoup de puissance 
            et de stabilité, mais demande plus de force et d'endurance.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">2. La taille du tamis (head size)</h2>
          <p className="mb-6">
            <strong>Petit (85-90 sq in) :</strong> "Sweet spot" réduit, mais contrôle précis. Pour les experts qui cherchent 
            de la précision et愿意 de manquer quelques coups.
          </p>
          <p className="mb-6">
            <strong>Moyen (98-100 sq in) :</strong> Le standard moderne. Bon compromis puissance/contrôle, sweet spot généreux. 
            Idéal pour la plupart des joueurs.
          </p>
          <p className="mb-6">
            <strong>Grand (104+ sq in) :</strong> Maximum de puissance et de tolérance. Parfait pour les débutants et les joueurs 
            qui ont besoin d'aide pour générer de la vitesse.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">3. L'équilibre (balance)</h2>
          <p className="mb-6">
            <strong>Équilibre tête (head heavy) :</strong> Plus de puissance, mais moins de maniabilité. Bon pour les joueurs 
            qui cherchent à écraser leurs frappes.
          </p>
          <p className="mb-6">
            <strong>Équilibre manche (head light) :</strong> Plus rapide à manœuvrer, meilleur contrôle. Pour les joueurs 
            qui prennent la balle tôt, font beaucoup de volées, ou ont un style de jeu à plat.
          </p>
          <p className="mb-6">
            <strong>Équilibre neutre :</strong> Le polyvalent par excellence. Convient à la plupart des styles.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">4. La rigidité (stiffness)</h2>
            <p className="mb-6">
            Mesurée en RA (Racket Anchor). Plus c'est haut, plus la raquette est rigide.
          </p>
          <p className="mb-6">
            <strong>RA bas (60-65) :</strong> Raquette confortable, plus de "feel", moins de vibrations. Moins de puissance mais 
            meilleur contrôle. À privilégier si vous avez des problèmes de bras (tennis elbow).
          </p>
          <p className="mb-6">
            <strong>RA élevé (68+) :</strong> Raquette puissante et réactive, mais plus dure pour le bras. Pour les joueurs 
            qui ont une technique solide et veulent le maximum de performance.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">5. Le profil (beam width)</h2>
          <p className="mb-6">
            L'épaisseur du cadre :
          </p>
          <p className="mb-6">
            <strong>Fin (22-23mm) :</strong> Contrôle précis, plus de flex. Pour les joueurs techniques.
          </p>
          <p className="mb-6">
            <strong>Moyen (24-25mm) :</strong> Polyvalent, bon mélange puissance/contrôle.
          </p>
          <p className="mb-6">
            <strong>Épais (26mm+) :</strong> Max de puissance et de stabilité. Idéal pour les débutants.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Recommandations par niveau</h2>

          <h3 className="text-xl font-bold mt-8 mb-3">🎯 Débutant (NTRP 2.0-3.0)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Poids : 260-290g</li>
            <li>Tamis : 100-110 sq in</li>
            <li>Équilibre : head light à neutre</li>
            <li>Rigidité : 65-68 RA (confitable)</li>
            <li>Profil : 24mm+</li>
            <li>String pattern : 16x19 (plus de puissance)</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">🎯 Intermédiaire (NTRP 3.5-4.0)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Poids : 295-315g</li>
            <li>Tamis : 98-100 sq in</li>
            <li>Équilibre : neutre à légèrement head heavy</li>
            <li>Rigidité : 67-70 RA</li>
            <li>Profil : 23-25mm</li>
            <li>String pattern : 16x19 ou 18x20 selon préférence</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">🎯 Avancé (NTRP 4.5+)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Poids : 315-340g+ (selon force physique)</li>
            <li>Tamis : 95-98 sq in</li>
            <li>Équilibre : head light à neutre (pour le contrôle)</li>
            <li>Rigidité : 68-72 RA (ou moins si sensibilité du bras)</li>
            <li>Profil : 22-24mm (contrôle)</li>
            <li>String pattern : 18x20 (contrôle) ou 16x19 (polyvalent)</li>
          </ul>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">🎾 Besoin d'une analyse de votre jeu ?</h3>
            <p className="mb-4">
              Votre style de jeu influence aussi le choix de raquette. Un serveur-volleyeur n'a pas les mêmes besoins 
              qu'un baselinier. Nos experts peuvent analyser votre tennis et vous recommander l'équipement idéal.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Commander une analyse
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Testez avant d'acheter</h2>
          <p className="mb-6">
            La théorie c'est bien, mais rien ne remplace le test. Beaucoup de clubs et magasins proposent des démonstrations. 
            Essayez au moins 3 modèles différents avant de vous décider. Prêtez attention aux sensations : confort, puissance, 
            contrôle, et surtout... le sourire après un bon coup !
          </p>

          <p className="mb-6">
            Bonne recherche, et bon tennis !
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2025 Tennis Breakdown. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

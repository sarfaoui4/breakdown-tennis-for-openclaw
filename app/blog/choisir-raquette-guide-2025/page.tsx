import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Comment choisir sa raquette de tennis ? Guide complet 2025 | Tennis Breakdown",
  description: "Tout ce qu'il faut savoir pour sélectionner la raquette idéale selon votre niveau, style de jeu et morphologie. Comparatif, critères et recommandations.",
  keywords: ["choisir raquette tennis", "quelle raquette de tennis", "guide raquette tennis 2025", "raquette tennis débutant", "raquette tennis intermédiaire", "taille raquette tennis", "poids raquette tennis"],
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
            Mis à jour le 12 mars 2025 • 12 min de lecture
          </p>

          <p className="mb-6">
            Choisir la bonne raquette de tennis est crucial pour votre progression. Une raquette adaptée à votre niveau, 
            votre morphologie et votre style de jeu peut changer radicalement votre confort et vos performances. 
            Inversement, une mauvaise raquette peut freiner votre évolution et même causer des blessures.
          </p>

          <p className="mb-6">
            Ce guide complet 2025 vous explique tous les critères à prendre en compte, avec des recommandations 
            concrètes pour chaque profil de joueur.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Les 7 critères essentiels</h2>
          <p className="mb-6">
            Voici les paramètres techniques qui font la différence. Nous allons détailler chacun avec des valeurs concrètes.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">1. Poids (grammes)</h3>
          <p className="mb-6">
            Le poids influence la puissance, le contrôle et la stabilité.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>260-280g</strong> : débutants, juniors, joueurs légers. Facile à manier, pardonner les erreurs.</li>
            <li><strong>280-300g</strong> : joueurs intermédiaires (30 à 15/2). Bon équilibre puissance/contrôle.</li>
            <li><strong>300-320g</strong> : joueurs confirmés (15 à 5/6). Plus de stabilité, plus de puissance générée.</li>
            <li><strong>320g+</strong> : compétiteurs avancés (5/6 et +). Maximum de contrôle et d'énergie, mais demande de la condition physique.</li>
          </ul>
          <p className="mb-6">
            <strong>Conseil</strong> : Ne choisissez pas une raquette trop lourde dès le début. Vous devez pouvoir laswinger facilement.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">2. Taille du tamis (cm²)</h3>
          <p className="mb-6">
            La surface de la tête détermine la zone de frappe et la puissance.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>85-95 cm² (petit tamis)</strong> : joueurs experts qui veulent un maximum de contrôle. Très exigeant en précision.</li>
            <li><strong>95-105 cm² (moyen tamis)</strong> : le plus polyval. Adapté à la plupart des joueurs intermédiaires à avancés.</li>
            <li><strong>105-115 cm² (grand tamis)</strong> : débutants et joueurs qui cherchent de la puissance et un gros sweet spot. Pardonne davantage.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">3. Longueur (cm)</h3>
          <p className="mb-6">
            Longueur standard : 68-69 cm. Certaines raquettes font 27 pouces (68.6 cm), d'autres 27.5 ou 28.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Standard (27")</strong> : meilleur contrôle, plus maniable.</li>
            <li><strong>Longue (+27.5")</strong> : un peu plus de levier, donc puissance et reach. Légèrement moins précis.</li>
          </ul>
          <p className="mb-6">
            Pour un débutant, une longueur standard est parfaite. Les joueurs plus grands peuvent opter pour un poco più lungo.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">4. Plan de cordage (motif)</h3>
          <p className="mb-6">
            Deux motifs principaux :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>16x19</strong> : cordages espacés → plus de puissance, effet plus facile, confortable.</li>
            <li><strong>18x20</strong> : cordages serrés → plus de contrôle, sweet spot plus petit, effet plus difficile à générer.</li>
            <li><strong>16x18, 18x16</strong> : hybrides, offrent un bon compromis.</li>
          </ul>
          <p className="mb-6">
            <strong>Débutants</strong> → 16x19 (facilité de jeu). <strong>Confirmés</strong> → 18x20 (précision).
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">5. Balance (en cm ou points)</h3>
          <p className="mb-6">
            L'équilibre de la raquette (où se situe le centre de gravité) :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Équilibrée tête (head-light en grammes négatifs)</strong> : poids plus vers le manche → plus maniable, idéal pour le service/volée et les frappes longues.</li>
            <li><strong>Équilibrée manche (head-heavy)</strong> : poids plus vers la tête → plus de puissance en fond de court, mais plus fatiguant pour le bras.</li>
            <li><strong> Neutre (even balance)</strong> : compromis.</li>
          </ul>
          <p className="mb-6">
            Mesuré en "points" : 1 point = 1/8 de pouce (3,175 mm). Ex: 6pts HL = 6 points head-light.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">6. Dureté du cadre (flexibilité)</h3>
          <p className="mb-6">
            Raquettes en graphite, kevlar, titane, etc. Plus le cadre est rigide, plus la puissance est directe, 
            mais moins le confort (vibrations). Les cadres souples donnent plus d'absorption.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Stiff (rigide)</strong> : joueurs experts avec bon timing.</li>
            <li><strong>Medium</strong> : le plus commun, bon équilibre.</li>
            <li><strong>Flexible</strong> : plus de confort, moins de vibrations, pour les bras sensibles ou débutants.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">7. Matériau</h3>
          <p className="mb-6">
            Aujourd'hui presque toutes les raquettes sont en graphite composite. Les matériaux high-end (tungstène, 
            kevlar, etc.) sont intégrés pour modifier la stabilité et le poids.
          </p>
          <p className="mb-6">
            Pour un premier achat, une graphite moderne de marque réputée (Wilson, Babolat, Head, Yonex, Tecnifibre) suffit largement.
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">🎯 Besoin d'une analyse de votre jeu ?</h3>
            <p className="mb-4">
              Envoyez-nous une vidéo de votre jeu et nous vous recommanderons une raquette adaptée à votre style, niveau et morphologie.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Découvrir nos tarifs
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Recommandations par profil</h2>

          <h3 className="text-xl font-bold mt-8 mb-3">👶 Débutant absolu (first racquet)</h3>
          <p className="mb-6">
            <strong>Poids :</strong> 260-280g<br/>
            <strong>Tamis :</strong> 105-115 cm²<br/>
            <strong>Plan de cordage :</strong> 16x19<br/>
            <strong>Longueur :</strong> 27" standard<br/>
            <strong>Balance :</strong> légèrement head-light (3-5 pts HL)<br/>
            <strong>Modèles recommandés :</strong> Wilson Ultra 108, Babolat Pure Drive Lite, Head Ti.S6+, Yonex EZONE 108
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">🎯 Intermédiaire (30 à 15/2)</h3>
          <p className="mb-6">
            <strong>Poids :</strong> 285-300g<br/>
            <strong>Tamis :</strong> 98-105 cm²<br/>
            <strong>Plan de cordage :</strong> 16x19 ou 16x18<br/>
            <strong>Longueur :</strong> 27" ou 27.5"<br/>
            <strong>Balance :</strong> 4-6 pts HL (neutre à head-light)<br/>
            <strong>Modèles recommandés :</strong> Babolat Pure Drive, Wilson Blade, Head Gravity, Yonez EZONE 98/100
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">🏆 Confirmé (15 à 5/6)</h3>
          <p className="mb-6">
            <strong>Poids :</strong> 300-320g<br/>
            <strong>Tamis :</strong> 95-98 cm²<br/>
            <strong>Plan de cordage :</strong> 18x20 si controle, 16x19 si polyvalent<br/>
            <strong>Longueur :</strong> 27" standard<br/>
            <strong>Balance :</strong> 6-8 pts HL pour plus de maniabilité, ou neutre<br/>
            <strong>Modèles recommandés :</strong> Wilson Pro Staff, Head Prestige, Babolat Pure Strike, Yonex EZONE 98 Tour
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">💎 Compétiteur avancé (5/6 et +)</h3>
          <p className="mb-6">
            <strong>Poids :</strong> 320g+<br/>
            <strong>Tamis :</strong> 90-95 cm²<br/>
            <strong>Plan de cordage :</strong> 18x20 ou plus dense<br/>
            <strong>Balance :</strong> 8+ pts HL ou même 10+ HL pour un profil serveur/voléeur<br/>
            <strong>Modèles recommandés :</strong> Wilson Pro Staff RF97, Head Graphene 360+ Prestige, Babolat Pure Aero Rafa
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Erreurs à éviter</h2>
          <p className="mb-6">
            <strong>1. Acheter la raquette de son idole sans adaptation</strong> : Novak Djokovic joue avec une raquette lourde, tête équilibrée manche, petit tamis. Si vous n'avez pas son niveau et sa condition physique, ce sera contre-productif.
          </p>
          <p className="mb-6">
            <strong>2. Se fier uniquement au look</strong> : une raquette belle ne veut pas dire adaptée. Priorisez les critères techniques.
          </p>
          <p className="mb-6">
            <strong>3. Changer trop souvent</strong> : une fois que vous avez trouvé une raquette qui vous convient, tenez-la au moins 6-12 mois avant de changer. L'adaptation prend du temps.
          </p>
          <p className="mb-6">
            <strong>4. Négliger le cordage et la tension</strong> : le choix des cordes et la tension modifient énormément le feeling. Une bonne raquette mal cordée peut être médiocre.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Testez avant d'acheter</h2>
          <p className="mb-6">
            Beaucoup de clubs et magasins spécialisés proposent des démonstrateurs (raquettes test) avec différents modèles. 
            Profitez-en ! Essayez au moins 2-3 raquettes différentes avant votre achat, si possible sur plusieurs sessions.
          </p>
          <p className="mb-6">
            Si vous ne savez pas quoi choisir, n'hésitez pas à demander conseil à un entraîneur ou à un… 
            <strong> service d'analyse vidéo tennis </strong> qui pourra évaluer votre style de jeu et vous faire une recommandation précise.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Budget : combien dépenser ?</h2>
          <p className="mb-6">
            <strong>Premier achat (débutant)</strong> : 80-150€ d'occasion ou 120-180€ neuf (gamme entrée de gamme). Pas besoin de dépenser plus.
          </p>
          <p className="mb-6">
            <strong>Intermédiaire</strong> : 180-280€ neuf. On entre dans les gammes performances (Pure Drive, Blade, Gravity).
          </p>
          <p className="mb-6">
            <strong>Confirmé/High-end</strong> : 250-400€.Cadres pro-stock ou modèles signatures.
          </p>
          <p className="mb-6">
            <strong>Astuce</strong> : les modèles de l'année précédente sont souvent à -20-30%. Presque identiques en性能.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Conclusion</h2>
          <p className="mb-6">
            Choisir sa raquette n'est pas anodin. Prenez le temps d'analyser votre profil, testez si possible, et n'hésitez pas à investir dans un cadre qui vous correspond vraiment. Une bonne raquette est un investissement qui accélère votre progression et améliore votre plaisir de jeu.
          </p>
          <p className="mb-6">
            <strong>Et vous, quelle raquette utilisez-vous ?</strong> Partagez votre expérience dans les commentaires !
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

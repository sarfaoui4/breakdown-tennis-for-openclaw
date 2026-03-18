import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "La technique du revers complet : one-handed vs two-handed | Tennis Breakdown",
  description: "Tout savoir sur le revers : one-handed ou two-handed ? Découvrez les avantages, inconvénients et exercices pour maîtriser ce coup fondamental.",
  keywords: ["revers tennis", "revers one-handed", "revers two-handed", "technique revers", "coup revers tennis"],
}

export default function ArticleReversTennis() {
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
          <h1 className="text-4xl font-bold mb-4">La technique du revers complet : one-handed vs two-handed</h1>
          <p className="text-gray-400 mb-8">
            Publié le 28 février 2025 • 10 min de lecture
          </p>

          <p className="mb-6">
            Le revers est souvent considéré comme le coup le plus difficile à maîtriser pour les joueurs amateurs. 
            Entre le one-handed élégant mais exigeant, et le two-handed puissant mais restrictif, comment choisir ? 
            Et surtout, comment bien exécuter chaque variante ?
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">One-handed vs Two-handed : Le grand débat</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-4 text-white">Revers one-handed (à une main)</h3>
          <p className="mb-6">
            <strong>Avantages</strong> :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Allonge</strong> : Vous pouvez frapper la balle plus tôt et plus loin de votre corps</li>
            <li><strong>Variété</strong> : Meilleur contrôle pour les slices, les dropping shots, et les passing shots long de ligne</li>
            <li><strong>Élégance</strong> : Gestuelle plus fluide et esthétique (Federer, Wawrinka)</li>
            <li><strong>Adaptabilité</strong> : Plus facile de switcher sur le coup droit dans les échanges rapides</li>
          </ul>
          <p className="mb-6">
            <strong>Inconvénients</strong> :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Stabilité</strong> : Moins stable, prend plus de temps à maîtriser</li>
            <li><strong>Puissance</strong> : Moins de puissance brute (surtout sur les balles hautes)</li>
            <li><strong>RSI</strong> : Plus stressant pour l'avant-bras (tendinite)</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">Revers two-handed (à deux mains)</h3>
          <p className="mb-6">
            <strong>Avantages</strong> :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Puissance</strong> : Beaucoup plus de puissance grâce au double appui</li>
            <li><strong>Stabilité</strong> : La tête de raquette reste stable au contact</li>
            <li><strong>Facilité</strong> : Plus naturel pour les droitiers (main gauche guide)</li>
            <li><strong>Précision</strong> : Meilleur contrôle sur les coups droits et les passes</li>
          </ul>
          <p className="mb-6">
            <strong>Inconvénients</strong> :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Allonge</strong> : Difficile d'atteindre les balles très larges</li>
            <li><strong>Réactivité</strong> : Moins adapté aux volées et au jeu aufilet</li>
            <li><strong>Switch</strong> : Plus difficile de switcher en coup droit rapidement</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Technique du one-handed : Les 4 phases</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">1. La prise</h3>
          <p className="mb-6">
            Utilisez la <strong>prise Eastern backhand</strong> (mains en "shake hands" inversé). C'est la plus polyvalente. 
            Pour le slice, tournez un peu plus vers la <strong>Continental</strong>.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">2. La préparation</h3>
          <p className="mb-6">
            Déclenchez tôt ! La raquette doit passer derrière votre épaule dès la balle adverse touche le sol. 
            Le bras arrière (gauche pour un droitier one-handed) est tendu pour stabiliser le mouvement.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">3. Le point de contact</h3>
          <p className="mb-6">
            Contactez la balle <strong>devant votre corps</strong>, légèrement au-dessus de la taille. 
            La raquette doit être verticale ou légèrement fermée. Ne "cassez" pas le poignet au contact.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">4. Le follow-through</h3>
          <p className="mb-6">
            Continuitez le mouvement vers le haut et l'avant. Votre raquette doit finir au-dessus de votre épaule opposée, 
            comme une poignée de main avec l'adversaire. C'est ça le "high finish".
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Technique du two-handed : Les 4 phases</h2>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">1. La prise</h3>
          <p className="mb-6">
            Main droite (pour un droitier) en <strong>Eastern forehand</strong>, main gauche juste au-dessus en <strong>Continental</strong> ou Eastern. 
            C'est une poignée de marteau. Les deux mains doivent être en contact.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">2. La préparation</h3>
          <p className="mb-6">
            Les deux bras se déplacent ensemble. La préparation est plus compacte que le one-handed. 
            La raquette passe derrière les épaules, tournée légèrement. Pas besoin d'un takeback énorme.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">3. Le point de contact</h3>
          <p className="mb-6">
            Contactez la balle <strong>devant le corps, légèrement sur le côté</strong>. Les deux bras sont légèrement pliés au moment du contact. 
            La puissance vient des épaules et du torse, pas juste des bras.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">4. Le follow-through</h3>
          <p className="mb-6">
            Les deux bras restent proches du corps pendant le follow-through. La raquette finit sur l'épaule opposée. 
            C'est un mouvement plus "carré" que le one-handed.
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">🎥 Analyse vidéo de votre revers</h3>
            <p className="mb-4">
              Vous ne savez pas si vous avez la bonne technique ? Filmez-vous et obtenez une analyse détaillée avec exercices de correction personnalisés.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Voir nos tarifs
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Exercices pourProgresser</h2>
          
          <h3 className="text-xl font-bold mt-8 mb-4 text-white">Pour le one-handed</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Toss + revers sans balle</strong> : 30 fois, lentement, en insistant sur le finish</li>
            <li><strong>Revers en reverse uniquement</strong> : Freinez-vous le geste pour exagérer le slice</li>
            <li><strong>Drop shot practice</strong> : 20 revers courts avec effets</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4 text-white">Pour le two-handed</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Shadow swings avec élastique</strong> : résistance sur les deux mains pour stabiliser</li>
            <li><strong>Cross-court Rally</strong> : Échangez uniquement en revers cross, forcez-vous à rester dans la zone</li>
            <li><strong>Passing shots</strong> : Placez un partenaire au filet et travaillez les passes revers</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Faut-il changer de variante ?</h2>
          <p className="mb-6">
            Si vous avez déjà plus de 16 ans et que vous jouez avec une variante depuis plusieurs années, 
            <strong>ne changez pas</strong>. L'apprentissage d'un nouveau revers adulte est extrêmement long et douloureux. 
            Mieux vaut perfectionner ce que vous avez.
          </p>
          <p className="mb-6">
            En revanche, si vous êtes junior, choisissez selon votre morphologie :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Grands/forts</strong> : Two-handed (Nadal, Medvedev)</li>
            <li><strong>Agiles/longs</strong> : One-handed (Federer, Thiem)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Conclusion</h2>
          <p className="mb-6">
            Que vous soyez one-handed ou two-handed, la clé est la <strong>fluidité</strong> et la <strong>regularité</strong>. 
            Un revers simple mais efficace vaut mieux qu'un revers spectaculaire mais instable.
          </p>
          <p className="mb-6">
            Intégrez les exercices proposés dans vos entraînements, filmez-vous pour corriger les défauts, et patience : 
            le revers se travaille sur des mois, voire des années.
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

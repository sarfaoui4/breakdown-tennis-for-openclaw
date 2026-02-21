import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Analyse vidéo tennis : guide complet pour progresser | Tennis Breakdown",
  description: "Découvrez comment l'analyse vidéo peut transformer votre jeu. Guide complet : matériel, méthodes, exemples, et où faire analyser ses matchs.",
  keywords: ["analyse vidéo tennis", "analyser son match de tennis", "coach vidéo tennis", "progresser au tennis", "technique tennis", "corriger ses erreurs"],
}

export default function ArticleAnalyseVideo() {
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
          <h1 className="text-4xl font-bold mb-4">Analyse vidéo tennis : guide complet pour progresser</h1>
          <p className="text-gray-400 mb-8">
            Publié le 21 février 2025 • 10 min de lecture
          </p>

          <p className="mb-6">
            L'analyse vidéo est devenue un outil incontournable pour les joueurs de tennis qui veulent vraiment progresser. 
            Que vous soyez amateur ou compétiteur, filmer vos matchs et séances d'entraînement permet deidentifier les points 
            à améliorer avec une objectivité impossible à obtenir sur le court.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Pourquoi analayse vidéo est-elle si efficace ?</h2>
          <p className="mb-6">
            Notre cerveau est sujet à des biais. Sur le court, vous avez l'impression de bien faire, mais la vidéo révèle la réalité. 
            Voici les 3 raisons principales pour lesquelles l'analyse vidéo accélère votre progression :
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Objectivité totale</strong> : la vidéo ne ment pas. Vous voyez exactement ce que vous faites.</li>
            <li><strong>Feedback immédiat</strong> : voir son erreur en image est 10x plus efficace qu'une explication orale.</li>
            <li><strong>Mesure de la progression</strong> : comparez une vidéo d'il y a 3 mois avec une récente pour constater les améliorations.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Le matériel nécessaire</h2>
          <p className="mb-6">
            Vous n'avez pas besoin d'un équipement professionnel pour commencer. Voici le minimum requis :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Smartphone</strong> : capable d'enregistrer en 1080p (la plupart des phones récents)</li>
            <li><strong>Trépied</strong> : stable, hauteur réglable (environ 1m50)</li>
            <li><strong>Position idéale</strong> : sur le côté du court, à hauteur de la taille, pour voir tout le terrain</li>
            <li><strong>Stockage</strong> : prévoyez suffisamment d'espace (1 heure de vidéo = ~2-3 Go)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Comment filmer efficacement</h2>
          <p className="mb-6">
            La qualité de l'analyse dépend directement de la qualité de la prise de vue. Suivez ces règles :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Angle latéral</strong> : filmez de face légèrement décalé, jamais derrière le joueur</li>
            <li><strong>Cadre complet</strong> : incluez tout le terrain, filet inclus</li>
            <li><strong>Durée</strong> : minimum un set complet (6 jeux) ou 30 minutes de match</li>
            <li><strong>Stabilité</strong> : utilisez un trépied, évitez les mouvements de caméra</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Ce qu'on analyse dans une vidéo de tennis</h2>
          <p className="mb-6">
            Une analyse complète couvre plusieurs aspects techniques et tactiques :
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">1. Technique des coups</h3>
          <p className="mb-6">
            Préparation, point de contact, finish. On vérifie la fluidité, l'équilibre, et la répétabilité du geste.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">2. Placement et déplacement</h3>
          <p className="mb-6">
            Positionnement sur le court, transitions, récupération. Un bon placement réduit les efforts et augmente l'efficacité.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">3. Stratégie et tactique</h3>
          <p className="mb-6">
            Choix de coups, construction des points, variation. Comprendre pourquoi on gagne ou perd un point.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">4. Mental et comportement</h3>
          <p className="mb-6">
            Gestion des émotions, concentration, langage corporel. La vidéo révèle les moments de doute ou de relâchement.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Exemple concret : analyse d'un service</h2>
          <p className="mb-6">
            Prenons le service, coup fondamental. Un expert va examiner :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>La position des pieds (écart, angle)</li>
            <li>Le mouvement de balancier (toss)</li>
            <li>Le point de contact (hauteur, avancement)</li>
            <li>La finition (follow-through)</li>
            <li>La vitesse et l'effet obtenus</li>
          </ul>
          <p className="mb-6">
            Sur la vidéo, on peut ralentir image par image et ajouter des annotations pour montrer les corrections à apporter.
          </p>

          <div className="bg-orange-500/10 border border-orange-500 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">✨ Offre spéciale : première analyse à prix réduit</h3>
            <p className="mb-4">
              En ce moment, profitez de -20% sur votre première analyse vidéo avec le code <strong>WELCOME20</strong>.
              Recevez un rapport détaillé avec commentaires audio, schémas et exercices de correction.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Voir les tarifs
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Comment obtenir une analyse professionnelle ?</h2>
          <p className="mb-6">
            1. <strong>Uploadez</strong> votre vidéo sur notre plateforme sécurisée.<br/>
            2. <strong>Choisissez</strong> le type d'analyse (Basic ou Premium).<br/>
            3. <strong>Recevez</strong> votre analyse sous 24-48h, avec vidéo commentée et PDF détaillé.<br/>
            4. <strong>Appliquez</strong> les conseils sur le court et voyez la différence !
          </p>

          <p className="mb-6">
            Notre équipe d'experts tennis analyse chaque point avec soin et vous donne des recommandations personnalisées 
            pour progresser rapidement. Que vous souhaitiez améliorer votre service, votre revers ou votre stratégie, 
            nous sommes là pour vous aider.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Conclusion</h2>
          <p className="mb-6">
            L'analyse vidéo est l'outil le plus puissant pour quilter l'écart entre votre sensation et la réalité technique. 
            En commençant à filmer vos matchs et en faisant appel à des experts pour l'analyse, vous gagnez des mois de progression.
          </p>
          <p className="mb-6">
            <strong>Prêt à transformer votre jeu ?</strong> Téléchargez notre guide gratuit sur l'analyse vidéo 
            ou passez directement à une analyse personnalisée.
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 my-8 text-center">
            <h3 className="text-xl font-bold mb-3">📥 Téléchargez le guide gratuit</h3>
            <p className="text-gray-300 mb-4">
              Recevez notre PDF "Le guide ultime de l'analyse vidéo tennis" (30 pages) par email.
            </p>
            <a href="/lead" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Obtenir le guide
            </a>
          </div>
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

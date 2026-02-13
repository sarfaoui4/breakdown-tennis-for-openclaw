import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-[#FF5722]">Tarifs</h1>
      <p className="text-center text-[#A0A0A0] mb-10 max-w-2xl mx-auto">
        Deux offres pour s&apos;adapter à vos besoins. Vidéos de 15 minutes maximum.
      </p>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {/* Offre 1 */}
        <div className="p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
          <h2 className="text-xl font-semibold mb-2">Match Breakdown</h2>
          <p className="text-3xl font-bold text-[#FF5722] mb-4">29 – 39€ <span className="text-base font-normal text-[#A0A0A0]">par vidéo</span></p>
          <p className="text-[#A0A0A0] mb-4">
            Pour les joueurs compétiteurs, intermédiaires à avancés, qui veulent une analyse technique et tactique précise.
          </p>
          <ul className="text-[#A0A0A0] space-y-2 mb-6">
            <li>✓ Analyse technique détaillée</li>
            <li>✓ Analyse tactique (patterns de jeu)</li>
            <li>✓ Points forts / points faibles</li>
            <li>✓ Ajustements concrets</li>
            <li>✓ Feedback clair et actionnable</li>
            <li>• Vidéo max 15 minutes</li>
          </ul>
          <Link href="/signup" className="block w-full text-center px-6 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
            Commander
          </Link>
        </div>

        {/* Offre 2 */}
        <div className="p-6 border border-[#FF5722] rounded-xl bg-[#1A1A1A] relative">
          <div className="absolute top-0 right-0 bg-[#FF5722] text-white text-xs px-2 py-1 rounded-bl-lg">Recommandé</div>
          <h2 className="text-xl font-semibold mb-2">Performance Breakdown</h2>
          <p className="text-3xl font-bold text-[#FF5722] mb-4">59 – 79€ <span className="text-base font-normal text-[#A0A0A0]">par vidéo</span></p>
          <p className="text-[#A0A0A0] mb-4">
            Pour les joueurs très engagés, classement élevé, juniors ambitieux. Un plan de progression complet.
          </p>
          <ul className="text-[#A0A0A0] space-y-2 mb-6">
            <li>✓ Analyse complète (technique + tactique)</li>
            <li>✓ Plan de progression personnalisé</li>
            <li>✓ Axes d&apos;entraînement ciblés</li>
            <li>✓ Ajustements tactiques avancés</li>
            <li>✓ Recommandations personnalisées</li>
            <li>• Vidéo max 15 minutes</li>
          </ul>
          <Link href="/signup" className="block w-full text-center px-6 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
            Commander
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center text-[#A0A0A0]">
        <p>
          Les tarifs varient selon la complexité et la durée (dans la fourchette indiquée). 
          Un devis personnalisé peut être établi. 
          <Link href="/support" className="text-[#FF5722] hover:underline"> Contactez-nous</Link> pour toute question.
        </p>
      </div>
    </div>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]">
        <div className="text-2xl font-bold text-[#FF5722]">Tennis Breakdown</div>
        <div className="hidden sm:flex gap-6">
          <Link href="#features" className="hover:text-[#FF5722]">Fonctionnalités</Link>
          <Link href="#offres" className="hover:text-[#FF5722]">Offres</Link>
          <Link href="/login" className="hover:text-[#FF5722]">Connexion</Link>
          <Link href="/signup" className="hover:text-[#FF5722]">Inscription</Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Analyse vidéo de tennis <span className="text-[#FF5722]">haute performance</span> — V2
        </h1>
        <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto mb-10">
          Vous envoyez vos vidéos (≤15 min), un expert analyse chaque point et vous renvoie un feedback clair et actionnable. 
          Idéal pour les joueurs compétiteurs qui veulent progresser rapidement.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/signup" className="px-8 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
            Commencer maintenant
          </Link>
          <Link href="#offres" className="px-8 py-3 rounded-full border border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white transition">
            Voir les offres
          </Link>
        </div>
      </header>

      {/* Comment ça marche */}
      <section className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Comment ça marche</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FF5722] mb-2">1</div>
              <h3 className="text-xl font-semibold mb-2">Upload</h3>
              <p className="text-[#A0A0A0]">Envoyez votre vidéo (≤15 min, MP4/ MOV/ AVI).</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5722] mb-2">2</div>
              <h3 className="text-xl font-semibold mb-2">Analyse</h3>
              <p className="text-[#A0A0A0]">Un expert tennis analyse votre jeu avec soin.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF5722] mb-2">3</div>
              <h3 className="text-xl font-semibold mb-2">Livraison</h3>
              <p className="text-[#A0A0A0]">Recevez un commentaire vidéo détaillé sous 48h.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Nos offres</h2>
          <p className="text-center text-[#A0A0A0] mb-10">Vidéos de 15 minutes maximum.</p>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Match Breakdown */}
            <div className="p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
              <h3 className="text-xl font-semibold mb-2 text-[#FF5722]">Match Breakdown</h3>
              <p className="text-3xl font-bold mb-4">29 – 39€ <span className="text-base font-normal text-[#A0A0A0]">/ vidéo</span></p>
              <p className="text-[#A0A0A0] mb-4">
                Pour joueurs compétiteurs, intermédiaires à avancés.
              </p>
              <ul className="text-[#A0A0A0] space-y-2 mb-6">
                <li>✓ Analyse technique</li>
                <li>✓ Analyse tactique</li>
                <li>✓ Points forts / faibles</li>
                <li>✓ Ajustements concrets</li>
                <li>✓ Feedback actionnable</li>
              </ul>
              <Link href="/signup" className="block w-full text-center px-6 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
                Commander
              </Link>
            </div>

            {/* Performance Breakdown */}
            <div className="p-6 border border-[#FF5722] rounded-xl bg-[#1A1A1A] relative">
              <div className="absolute top-0 right-0 bg-[#FF5722] text-white text-xs px-2 py-1 rounded-bl-lg">Recommandé</div>
              <h3 className="text-xl font-semibold mb-2 text-[#FF5722]">Performance Breakdown</h3>
              <p className="text-3xl font-bold mb-4">59 – 79€ <span className="text-base font-normal text-[#A0A0A0]">/ vidéo</span></p>
              <p className="text-[#A0A0A0] mb-4">
                Pour joueurs très engagés, classement élevé, juniors ambitieux.
              </p>
              <ul className="text-[#A0A0A0] space-y-2 mb-6">
                <li>✓ Analyse complète</li>
                <li>✓ Plan de progression</li>
                <li>✓ Axes d&apos;entraînement</li>
                <li>✓ Ajustements tactiques avancés</li>
                <li>✓ Recommandations personnalisées</li>
              </ul>
              <Link href="/signup" className="block w-full text-center px-6 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
                Commander
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi Tennis Breakdown ?</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-4 border border-[#2A2A2A] rounded-lg bg-[#141414]">
              <h3 className="text-xl font-semibold mb-2 text-[#FF5722]">Expertise tennis</h3>
              <p className="text-[#A0A0A0]">Analystes diplômés d&apos;État, anciens joueurs pros. Une connaissance approfondie du jeu.</p>
            </div>
            <div className="p-4 border border-[#2A2A2A] rounded-lg bg-[#141414]">
              <h3 className="text-xl font-semibold mb-2 text-[#FF5722]">Feedback actionnable</h3>
              <p className="text-[#A0A0A0]">Pas de généralités : des conseils précis que vous pouvez appliquer dès le prochain entraînement.</p>
            </div>
            <div className="p-4 border border-[#2A2A2A] rounded-lg bg-[#141414]">
              <h3 className="text-xl font-semibold mb-2 text-[#FF5722]">Rapidité</h3>
              <p className="text-[#A0A0A0]">Livraison sous 24–48h, vous ne perdez pas de temps.</p>
            </div>
            <div className="p-4 border border-[#2A2A2A] rounded-lg bg-[#141414]">
              <h3 className="text-xl font-semibold mb-2 text-[#FF5722]">Confidentialité</h3>
              <p className="text-[#A0A0A0]">Vos vidéos ne sont jamais utilisées pour l&apos;entraînement IA sans votre accord.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="px-6 py-16 border-t border-[#2A2A2A] text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à passer au niveau supérieur ?</h2>
        <p className="mb-8 text-[#A0A0A0]">Créez un compte, uploadez votre vidéo et recevez votre analyse.</p>
        <Link href="/signup" className="px-8 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
          Créer un compte
        </Link>
      </footer>
    </div>
  );
}
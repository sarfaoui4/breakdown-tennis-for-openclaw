export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] flex items-center justify-center px-6">
      <div className="max-w-md w-full p-6 border border-[#2A2A2A] rounded-xl bg-[#141414] text-center">
        <h1 className="text-2xl font-bold mb-4 text-[#FF5722]">Connexion</h1>
        <p className="text-[#A0A0A0] mb-6">Mode démo – l&apos;authentification sera disponible prochainement.</p>
        <a href="/" className="inline-block px-6 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
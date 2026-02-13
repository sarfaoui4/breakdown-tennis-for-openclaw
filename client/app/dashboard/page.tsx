export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#FF5722]">Mon Dashboard</h1>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#A0A0A0] mb-6">Connectez-vous pour accéder à votre dashboard.</p>
        <a href="/" className="inline-block px-8 py-3 rounded-full bg-[#FF5722] text-white font-semibold hover:brightness-110 transition">
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
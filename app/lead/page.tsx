'use client';

import { useState } from 'react';

export default function LeadMagnetPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/lead/download?email=${encodeURIComponent(email)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors du téléchargement');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `guide-erreurs-tennis-${email}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setMessage({ type: 'success', text: 'PDF téléchargé avec succès !' });
      setEmail('');
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <h1 className="text-2xl font-bold">Tennis Breakdown</h1>
          </div>
          <a href="/auth/login" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
            Connexion
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>📖</span> Guide Gratuit
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Les <span className="text-orange-400">10 erreurs</span> qui bloquent ta progression au tennis
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Découvre les fautes techniques les plus courantes (et comment les corriger) pour passer au niveau supérieur.
            </p>
            <ul className="space-y-4 mb-8 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Guide détaillé de 15 pages avec illustrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Checklist pratique pour auto-évaluation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Exercices corrigés pour chaque erreur</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>100% gratuit — pas de carte bancaire</span>
              </li>
            </ul>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Télécharge ton guide</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Ton email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="exemple@email.com"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? '⏳ Génération...' : '📥 Télécharger le PDF gratuit'}
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Pas de spam. Désabonne-toi à tout moment.
              </p>
            </div>
            {message && (
              <div className={`fixed top-4 right-4 max-w-sm p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-900 border border-green-700 text-green-100' 
                  : 'bg-red-900 border border-red-700 text-red-100'
              }`}>
                {message.text}
              </div>
            )}
            <div className="mt-8 flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-900 flex items-center justify-center text-xs">P</div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-900 flex items-center justify-center text-xs">J</div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-900 flex items-center justify-center text-xs">M</div>
              </div>
              <span>+250 joueurs déjà téléchargés</span>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="sticky top-8">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-900 rounded-lg p-8 min-h-[600px]">
                  <div className="border-b border-gray-700 pb-4 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-2xl">
                        🎾
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Tennis Breakdown</h2>
                        <p className="text-orange-400 text-sm">Guide Expert</p>
                      </div>
                    </div>
                    <h1 className="text-3xl font-bold leading-tight mb-2">
                      10 Erreurs Techniques Qui Bloquent Ta Progression
                    </h1>
                    <p className="text-gray-400">Par l'équipe Tennis Breakdown</p>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h3 className="text-orange-400 font-bold mb-2">Erreur #1 - La prise de raquette trop serrée</h3>
                      <p className="text-sm">
                        La majorité des joueurs amateurs serrent leur raquette comme si leur vie en dépendait...
                      </p>
                    </div>
                    <div>
                      <h3 className="text-orange-400 font-bold mb-2">Erreur #2 - Le geste de revers incomplet</h3>
                      <p className="text-sm">
                        Le revers n'est pas qu'un simple geste de bras. La rotation du corps fait 70% de la puissance...
                      </p>
                    </div>
                    <div>
                      <h3 className="text-orange-400 font-bold mb-2">Erreur #3 - Le placement des pieds sur le service</h3>
                      <p className="text-sm">
                        Si tes pieds ne sont pas bien alignés, tu perds 40% de ton potentiel...
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <p className="text-center text-gray-500 text-sm italic">
                      ... + 7 autres erreurs + exercices corrigés à l'intérieur
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                  ✅ PDF de 15 pages — Format A4
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm">
        <p>© 2026 Tennis Breakdown. Guide gratuit pour les joueurs de tennis passionnés.</p>
      </div>
    </div>
  );
}

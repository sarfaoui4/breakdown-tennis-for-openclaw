'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [offer, setOffer] = useState<'match' | 'performance' | 'elite'>('match');
  const router = useRouter();

  useEffect(() => {
    // Vérifier la session
    const getSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
        // Charger les orders de l'utilisateur
        const { data } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        setOrders(data || []);
      }
    };
    getSession();

    // Écouter les changements d'auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        router.push('/login');
      }
    });
    return () => subscription.unsubscribe();
  }, [router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !user) return;
    setUploading(true);
    try {
      // Upload vers Supabase Storage (bucket 'uploads')
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      const { error } = await supabase.storage
        .from('uploads')
        .upload(fileName, file, { upsert: true });

      if (error) throw error;

      const videoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/uploads/${fileName}`;

      // Optionnel : enregistrer l'upload en base (temporaire) ou lier à un order via checkout
      // Pour l'instant on attend le paiement pour créer l'order
      alert('Video uploaded successfully! Now choose an offer and pay.');
      // On stocke l'URL dans localStorage pour récupérer au checkout
      localStorage.setItem('pendingVideoUrl', videoUrl);
    } catch (err: any) {
      alert('Upload error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleCheckout = async () => {
    const videoUrl = localStorage.getItem('pendingVideoUrl');
    if (!videoUrl) {
      alert('Please upload a video first.');
      return;
    }

    // Créer une session de paiement
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ offer })
    });
    const data = await res.json();
    if (data.url) {
      // Stocker l'URL de la vidéo temporairement (à récupérer au webhook)
      // Note: on pourrait passer videoUrl en metadata dans Stripe (size limit)
      // Pour l'instant on l'envoie dans le metadata
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } else {
      alert('Checkout failed: ' + data.error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
      <nav className="px-6 py-4 border-b border-[#2A2A2A] flex justify-between items-center">
        <div className="text-xl font-bold text-[#FF5722]">Tennis Breakdown – Dashboard</div>
        <button onClick={() => supabase.auth.signOut()} className="text-[#A0A0A0] hover:text-white">Logout</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user?.email}</h1>

        {/* Section Upload */}
        <section className="mb-12 p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
          <h2 className="text-2xl font-bold text-[#FF5722] mb-4">1. Upload your match video</h2>
          <input type="file" accept="video/*" onChange={handleFileChange} className="mb-4" />
          <button
            onClick={handleUpload}
            disabled={uploading || !file}
            className="px-6 py-2 rounded-full bg-[#FF5722] text-white font-bold disabled:opacity-50"
          >
            {uploading ? 'Uploading...' : 'Upload Video'}
          </button>
        </section>

        {/* Section Choose Offer */}
        <section className="mb-12 p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
          <h2 className="text-2xl font-bold text-[#FF5722] mb-4">2. Choose your analysis</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className={`p-4 border rounded-xl ${offer === 'match' ? 'border-[#FF5722]' : 'border-[#2A2A2A]'}`}>
              <h3 className="font-bold mb-2">Match Breakdown</h3>
              <p className="text-xl mb-4">39€</p>
              <button onClick={() => setOffer('match')} className="w-full py-2 rounded-full border border-[#FF5722] text-[#FF5722]">Select</button>
            </div>
            <div className={`p-4 border rounded-xl ${offer === 'performance' ? 'border-[#FF5722]' : 'border-[#2A2A2A]'}`}>
              <h3 className="font-bold mb-2">Performance Breakdown</h3>
              <p className="text-xl mb-4">69€</p>
              <button onClick={() => setOffer('performance')} className="w-full py-2 rounded-full border border-[#FF5722] text-[#FF5722]">Select</button>
            </div>
            <div className={`p-4 border rounded-xl ${offer === 'elite' ? 'border-[#FF5722]' : 'border-[#2A2A2A]'}`}>
              <h3 className="font-bold mb-2">Elite Breakdown</h3>
              <p className="text-xl mb-4">119€</p>
              <button onClick={() => setOffer('elite')} className="w-full py-2 rounded-full border border-[#FF5722] text-[#FF5722]">Select</button>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-3 rounded-full bg-[#FF5722] text-white font-bold"
          >
            Proceed to Payment
          </button>
        </section>

        {/* Section Historique */}
        <section className="p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
          <h2 className="text-2xl font-bold text-[#FF5722] mb-4">Your Orders</h2>
          {orders.length === 0 ? (
            <p className="text-[#A0A0A0]">No orders yet.</p>
          ) : (
            <ul className="space-y-4">
              {orders.map((order) => (
                <li key={order.id} className="border-b border-[#2A2A2A] pb-4">
                  <p><strong>Status:</strong> {order.status}</p>
                  <p><strong>Price ID:</strong> {order.price_id}</p>
                  {order.comment_url && (
                    <a href={order.comment_url} className="text-[#FF5722]">View your analysis</a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

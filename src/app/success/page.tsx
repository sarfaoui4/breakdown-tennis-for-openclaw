'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutComplete() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [uploadToken, setUploadToken] = useState<string | null>(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      return;
    }

    const token = btoa(`${sessionId}:${Date.now()}`).replace(/=/g, '');
    setUploadToken(token);
    setStatus('success');
  }, [sessionId]);

  const handleFileUpload = async (file: File) => {
    if (!uploadToken) return alert('Token manquant');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('token', uploadToken);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Upload réussi ! Nous analystons ta vidéo.');
    } else {
      alert('Erreur lors de l\'upload');
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Chargement...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Session invalide.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎉 Paiement réussi !</h1>
        <p className="mb-6 text-gray-300">
          Merci pour ta commande. Tu peux maintenant envoyer ta vidéo pour analyse.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">📤 Envoie ta vidéo</h2>
          <p className="text-sm text-gray-400 mb-4">
            Formats acceptés : MP4, MOV (max 500 Mo)
          </p>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
            className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
          />
        </div>

        <p className="text-sm text-gray-500">
          Après l'upload, tu recevras un email de confirmation. L'analyse sera envoyée sous 24-48h.
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutComplete />
    </Elements>
  );
}

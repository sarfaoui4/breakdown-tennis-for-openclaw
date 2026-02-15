'use client'

import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] border border-red-500 rounded-2xl p-8 max-w-lg w-full text-center">
        <div className="mb-6">
          <XCircle className="w-20 h-20 text-red-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Paiement annulé</h1>
        <p className="text-gray-400 mb-6">
          Vous avez annulé le processus de paiement. Aucun frais n'a été encouru.
        </p>
        <div className="space-y-3">
          <Link
            href="/dashboard/payments"
            className="block w-full bg-[#ff5722] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#e64a19] transition-colors"
          >
            Réessayer le paiement
          </Link>
          <Link
            href="/dashboard"
            className="block w-full border border-gray-600 text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Retour au dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

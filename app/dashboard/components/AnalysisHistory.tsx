'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Analysis {
  id: string
  title: string
  description: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  created_at: string
  video_url?: string
  player1?: string
  player2?: string
  tournament?: string
}

interface AnalysisHistoryProps {
  analyses: Analysis[]
}

export default function AnalysisHistory({ analyses }: AnalysisHistoryProps) {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'failed'>('all')

  const filteredAnalyses = filter === 'all' 
    ? analyses 
    : analyses.filter(a => a.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400'
      case 'processing': return 'bg-blue-500/20 text-blue-400'
      case 'pending': return 'bg-orange-500/20 text-orange-400'
      case 'failed': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminée'
      case 'processing': return 'En cours'
      case 'pending': return 'En attente'
      case 'failed': return 'Échouée'
      default: return status
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date)
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white mb-4 md:mb-0">Historique des analyses</h3>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Toutes
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            En attente
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Terminées
          </button>
          <button
            onClick={() => setFilter('failed')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'failed'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Échouées
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Analyse</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Joueurs</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Tournoi</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Statut</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnalyses.length > 0 ? (
              filteredAnalyses.map((analysis) => (
                <tr key={analysis.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-white">{analysis.title}</div>
                      <div className="text-sm text-gray-400">{analysis.description}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-white">
                      {analysis.player1} vs {analysis.player2}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-300">{analysis.tournament || 'Non spécifié'}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(analysis.status)}`}>
                      {getStatusLabel(analysis.status)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-300">{formatDate(analysis.created_at)}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <Link
                        href={`/dashboard/analyses/${analysis.id}`}
                        className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors"
                      >
                        Voir
                      </Link>
                      {analysis.video_url && (
                        <button className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg text-sm font-medium transition-all">
                          Rejouer
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center">
                  <div className="text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-lg mb-2">Aucune analyse trouvée</p>
                    <p className="text-sm">Commencez par analyser votre premier match de tennis</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {analyses.length > 0 && (
        <div className="mt-6 flex justify-center">
          <Link
            href="/dashboard/history"
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            Voir tout l'historique
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  )
}
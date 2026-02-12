'use client'

import { User } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from './AdminSidebar'
import SubmissionsTable from './SubmissionsTable'
import AnalyticsDashboard from './AnalyticsDashboard'

// Composants de secours pour build
const AssignmentSystem = ({ analyses, onAssign }: any) => (
  <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
    <h3 className="text-xl font-bold mb-4">Système d'attribution</h3>
    <p className="text-gray-400">Version simplifiée pour build initial</p>
  </div>
)

const UploadInterface = ({ analyses, onUpload }: any) => (
  <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
    <h3 className="text-xl font-bold mb-4">Interface d'upload</h3>
    <p className="text-gray-400">Version simplifiée pour build initial</p>
  </div>
)

interface Analysis {
  id: string
  user_id: string
  video_url: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  assigned_to: string | null
  assigned_at: string | null
  created_at: string
  updated_at: string
  user_email?: string
  user_name?: string
}

interface Stats {
  totalSubmissions: number
  submissionsToday: number
  revenueTotal: number
  revenueToday: number
  pendingAssignments: number
  completedAnalyses: number
}

export default function AdminDashboard({ user }: { user: User }) {
  const [activeTab, setActiveTab] = useState('submissions')
  const [analyses, setAnalyses] = useState<Analysis[]>([])
  const [stats, setStats] = useState<Stats>({
    totalSubmissions: 0,
    submissionsToday: 0,
    revenueTotal: 0,
    revenueToday: 0,
    pendingAssignments: 0,
    completedAnalyses: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const supabase = createClient()
    
    // Récupérer toutes les analyses avec les informations utilisateur
    const { data: analysesData } = await supabase
      .from('analyses')
      .select(`
        *,
        users (
          email,
          full_name
        )
      `)
      .order('created_at', { ascending: false })

    // Transformer les données pour inclure l'email utilisateur
    const formattedAnalyses: Analysis[] = (analysesData || []).map((analysis: any) => ({
      ...analysis,
      user_email: analysis.users?.email,
      user_name: analysis.users?.full_name
    }))

    setAnalyses(formattedAnalyses)

    // Calculer les statistiques
    const today = new Date().toISOString().split('T')[0]
    const todayAnalyses = formattedAnalyses.filter(a => 
      a.created_at?.startsWith(today)
    )
    const pendingAnalyses = formattedAnalyses.filter(a => 
      a.status === 'pending' && !a.assigned_to
    )
    const completedAnalyses = formattedAnalyses.filter(a => 
      a.status === 'completed'
    )

    // Simuler les revenus (à remplacer par des vraies données Stripe)
    const revenueTotal = formattedAnalyses.length * 49.99
    const revenueToday = todayAnalyses.length * 49.99

    setStats({
      totalSubmissions: formattedAnalyses.length,
      submissionsToday: todayAnalyses.length,
      revenueTotal,
      revenueToday,
      pendingAssignments: pendingAnalyses.length,
      completedAnalyses: completedAnalyses.length
    })

    setLoading(false)
  }

  const handleAssignToSami = async (analysisId: string) => {
    const supabase = createClient()
    const { error } = await supabase
      .from('analyses')
      .update({
        assigned_to: 'sami',
        assigned_at: new Date().toISOString(),
        status: 'processing'
      })
      .eq('id', analysisId)

    if (!error) {
      fetchData()
    }
  }

  const handleUploadAnalysis = async (analysisId: string, videoUrl: string, textAnalysis: string) => {
    const supabase = createClient()
    const { error } = await supabase
      .from('analyses')
      .update({
        status: 'completed',
        result_video_url: videoUrl,
        text_analysis: textAnalysis,
        completed_at: new Date().toISOString()
      })
      .eq('id', analysisId)

    if (!error) {
      fetchData()
      return true
    }
    return false
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-300">Chargement du dashboard admin...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Tennis Breakdown Admin</h1>
              <p className="text-sm text-gray-400">Dashboard d'administration</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              Connecté en tant que <span className="font-semibold text-orange-400">{user.email}</span>
            </span>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg border border-gray-700 transition-colors">
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-300">Soumissions totales</h3>
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{stats.totalSubmissions}</div>
              <div className="text-sm text-gray-400 mt-2">
                <span className="text-green-400">+{stats.submissionsToday} aujourd'hui</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-300">Revenus totaux</h3>
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">${stats.revenueTotal.toFixed(2)}</div>
              <div className="text-sm text-gray-400 mt-2">
                <span className="text-green-400">+${stats.revenueToday.toFixed(2)} aujourd'hui</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-300">À attribuer à Sami</h3>
                <div className="bg-yellow-500/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{stats.pendingAssignments}</div>
              <div className="text-sm text-gray-400 mt-2">Analyses en attente</div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-300">Analyses terminées</h3>
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{stats.completedAnalyses}</div>
              <div className="text-sm text-gray-400 mt-2">
                <span className="text-green-400">
                  {stats.totalSubmissions > 0 
                    ? `${((stats.completedAnalyses / stats.totalSubmissions) * 100).toFixed(1)}% de réussite`
                    : '0% de réussite'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'submissions' && (
            <SubmissionsTable 
              analyses={analyses} 
              onAssign={handleAssignToSami}
            />
          )}
          
          {activeTab === 'analytics' && (
            <AnalyticsDashboard analyses={analyses} />
          )}
          
          {activeTab === 'assignment' && (
            <AssignmentSystem 
              analyses={analyses.filter(a => a.status === 'pending' && !a.assigned_to)}
              onAssign={handleAssignToSami}
            />
          )}
          
          {activeTab === 'upload' && (
            <UploadInterface 
              analyses={analyses.filter(a => a.status === 'processing' && a.assigned_to === 'sami')}
              onUpload={handleUploadAnalysis}
            />
          )}
        </main>
      </div>
    </div>
  )
}
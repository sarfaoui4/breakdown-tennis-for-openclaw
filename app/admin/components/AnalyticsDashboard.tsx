// Composant de secours pour AnalyticsDashboard
export default function AnalyticsDashboard({ analyses }: any) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-4">Analytiques</h3>
      <p className="text-gray-400">Version simplifiée pour build initial</p>
      <div className="mt-4 text-sm">
        <p>Analyses totales: {analyses?.length || 0}</p>
      </div>
    </div>
  )
}
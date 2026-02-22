// Composant de secours pour SubmissionsTable
export default function SubmissionsTable({ analyses, onAssign }: any) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-4">Soumissions</h3>
      <p className="text-gray-400 mb-4">Version simplifiée pour build initial</p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Utilisateur</th>
              <th className="text-left py-3 px-4">Statut</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {analyses.slice(0, 3).map((analysis: any) => (
              <tr key={analysis.id} className="border-b border-gray-700">
                <td className="py-3 px-4">{analysis.id.substring(0, 8)}...</td>
                <td className="py-3 px-4">{analysis.user_email || 'N/A'}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    analysis.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    analysis.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {analysis.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => onAssign?.(analysis.id)}
                    className="px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded text-sm"
                  >
                    Attribuer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
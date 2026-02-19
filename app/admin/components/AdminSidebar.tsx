// Composant de secours pour AdminSidebar
export default function AdminSidebar({ activeTab, setActiveTab }: any) {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen p-6">
      <h2 className="text-lg font-bold mb-6">Administration</h2>
      <nav className="space-y-2">
        {['submissions', 'analytics', 'assignment', 'upload'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              activeTab === tab 
                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  )
}
interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  color: 'green' | 'orange' | 'red' | 'blue'
}

export default function StatsCard({ title, value, change, icon, color }: StatsCardProps) {
  const colorClasses = {
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    blue: 'from-blue-500 to-blue-600'
  }

  const bgColorClasses = {
    green: 'bg-green-500/10 border-green-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20',
    red: 'bg-red-500/10 border-red-500/20',
    blue: 'bg-blue-500/10 border-blue-500/20'
  }

  const changeColor = change.startsWith('+') ? 'text-green-400' : 'text-red-400'

  return (
    <div className={`rounded-2xl p-6 border ${bgColorClasses[color]}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClasses[color]}`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        <span className={`text-sm font-medium ${changeColor}`}>
          {change}
        </span>
      </div>
      <div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-300">{title}</div>
      </div>
    </div>
  )
}
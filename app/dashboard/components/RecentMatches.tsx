'use client'

import Link from 'next/link'

const matches = [
  {
    id: 1,
    tournament: 'Roland Garros',
    date: '2026-06-09',
    player1: { name: 'Carlos Alcaraz', flag: '🇪🇸', winner: true },
    player2: { name: 'Jannik Sinner', flag: '🇮🇹', winner: false },
    score: '6-3, 6-7, 7-6, 6-4',
    duration: '4h 15m',
    stats: { aces: 18, doubleFaults: 3, breakPoints: 5 },
  },
  {
    id: 2,
    tournament: 'Wimbledon',
    date: '2026-07-14',
    player1: { name: 'Novak Djokovic', flag: '🇷🇸', winner: true },
    player2: { name: 'Alexander Zverev', flag: '🇩🇪', winner: false },
    score: '7-6, 6-4, 6-3',
    duration: '3h 02m',
    stats: { aces: 12, doubleFaults: 2, breakPoints: 3 },
  },
  {
    id: 3,
    tournament: 'US Open',
    date: '2026-09-08',
    player1: { name: 'Daniil Medvedev', flag: '🇷🇺', winner: false },
    player2: { name: 'Holger Rune', flag: '🇩🇰', winner: true },
    score: '6-4, 3-6, 7-5, 6-7, 6-3',
    duration: '4h 45m',
    stats: { aces: 22, doubleFaults: 8, breakPoints: 7 },
  },
  {
    id: 4,
    tournament: 'Australian Open',
    date: '2026-01-28',
    player1: { name: 'Rafael Nadal', flag: '🇪🇸', winner: true },
    player2: { name: 'Stefanos Tsitsipas', flag: '🇬🇷', winner: false },
    score: '6-4, 6-4, 7-5',
    duration: '2h 58m',
    stats: { aces: 9, doubleFaults: 1, breakPoints: 4 },
  },
  {
    id: 5,
    tournament: 'ATP Finals',
    date: '2025-11-19',
    player1: { name: 'Taylor Fritz', flag: '🇺🇸', winner: false },
    player2: { name: 'Casper Ruud', flag: '🇳🇴', winner: true },
    score: '7-6, 6-3',
    duration: '2h 15m',
    stats: { aces: 14, doubleFaults: 5, breakPoints: 2 },
  },
]

export default function RecentMatches() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Matchs récents</h3>
        <Link href="/matches" className="text-green-600 hover:text-green-700 font-medium">
          Voir tout →
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Tournoi</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Joueurs</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Score</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Durée</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Statistiques</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={match.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="font-medium">{match.tournament}</div>
                  <div className="text-sm text-gray-500">{match.date}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="space-y-2">
                    <div className={`flex items-center gap-2 ${match.player1.winner ? 'font-semibold' : ''}`}>
                      <span>{match.player1.flag}</span>
                      <span>{match.player1.name}</span>
                      {match.player1.winner && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">V</span>
                      )}
                    </div>
                    <div className={`flex items-center gap-2 ${match.player2.winner ? 'font-semibold' : ''}`}>
                      <span>{match.player2.flag}</span>
                      <span>{match.player2.name}</span>
                      {match.player2.winner && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">V</span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 font-medium">{match.score}</td>
                <td className="py-4 px-4">{match.duration}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Aces</div>
                      <div className="font-medium">{match.stats.aces}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">DF</div>
                      <div className="font-medium">{match.stats.doubleFaults}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">BP</div>
                      <div className="font-medium">{match.stats.breakPoints}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Link
                    href={`/matches/${match.id}`}
                    className="text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Analyser
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
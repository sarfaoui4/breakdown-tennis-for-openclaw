import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardNavbar from './components/DashboardNavbar'
import Sidebar from './components/Sidebar'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <DashboardNavbar user={user} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
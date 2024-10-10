'use client'

import { useState } from 'react'
import { Bell, Home, BarChart2, Settings, PlusCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MobileAppLayoutProps {
  children: React.ReactNode;
}

export function MobileAppLayout({ children }: MobileAppLayoutProps) {
  const [activePage, setActivePage] = useState('home')

  const NavButton = ({ icon, page }: { icon: React.ReactNode; page: string }) => (
    <button
      className={`p-2 rounded-full ${
        activePage === page
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-secondary-foreground'
      }`}
      onClick={() => setActivePage(page)}
    >
      {icon}
    </button>
  )

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background to-secondary">
      {/* Top Bar */}
      <header className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-md">
        <Avatar className="w-10 h-10 border-2 border-primary">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
        <Bell className="w-6 h-6 text-primary" />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 overflow-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4">
        <div className="flex justify-around items-center bg-background/70 backdrop-blur-md rounded-full p-2 shadow-lg">
          <NavButton icon={<Home className="w-6 h-6" />} page="home" />
          <NavButton icon={<BarChart2 className="w-6 h-6" />} page="analytics" />
          <NavButton icon={<Settings className="w-6 h-6" />} page="settings" />
          <NavButton icon={<PlusCircle className="w-6 h-6" />} page="add" />
        </div>
      </nav>
    </div>
  )
}
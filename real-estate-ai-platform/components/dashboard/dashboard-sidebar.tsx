"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, Building2, ChevronDown, CreditCard, Home, Menu, Plus, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebar-provider"
import { cn } from "@/lib/utils"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { isOpen, setIsOpen, isMobile } = useSidebar()

  const routes = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Voice Agents",
      href: "/dashboard/voice-agents",
      icon: Bot,
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
      icon: Building2,
    },
    {
      name: "Leads",
      href: "/dashboard/leads",
      icon: Users,
    },
    {
      name: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  if (isMobile && !isOpen) {
    return (
      <Button variant="ghost" size="icon" className="fixed left-4 top-4 z-40 md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <>
      {isMobile && isOpen && <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setIsOpen(false)} />}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-neutral-200 bg-white transition-transform duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-900",
          isMobile && !isOpen && "-translate-x-full",
          isMobile && isOpen && "translate-x-0",
          !isMobile && !isOpen && "-translate-x-full",
          !isMobile && isOpen && "translate-x-0",
        )}
      >
        <div className="flex h-16 items-center border-b border-neutral-200 px-4 dark:border-neutral-800">
          <Link href="/dashboard" className="font-display text-xl font-bold">
            VoiceAgent<span className="text-neutral-500">AI</span>
          </Link>
          {isMobile && (
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsOpen(false)}>
              <ChevronDown className="h-5 w-5 rotate-90" />
            </Button>
          )}
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === route.href
                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-neutral-200 p-4 dark:border-neutral-800">
          <Button className="w-full justify-start gap-2">
            <Plus className="h-4 w-4" />
            Add Agent
          </Button>
        </div>
      </aside>
    </>
  )
}

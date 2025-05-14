import Link from "next/link"
import { Bot, Plus, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VoiceAgentsPage() {
  // Sample voice agents data
  const agents = [
    {
      id: "1",
      name: "Sales Agent - Skyline Towers",
      status: "active",
      created: "Apr 12, 2023",
      type: "Sales",
      leads: 124,
    },
    {
      id: "2",
      name: "Info Agent - Parkview Residences",
      status: "active",
      created: "May 3, 2023",
      type: "Information",
      leads: 98,
    },
    {
      id: "3",
      name: "Sales Agent - Riverside Apartments",
      status: "active",
      created: "Jun 18, 2023",
      type: "Sales",
      leads: 76,
    },
    {
      id: "4",
      name: "Info Agent - Downtown Lofts",
      status: "inactive",
      created: "Jul 24, 2023",
      type: "Information",
      leads: 44,
    },
    {
      id: "5",
      name: "Sales Agent - Harbor View",
      status: "active",
      created: "Aug 9, 2023",
      type: "Sales",
      leads: 67,
    },
    {
      id: "6",
      name: "Support Agent - General",
      status: "active",
      created: "Sep 15, 2023",
      type: "Support",
      leads: 52,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Voice Agents</h1>
          <p className="text-muted-foreground">Manage and configure your AI voice agents.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create New Agent
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant={agent.status === "active" ? "default" : "secondary"} className="px-2 py-0.5 text-xs">
                  {agent.status === "active" ? "Active" : "Inactive"}
                </Badge>
                <span className="text-xs text-muted-foreground">Created {agent.created}</span>
              </div>
              <CardTitle className="mt-2 text-xl">{agent.name}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <span className="text-xs font-medium uppercase">{agent.type}</span>
                <span className="text-xs">•</span>
                <span className="text-xs">{agent.leads} leads captured</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-24 items-center justify-center rounded-md bg-neutral-50 dark:bg-neutral-800/50">
                <Bot className="h-10 w-10 text-neutral-400" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t bg-neutral-50/50 px-6 py-3 dark:bg-neutral-800/20">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/dashboard/voice-agents/${agent.id}`}>View Details</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/dashboard/voice-agents/${agent.id}/configure`}>
                  <Settings className="mr-2 h-4 w-4" />
                  Configure
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

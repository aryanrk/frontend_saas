"use client"

import { useState } from "react"
import { Calendar, Download, Filter, MoreHorizontal, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [projectFilter, setProjectFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  // Sample leads data
  const leads = [
    {
      id: "1",
      name: "John Smith",
      phone: "+1 555-123-4567",
      project: "Skyline Towers",
      date: "May 12, 2023",
      whatsappSent: true,
      status: "qualified",
    },
    {
      id: "2",
      name: "Emily Johnson",
      phone: "+1 555-234-5678",
      project: "Parkview Residences",
      date: "May 15, 2023",
      whatsappSent: true,
      status: "qualified",
    },
    {
      id: "3",
      name: "Michael Brown",
      phone: "+1 555-345-6789",
      project: "Riverside Apartments",
      date: "May 18, 2023",
      whatsappSent: true,
      status: "unqualified",
    },
    {
      id: "4",
      name: "Sarah Davis",
      phone: "+1 555-456-7890",
      project: "Skyline Towers",
      date: "May 20, 2023",
      whatsappSent: false,
      status: "pending",
    },
    {
      id: "5",
      name: "David Wilson",
      phone: "+1 555-567-8901",
      project: "Harbor View",
      date: "May 22, 2023",
      whatsappSent: true,
      status: "qualified",
    },
    {
      id: "6",
      name: "Jennifer Lee",
      phone: "+1 555-678-9012",
      project: "Downtown Lofts",
      date: "May 25, 2023",
      whatsappSent: false,
      status: "pending",
    },
    {
      id: "7",
      name: "Robert Taylor",
      phone: "+1 555-789-0123",
      project: "Parkview Residences",
      date: "May 28, 2023",
      whatsappSent: true,
      status: "qualified",
    },
    {
      id: "8",
      name: "Lisa Anderson",
      phone: "+1 555-890-1234",
      project: "Mountain Retreat",
      date: "May 30, 2023",
      whatsappSent: true,
      status: "unqualified",
    },
  ]

  // Filter leads based on search query, project filter, and date filter
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || lead.phone.includes(searchQuery)
    const matchesProject = projectFilter === "all" || lead.project === projectFilter
    // For simplicity, we're just checking if the date contains the month name
    const matchesDate = dateFilter === "all" || lead.date.includes(dateFilter)

    return matchesSearch && matchesProject && matchesDate
  })

  // Get unique projects for filter
  const projects = Array.from(new Set(leads.map((lead) => lead.project)))

  // Calculate stats
  const totalLeads = leads.length
  const qualifiedLeads = leads.filter((lead) => lead.status === "qualified").length
  const whatsappSent = leads.filter((lead) => lead.whatsappSent).length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
        <p className="text-muted-foreground">Manage and track leads captured by your AI voice agents.</p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{qualifiedLeads}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((qualifiedLeads / totalLeads) * 100)}% qualification rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">WhatsApp Sent</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{whatsappSent}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((whatsappSent / totalLeads) * 100)}% of total leads
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name or phone..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <div className="w-[180px]">
            <Select value={projectFilter} onValueChange={setProjectFilter}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <SelectValue placeholder="Filter by project" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                {projects.map((project) => (
                  <SelectItem key={project} value={project}>
                    {project}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-[180px]">
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <SelectValue placeholder="Filter by date" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="May">May 2023</SelectItem>
                <SelectItem value="Apr">April 2023</SelectItem>
                <SelectItem value="Mar">March 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Leads table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Project Interested</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>WhatsApp</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.project}</TableCell>
                <TableCell>{lead.date}</TableCell>
                <TableCell>
                  <Badge variant={lead.whatsappSent ? "default" : "outline"} className="px-2 py-0.5 text-xs">
                    {lead.whatsappSent ? "Sent" : "Not Sent"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      lead.status === "qualified"
                        ? "default"
                        : lead.status === "unqualified"
                          ? "destructive"
                          : "secondary"
                    }
                    className="px-2 py-0.5 text-xs"
                  >
                    {lead.status === "qualified"
                      ? "Qualified"
                      : lead.status === "unqualified"
                        ? "Unqualified"
                        : "Pending"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Send WhatsApp</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Mark as Qualified</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Unqualified</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete Lead</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, FileUp, MoreHorizontal, Plus, Search } from "lucide-react"
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

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample projects data
  const projects = [
    {
      id: "1",
      name: "Skyline Towers",
      location: "Downtown",
      documents: 8,
      lastUpdated: "May 12, 2023",
      status: "active",
    },
    {
      id: "2",
      name: "Parkview Residences",
      location: "Westside",
      documents: 6,
      lastUpdated: "Jun 3, 2023",
      status: "active",
    },
    {
      id: "3",
      name: "Riverside Apartments",
      location: "Eastside",
      documents: 5,
      lastUpdated: "Jul 18, 2023",
      status: "active",
    },
    {
      id: "4",
      name: "Downtown Lofts",
      location: "Central",
      documents: 4,
      lastUpdated: "Aug 24, 2023",
      status: "inactive",
    },
    {
      id: "5",
      name: "Harbor View",
      location: "Waterfront",
      documents: 7,
      lastUpdated: "Sep 9, 2023",
      status: "active",
    },
    {
      id: "6",
      name: "Mountain Retreat",
      location: "North Hills",
      documents: 3,
      lastUpdated: "Oct 15, 2023",
      status: "active",
    },
  ]

  const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your real estate development projects.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Project
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800">
                      <Building2 className="h-4 w-4 text-neutral-500" />
                    </div>
                    <span>{project.name}</span>
                  </div>
                </TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <FileUp className="h-4 w-4 text-muted-foreground" />
                    <span>{project.documents}</span>
                  </div>
                </TableCell>
                <TableCell>{project.lastUpdated}</TableCell>
                <TableCell>
                  <Badge
                    variant={project.status === "active" ? "default" : "secondary"}
                    className="px-2 py-0.5 text-xs"
                  >
                    {project.status === "active" ? "Active" : "Inactive"}
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
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/projects/${project.id}/documents`}>Manage Documents</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete Project</DropdownMenuItem>
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

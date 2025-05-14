"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, Download, FileUp, Trash2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProjectDocumentsPage() {
  const params = useParams()
  const projectId = params.id

  // Sample project data
  const project = {
    id: projectId,
    name: "Skyline Towers",
    location: "Downtown",
  }

  // Sample document categories
  const documentCategories = [
    {
      id: "brochures",
      name: "Brochures",
      documents: [
        { id: "1", name: "Skyline-Brochure-2023.pdf", size: "4.2 MB", date: "May 12, 2023" },
        { id: "2", name: "Skyline-Features.pdf", size: "2.8 MB", date: "May 14, 2023" },
      ],
    },
    {
      id: "floor-plans",
      name: "Floor Plans",
      documents: [
        { id: "3", name: "Floor-Plan-1BR.pdf", size: "3.1 MB", date: "Jun 5, 2023" },
        { id: "4", name: "Floor-Plan-2BR.pdf", size: "3.4 MB", date: "Jun 5, 2023" },
        { id: "5", name: "Floor-Plan-3BR.pdf", size: "3.6 MB", date: "Jun 5, 2023" },
      ],
    },
    {
      id: "pricing",
      name: "Pricing Sheets",
      documents: [
        { id: "6", name: "Pricing-Sheet-2023.pdf", size: "1.2 MB", date: "Jul 10, 2023" },
        { id: "7", name: "Payment-Plans.pdf", size: "0.9 MB", date: "Jul 12, 2023" },
      ],
    },
  ]

  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [activeTab, setActiveTab] = useState("brochures")

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name} Documents</h1>
          <p className="text-muted-foreground">
            Manage documents for {project.name} in {project.location}
          </p>
        </div>
      </div>

      <Tabs defaultValue="brochures" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            {documentCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Upload to{" "}
            {activeTab
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Button>
        </div>

        {documentCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>
                  Manage {category.name.toLowerCase()} for {project.name}. These documents will be sent to leads via
                  WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Document list */}
                <div className="rounded-md border">
                  {category.documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between border-b p-4 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-neutral-100 dark:bg-neutral-800">
                          <FileUp className="h-5 w-5 text-neutral-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{doc.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span>Uploaded on {doc.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upload area */}
                <div
                  className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center ${
                    isDragging ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <FileUp className="mb-4 h-10 w-10 text-muted-foreground" />
                  <h3 className="mb-2 text-lg font-medium">Drag and drop files here</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Support for PDF, DOCX, TXT, and other document formats
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => document.getElementById(`file-upload-${category.id}`)?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Browse Files
                    </Button>
                    <input
                      id={`file-upload-${category.id}`}
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.doc,.txt"
                    />
                  </div>
                </div>

                {/* Newly uploaded files */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Files to Upload</h3>
                      <Badge variant="outline" className="px-2 py-0.5 text-xs">
                        {files.length} file{files.length !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                    <div className="rounded-md border">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between border-b p-3 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-neutral-100 dark:bg-neutral-800">
                              <FileUp className="h-5 w-5 text-neutral-500" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => removeFile(index)}>
                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button variant="outline" onClick={() => setFiles([])}>
                        Cancel
                      </Button>
                      <Button>Upload Files</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Bot, FileUp, Save, Trash2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function AgentConfigurationPage() {
  const params = useParams()
  const agentId = params.id

  // Sample agent data
  const agent = {
    id: agentId,
    name: "Sales Agent - Skyline Towers",
    welcomeMessage: "Hello! I'm your virtual sales assistant for Skyline Towers. How can I help you today?",
    language: "en-US",
    voice: "female",
    tone: "professional",
    knowledgeBase: ["skyline-brochure.pdf", "pricing-sheet.pdf"],
  }

  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)

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
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configure Agent</h1>
        <p className="text-muted-foreground">
          Configure your AI voice agent for <span className="font-medium">{agent.name}</span>
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="voice">Voice Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure the basic settings for your voice agent.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="agent-name">Agent Name</Label>
                <Input id="agent-name" defaultValue={agent.name} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="welcome-message">Welcome Message</Label>
                <Textarea
                  id="welcome-message"
                  defaultValue={agent.welcomeMessage}
                  placeholder="Enter the message your agent will use to greet visitors"
                  className="min-h-32"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agent-type">Agent Type</Label>
                <Select defaultValue="sales">
                  <SelectTrigger id="agent-type">
                    <SelectValue placeholder="Select agent type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Agent Types</SelectLabel>
                      <SelectItem value="sales">Sales Agent</SelectItem>
                      <SelectItem value="info">Information Agent</SelectItem>
                      <SelectItem value="support">Support Agent</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="agent-active" defaultChecked />
                <Label htmlFor="agent-active">Agent Active</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>
                Upload documents to train your AI agent with project-specific information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                  <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                    <Upload className="mr-2 h-4 w-4" />
                    Browse Files
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.doc,.txt"
                  />
                </div>
              </div>

              {/* Existing knowledge base files */}
              {agent.knowledgeBase.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Existing Knowledge Base Files</h3>
                  <div className="rounded-md border">
                    {agent.knowledgeBase.map((file, index) => (
                      <div key={index} className="flex items-center justify-between border-b p-3 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-neutral-100 dark:bg-neutral-800">
                            <FileUp className="h-5 w-5 text-neutral-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{file}</p>
                            <p className="text-xs text-muted-foreground">Added on Apr 12, 2023</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newly uploaded files */}
              {files.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Newly Uploaded Files</h3>
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
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Voice Settings</CardTitle>
              <CardDescription>Configure how your AI agent sounds when speaking to leads.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue={agent.language}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="en-GB">English (UK)</SelectItem>
                      <SelectItem value="es-ES">Spanish</SelectItem>
                      <SelectItem value="fr-FR">French</SelectItem>
                      <SelectItem value="de-DE">German</SelectItem>
                      <SelectItem value="zh-CN">Chinese (Simplified)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="voice-gender">Voice Gender</Label>
                <Select defaultValue={agent.voice}>
                  <SelectTrigger id="voice-gender">
                    <SelectValue placeholder="Select voice gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Voice Gender</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="voice-tone">Voice Tone</Label>
                <Select defaultValue={agent.tone}>
                  <SelectTrigger id="voice-tone">
                    <SelectValue placeholder="Select voice tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Voice Tone</SelectLabel>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="calm">Calm</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="speaking-rate">Speaking Rate</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Slow</span>
                  <Input
                    id="speaking-rate"
                    type="range"
                    className="w-full"
                    defaultValue="1"
                    min="0.5"
                    max="2"
                    step="0.1"
                  />
                  <span className="text-sm text-muted-foreground">Fast</span>
                </div>
              </div>

              <div className="pt-4">
                <Button className="gap-2">
                  <Bot className="h-4 w-4" />
                  Test Voice
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save Configuration
        </Button>
      </div>
    </div>
  )
}

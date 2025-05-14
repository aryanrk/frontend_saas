"use client"

import type React from "react"

import { useState } from "react"
import { Bell, CreditCard, Key, Save, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState("Acme Real Estate")
  const [email, setEmail] = useState("admin@acmerealestate.com")
  const [phone, setPhone] = useState("+1 555-123-4567")
  const [address, setAddress] = useState("123 Main St, Suite 400, San Francisco, CA 94105")
  const [website, setWebsite] = useState("https://acmerealestate.com")
  const [project, setProject] = useState("Acme Project")
  const [agent_name, setAgentName] = useState("John Doe")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList>
          <TabsTrigger value="company" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Company
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="whatsapp" className="flex items-center gap-2">
            <Key className="h-4 w-4" />
            WhatsApp Integration
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and contact information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Logo</CardTitle>
              <CardDescription>Upload your company logo to be displayed on your voice agent interface.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="h-24 w-24 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <User className="h-12 w-12 text-neutral-400" />
                </div>
                <div className="space-y-2">
                  <Button variant="outline">Upload Logo</Button>
                  <p className="text-xs text-muted-foreground">Recommended size: 512x512px. Max file size: 2MB.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="new-lead">New Lead Notifications</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive an email when a new lead is captured by your voice agent.
                      </p>
                    </div>
                    <Switch id="new-lead" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="daily-summary">Daily Summary</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive a daily summary of all leads and activities.
                      </p>
                    </div>
                    <Switch id="daily-summary" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-report">Weekly Report</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive a weekly performance report of your voice agents.
                      </p>
                    </div>
                    <Switch id="weekly-report" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">SMS Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-lead">New Lead SMS Alerts</Label>
                      <p className="text-xs text-muted-foreground">
                        Receive an SMS when a new lead is captured by your voice agent.
                      </p>
                    </div>
                    <Switch id="sms-lead" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-number">SMS Notification Number</Label>
                      <p className="text-xs text-muted-foreground">
                        The phone number where you want to receive SMS notifications.
                      </p>
                    </div>
                    <Input id="sms-number" className="max-w-xs" placeholder="+1 555-123-4567" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Integration</CardTitle>
              <CardDescription>
                Connect your WhatsApp Business account to automatically send brochures and information to leads.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md bg-neutral-50 p-4 dark:bg-neutral-800">
                <h3 className="mb-2 text-sm font-medium">Connection Status</h3>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <p className="text-sm">Not Connected</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Your WhatsApp Business account is not connected. Connect your account to enable automatic document
                  sending.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Connect WhatsApp Business</h3>
                <p className="text-sm text-muted-foreground">
                  To connect your WhatsApp Business account, you need to authorize our application through the WhatsApp
                  Business API.
                </p>
                <Button>Connect WhatsApp Account</Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">WhatsApp Message Template</h3>
                <p className="text-sm text-muted-foreground">
                  Customize the message that will be sent to leads along with your documents.
                </p>
                <Textarea
                  rows={4}
                  defaultValue="Hello {{name}}, thank you for your interest in {{project}}! As promised, here are the documents you requested. If you have any questions, feel free to reply to this message or call us at {{phone}}."
                />
                <div className="rounded-md bg-neutral-50 p-3 dark:bg-neutral-800">
                  <p className="text-xs text-muted-foreground">
                    Available variables: {{ name }}, {{ project }}, {{ phone }}, {{ website }}, {{ agent_name }}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="gap-2" disabled>
                <Save className="h-4 w-4" />
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription and billing information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md bg-neutral-50 p-4 dark:bg-neutral-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Current Plan: Professional</h3>
                    <p className="text-xs text-muted-foreground">$699/month, billed monthly</p>
                  </div>
                  <Badge className="px-2 py-0.5 text-xs">Active</Badge>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <p className="text-sm">3 AI Voice Agents</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <p className="text-sm">Up to 500 leads/month</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <p className="text-sm">15 projects</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <p className="text-sm">WhatsApp integration</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline">Change Plan</Button>
                <Button variant="outline">View Billing History</Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Payment Method</h3>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-16 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800">
                    <CreditCard className="h-6 w-6 text-neutral-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Visa ending in 4242</p>
                    <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Update
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground",
        className,
      )}
      {...props}
    />
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

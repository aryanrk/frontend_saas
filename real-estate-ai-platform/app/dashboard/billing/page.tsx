import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, FileText, Receipt } from "lucide-react"

export default function BillingPage() {
  // Sample billing data
  const invoices = [
    {
      id: "INV-001",
      date: "May 1, 2023",
      amount: "$699.00",
      status: "Paid",
    },
    {
      id: "INV-002",
      date: "Jun 1, 2023",
      amount: "$699.00",
      status: "Paid",
    },
    {
      id: "INV-003",
      date: "Jul 1, 2023",
      amount: "$699.00",
      status: "Paid",
    },
    {
      id: "INV-004",
      date: "Aug 1, 2023",
      amount: "$699.00",
      status: "Paid",
    },
    {
      id: "INV-005",
      date: "Sep 1, 2023",
      amount: "$699.00",
      status: "Paid",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information.</p>
      </div>

      <Tabs defaultValue="subscription" className="space-y-6">
        <TabsList>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="billing-history">Billing History</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are currently on the Professional plan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Professional Plan</h3>
                    <p className="text-sm text-muted-foreground">$699 per month</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Active</div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Plan Includes:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>3 AI Voice Agents</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>Up to 500 leads/month</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>15 projects</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>Advanced analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Also Includes:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>WhatsApp integration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>Custom voice configuration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>API access</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t pt-6">
                  <p className="text-sm">
                    Your subscription renews on <strong>October 1, 2023</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="outline">Change Plan</Button>
                <Button variant="outline" className="text-destructive hover:bg-destructive/10">
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>Your current usage for this billing period.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Leads</p>
                      <p className="text-xs text-muted-foreground">342 / 500 leads</p>
                    </div>
                    <p className="text-sm font-medium">68%</p>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "68%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Voice Agents</p>
                      <p className="text-xs text-muted-foreground">2 / 3 agents</p>
                    </div>
                    <p className="text-sm font-medium">67%</p>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "67%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Projects</p>
                      <p className="text-xs text-muted-foreground">8 / 15 projects</p>
                    </div>
                    <p className="text-sm font-medium">53%</p>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "53%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800">
                      <CreditCard className="h-6 w-6 text-neutral-500" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Default</div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="gap-2">
                <CreditCard className="h-4 w-4" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your billing information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="space-y-1">
                  <p className="font-medium">Acme Real Estate</p>
                  <p className="text-sm">123 Main St, Suite 400</p>
                  <p className="text-sm">San Francisco, CA 94105</p>
                  <p className="text-sm">United States</p>
                </div>
              </div>

              <Button variant="outline">Edit Billing Information</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing-history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your invoices.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b px-4 py-3 font-medium">
                  <div>Invoice</div>
                  <div>Date</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="grid grid-cols-4 items-center border-b px-4 py-3 last:border-0">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{invoice.id}</span>
                    </div>
                    <div>{invoice.date}</div>
                    <div>{invoice.amount}</div>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {invoice.status}
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="gap-2">
                <Receipt className="h-4 w-4" />
                Download All Invoices
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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

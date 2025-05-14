import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MarketingNavbar } from "@/components/marketing-navbar"
import { MarketingFooter } from "@/components/marketing-footer"

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNavbar />
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create new password</h1>
            <p className="text-muted-foreground">Enter a new password for your account</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </div>
        </div>
      </div>
      <MarketingFooter />
    </div>
  )
}

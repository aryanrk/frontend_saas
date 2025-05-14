import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, MessageSquare, FileText, Star, Check } from "lucide-react"
import { MarketingNavbar } from "@/components/marketing-navbar"
import { MarketingFooter } from "@/components/marketing-footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNavbar />

      {/* Hero Section */}
      <section className="gradient-bg px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Your AI Sales Agent for Real Estate
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-3xl">
              Let your website talk, qualify, and convert leads—24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Try for Free
              </Button>
            </div>

            <div className="mt-20 w-full max-w-5xl bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=1000"
                alt="AI Voice Agent Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful features to supercharge your sales
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
              <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mb-6">
                <Bot className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
              </div>
              <h3 className="text-xl font-bold mb-3">Voice AI that talks like a human</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Natural conversations that qualify leads and answer questions about your properties in real-time.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
              <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto-sends WhatsApp brochures</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Automatically send project-specific brochures and floor plans to interested leads via WhatsApp.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
              <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learns from your documents</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Upload your knowledge base and project documents to train your AI agent with your specific information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Trusted by leading real estate developers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-300">
                "Our conversion rates increased by 40% after implementing VoiceAgent AI. The leads we get are much more
                qualified and ready to purchase."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4"></div>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Marketing Director, Skyline Properties
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-300">
                "The AI voice agent handles routine inquiries 24/7, freeing up our sales team to focus on closing deals.
                It's been a game-changer for us."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4"></div>
                <div>
                  <p className="font-bold">Michael Chen</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">CEO, Urban Development Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-center text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto">
            Choose the plan that works best for your business
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">Perfect for small developers</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-neutral-500 dark:text-neutral-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {["1 AI Voice Agent", "Up to 100 leads/month", "5 projects", "Basic analytics", "Email support"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-neutral-900 dark:text-neutral-100 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>

              <Button className="w-full rounded-full">Get Started</Button>
            </div>

            <div className="bg-neutral-900 dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-800 dark:border-neutral-700 relative">
              <div className="absolute top-0 right-0 bg-neutral-800 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Professional</h3>
              <p className="text-neutral-400 mb-6">For growing real estate businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$699</span>
                <span className="text-neutral-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8 text-white">
                {[
                  "3 AI Voice Agents",
                  "Up to 500 leads/month",
                  "15 projects",
                  "Advanced analytics",
                  "WhatsApp integration",
                  "Priority support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full rounded-full bg-white text-black hover:bg-neutral-200">Get Started</Button>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">For large developers & agencies</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited AI Voice Agents",
                  "Unlimited leads",
                  "Unlimited projects",
                  "Custom integrations",
                  "Dedicated account manager",
                  "24/7 premium support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-neutral-900 dark:text-neutral-100 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full rounded-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your real estate sales?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of real estate developers who are using VoiceAgent AI to qualify leads and boost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-neutral-200">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-white text-white hover:bg-neutral-800"
            >
              Try for Free
            </Button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}

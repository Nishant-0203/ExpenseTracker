import Link from "next/link"
import { ArrowRight, BarChart3, DollarSign, PieChart, Plus, Wallet, Star } from "lucide-react"

import { Button } from "@/src/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold hidden sm:inline-block">ExpenseTracker</span>
            <span className="ml-2 text-xl font-bold sm:hidden">ET</span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">
              Testimonials
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#faq">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Take Control of Your Finances
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Track expenses, visualize spending patterns, and achieve your financial goals with our intuitive
                    expense tracking app.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Dashboard Preview"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="500"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=500&auto=format&fit=crop"
                  width="800"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-8 md:py-16 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your expenses effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Plus className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Expense Management</h3>
                  <p className="text-muted-foreground">
                    Add, edit, and delete expenses with ease. Categorize and organize your spending.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <PieChart className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Visual Analytics</h3>
                  <p className="text-muted-foreground">
                    Visualize your spending patterns with interactive charts and graphs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Financial Insights</h3>
                  <p className="text-muted-foreground">
                    Get monthly and yearly summaries to understand your financial habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Why Choose ExpenseTracker?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our expense tracking app is designed to be simple, intuitive, and powerful. We help you gain control
                    over your finances without the complexity.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Secure user authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Responsive design for all devices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Dark and light mode support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Advanced filtering and sorting</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg">
                      Sign Up Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="App Features"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="500"
                  src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=800&h=500&auto=format&fit=crop"
                  width="800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* New Testimonials Section */}
        <section id="testimonials" className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied users who have transformed their financial lives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                { 
                  name: "Sarah Johnson",
                  role: "Small Business Owner",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "ExpenseTracker has completely changed the way I manage my finances. Highly recommend!",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "Freelance Developer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "The visual analytics help me understand my spending patterns better than ever before.",
                  rating: 5
                },
                {
                  name: "Emily Rodriguez",
                  role: "Financial Analyst",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
                  text: "Simple, intuitive, and exactly what I needed to take control of my expenses.",
                  rating: 4
                }
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center space-y-4 p-6 border rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="space-y-1">
                      <h4 className="font-medium">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(user.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">&quot;{user.text}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New FAQ Section */}
        <section id="faq" className="w-full py-8 md:py-16 lg:py-10 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We've got answers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {[
                { 
                  question: "How secure is ExpenseTracker?", 
                  answer: "We use industry-standard encryption to protect your data.",
                  icon: "🔒"
                },
                { 
                  question: "Can I use this app for free?", 
                  answer: "Yes, we offer a free plan with essential features.",
                  icon: "💰"
                },
                { 
                  question: "Is my data backed up?", 
                  answer: "Yes, your data is securely backed up in the cloud.",
                  icon: "☁️"
                },
                { 
                  question: "Does it support multiple currencies?", 
                  answer: "Yes, we support a wide range of currencies.",
                  icon: "🌍"
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 p-6 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                  </div>
                  <p className="text-muted-foreground pl-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Subscribe to our newsletter for financial tips, updates, and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button>Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-muted-foreground">© 2025 ExpenseTracker. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}


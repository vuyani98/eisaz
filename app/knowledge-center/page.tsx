import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BarChart3, Newspaper, BookOpen, Download, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Knowledge Center - EISAZ",
  description: "Access industry reports, research publications, news, and sector insights.",
}

export default function KnowledgeCenterPage() {
  const categories = [
    {
      icon: FileText,
      title: "Reports & Publications",
      count: "45+ documents",
      description: "Sector strategy documents, annual reports, and policy papers.",
      href: "#reports",
    },
    {
      icon: Newspaper,
      title: "News & Insights",
      count: "120+ articles",
      description: "Latest industry news, commentary, and market analysis.",
      href: "#news",
    },
    {
      icon: BarChart3,
      title: "Statistics & Data",
      count: "30+ datasets",
      description: "Industry statistics, export data, and sector performance metrics.",
      href: "#data",
    },
    {
      icon: BookOpen,
      title: "Newsletters",
      count: "60+ editions",
      description: "Monthly newsletters and special industry bulletins.",
      href: "#newsletters",
    },
  ]

  const featuredReports = [
    {
      title: "EISAZ Sector Strategy 2022-2026",
      description:
        "Comprehensive strategic roadmap aligned with Zimbabwe's NDS1, outlining key priorities for export growth, retooling, and local content development.",
      date: "January 2022",
      pages: "86 pages",
      downloads: "2,340",
      category: "Strategy Document",
    },
    {
      title: "Annual Industry Report 2023",
      description:
        "Analysis of sector performance including production statistics, export values, employment trends, and investment highlights.",
      date: "March 2024",
      pages: "124 pages",
      downloads: "1,890",
      category: "Annual Report",
    },
    {
      title: "Export Market Analysis Q4 2024",
      description:
        "Detailed examination of export markets, trade opportunities, and competitive positioning for Zimbabwean steel products.",
      date: "October 2024",
      pages: "42 pages",
      downloads: "1,250",
      category: "Market Research",
    },
  ]

  const recentNews = [
    {
      title: "EISAZ Signs MOU with Ministry of Industry for Sector Modernization",
      excerpt:
        "Strategic partnership to accelerate retooling and technology adoption across member companies through coordinated funding mechanisms.",
      date: "November 18, 2024",
      category: "Policy & Advocacy",
      image: "1",
    },
    {
      title: "Record Export Performance in Q3 2024",
      excerpt:
        "Steel exports reach $145M, marking 23% year-over-year growth driven by increased regional demand and improved product quality.",
      date: "November 10, 2024",
      category: "Industry News",
      image: "2",
    },
    {
      title: "Skills Development Program Launches for 500 Technicians",
      excerpt:
        "EISAZ partners with technical colleges to deliver specialized training in modern steel production and quality control methodologies.",
      date: "November 3, 2024",
      category: "Training & Development",
      image: "3",
    },
    {
      title: "New CBA Ratified for 2024-2025",
      excerpt:
        "National Employment Council approves updated collective bargaining agreement ensuring competitive wages and improved working conditions.",
      date: "October 28, 2024",
      category: "Industrial Relations",
      image: "4",
    },
  ]

  const statistics = [
    { label: "Total Production Volume", value: "2.1M tons", change: "+12%" },
    { label: "Export Value 2024", value: "$487M", change: "+18%" },
    { label: "Direct Employment", value: "25,400", change: "+3%" },
    { label: "Capital Investment", value: "$120M", change: "+28%" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black/85 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/knowledgecenter.png')] bg-cover bg-center opacity-10" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">Knowledge Center</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Comprehensive industry intelligence, research, and insights to inform your business decisions and
                strategic planning.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <a key={category.title} href={category.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Icon className="h-10 w-10 text-primary mb-3" />
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription className="mb-3">{category.description}</CardDescription>
                        <div className="text-sm font-medium text-primary">{category.count}</div>
                      </CardHeader>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Sector Performance 2024</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Key indicators showing strong growth across the engineering and steel sector.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {statistics.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                      <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {stat.change} YoY
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Reports */}
        <section id="reports" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                  Featured Reports & Publications
                </h2>
                <p className="text-muted-foreground">
                  Essential reading for industry stakeholders and decision-makers.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {featuredReports.map((report) => (
                <Card key={report.title} className="flex flex-col">
                  <CardHeader>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3 w-fit">
                      {report.category}
                    </div>
                    <CardTitle className="text-xl mb-2">{report.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {report.date}
                      </span>
                      <span>{report.pages}</span>
                      <span>{report.downloads} downloads</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All Reports
              </Button>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section id="news" className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Latest News & Insights</h2>
                <p className="text-muted-foreground">Stay informed about sector developments and policy updates.</p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex bg-transparent">
                <Link href="/knowledge-center/news">View All</Link>
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {recentNews.map((article) => (
                <Card key={article.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <img
                      src={`/generic-news-icon.png?key=news${article.image}&height=300&width=600&query=zimbabwe+industry+steel`}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="#"
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                    >
                      Read Full Article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link href="/knowledge-center/news">View All News</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section id="newsletters" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="py-12 px-8">
                  <div className="text-center mb-8">
                    <BookOpen className="h-12 w-12 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">Subscribe to Our Newsletter</h2>
                    <p className="text-lg text-primary-foreground/90 text-pretty">
                      Receive monthly industry updates, policy alerts, and exclusive member insights directly to your
                      inbox.
                    </p>
                  </div>
                  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
                      required
                    />
                    <Button type="submit" variant="secondary">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-center text-sm text-primary-foreground/70 mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Dashboard Preview */}
        <section id="data" className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Industry Data & Statistics</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Access comprehensive sector data including production volumes, trade statistics, and employment figures.
              </p>
            </div>

            <Card>
              <CardContent className="py-16 text-center">
                <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Data Dashboard</h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Members have access to our interactive dashboard with real-time sector statistics, trend analysis, and
                  customizable reports.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/login">Login to Access Dashboard</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/membership">Become a Member</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

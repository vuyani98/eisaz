import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LogoCarousel } from "@/components/logo-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, TrendingUp, FileText, Calendar, Factory, Award, Target } from "lucide-react"

export default function HomePage() {
  const stats = [
    { label: "Member Companies", value: "150+", icon: Factory },
    { label: "Jobs in Sector", value: "25,000+", icon: Users },
    { label: "Annual Export Value", value: "$500M+", icon: TrendingUp },
    { label: "Years of Service", value: "100+", icon: Award },
  ]

  const members = [
    "Zimbabwe Iron & Steel Company",
    "Harare Engineering Works",
    "Bulawayo Steel Mills",
    "National Railways",
    "Engineering Solutions Ltd",
    "Industrial Metals Zimbabwe",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black/90 text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl mb-6">
                Driving Zimbabwe's Engineering & Steel Sector Forward
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty mb-8">
                Strategic employer association partnering with government to advance industrial growth, champion export
                excellence, and strengthen Zimbabwe's engineering capabilities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="hover-glow">
                  <Link href="/membership">
                    Become a Member <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  asChild
                >
                  <Link href="/knowledge-center">Download Our Strategy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <LogoCarousel />

        {/* Stats Section */}
        <section className="py-16 bg-background">
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={stat.label}
                    className="text-center hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-primary transition-transform duration-300 hover:scale-110" />
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Strategic Priorities */}
        <section className="py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
                Our Strategic Priorities 2022-2026
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Aligned with Zimbabwe's National Development Strategy (NDS1) to drive sector transformation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover-lift">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-3 transition-transform duration-300 hover:scale-110" />
                  <CardTitle>Export Growth</CardTitle>
                  <CardDescription>
                    Expand market access and boost export competitiveness for Zimbabwean steel products.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Factory className="h-10 w-10 text-secondary mb-3 transition-transform duration-300 hover:scale-110" />
                  <CardTitle>Industrial Retooling</CardTitle>
                  <CardDescription>
                    Modernize equipment and technology to enhance productivity and product quality.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Target className="h-10 w-10 text-accent mb-3 transition-transform duration-300 hover:scale-110" />
                  <CardTitle>Local Content Development</CardTitle>
                  <CardDescription>
                    Increase local value addition and strengthen domestic supply chains.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-3 transition-transform duration-300 hover:scale-110" />
                  <CardTitle>Skills Development</CardTitle>
                  <CardDescription>
                    Build workforce capacity through training programs and industry partnerships.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <FileText className="h-10 w-10 text-secondary mb-3 transition-transform duration-300 hover:scale-110" />
                  <CardTitle>Policy Advocacy</CardTitle>
                  <CardDescription>
                    Represent member interests in government policy discussions and regulatory reform.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Award className="h-10 w-10 text-accent mb-3 transition-transform duration-300 hover:scale-110" />
                  <CardTitle>Funding Facility</CardTitle>
                  <CardDescription>
                    Facilitate access to capital for member companies' expansion and modernization.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Latest News & Insights</h2>
                <p className="text-muted-foreground">Stay informed about sector developments and EISAZ activities.</p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex hover-glow bg-transparent">
                <Link href="/knowledge-center">View All</Link>
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden hover-lift group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={`/zimbabwe-steel-industry-.jpg?height=200&width=400&query=zimbabwe+steel+industry+${i}`}
                      alt="News thumbnail"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-xs text-muted-foreground mb-2">November 20, 2024</div>
                    <CardTitle className="text-xl">EISAZ Sector Strategy Progress Report Q{i}</CardTitle>
                    <CardDescription>
                      Key milestones achieved in export growth, retooling initiatives, and member engagement programs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="#"
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center transition-all"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link href="/knowledge-center">View All News</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Upcoming Events</h2>
                <p className="text-muted-foreground">
                  Join us at industry conferences, workshops, and networking events.
                </p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex hover-glow bg-transparent">
                <Link href="/events">View Calendar</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-4 min-w-[80px] hover-glow">
                      <div className="text-2xl font-bold">15</div>
                      <div className="text-sm">DEC</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Annual Steel Industry Conference</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Join industry leaders to discuss sector challenges, opportunities, and the path forward.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>December 15, 2024 • Harare</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center justify-center bg-secondary text-secondary-foreground rounded-lg p-4 min-w-[80px] hover-glow">
                      <div className="text-2xl font-bold">22</div>
                      <div className="text-sm">JAN</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Labour Relations Workshop</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Training session on collective bargaining agreements and dispute resolution for HR
                        professionals.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>January 22, 2025 • Bulawayo</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Member Showcase */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Members</h2>
              <p className="text-lg text-muted-foreground">
                Representing leading companies across Zimbabwe's engineering and steel sector.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {members.map((member, index) => (
                <Card key={index} className="flex items-center justify-center p-6 bg-background hover-lift">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary/10">
                      <Factory className="h-8 w-8 text-muted-foreground transition-colors duration-300 hover:text-primary" />
                    </div>
                    <p className="text-xs font-medium text-foreground text-balance">{member}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild className="hover-glow bg-transparent">
                <Link href="/membership">View All Members</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground overflow-hidden hover-lift">
              <CardContent className="relative py-16 px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">
                    Join Zimbabwe's Premier Industrial Association
                  </h2>
                  <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
                    Gain access to exclusive resources, policy advocacy, networking opportunities, and member services
                    that drive business growth.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild className="hover-glow">
                      <Link href="/membership">
                        Become a Member <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                      asChild
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
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

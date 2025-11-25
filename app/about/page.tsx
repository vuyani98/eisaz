import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { History, Target, Award, Users, Handshake, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About EISAZ - Engineering, Iron & Steel Association of Zimbabwe",
  description:
    "Learn about EISAZ's history, mission, values, and our role as Zimbabwe's premier industrial association since the 1920s.",
}

export default function AboutPage() {
  const timeline = [
    { year: "1920s", event: "Foundation of the association representing Zimbabwe's emerging steel industry" },
    { year: "1960s", event: "Expansion of membership base and establishment of industrial relations framework" },
    { year: "1980s", event: "Post-independence restructuring and alignment with national development goals" },
    { year: "2000s", event: "Strengthened policy advocacy and sector representation" },
    { year: "2020s", event: "Launch of Sector Strategy 2022-2026 aligned with NDS1" },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to highest standards in industrial practice and member service delivery.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Partnership with government, unions, and stakeholders for sector growth.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Driving modernization, technology adoption, and continuous improvement.",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Transparent governance and ethical representation of member interests.",
    },
  ]

  const partners = [
    { name: "Ministry of Industry & Commerce", type: "Government Partner" },
    { name: "Zimbabwe Congress of Trade Unions", type: "Labour Partner" },
    { name: "Confederation of Zimbabwe Industries", type: "Industry Partner" },
    { name: "African Steel Association", type: "Regional Partner" },
    { name: "World Steel Association", type: "International Partner" },
    { name: "Development Bank of Zimbabwe", type: "Financial Partner" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?key=about1')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">About EISAZ</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                A century of championing Zimbabwe's engineering, iron, and steel sector through strategic partnership,
                policy advocacy, and member empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    To represent and advance the interests of Zimbabwe's engineering, iron, and steel sector through
                    strategic advocacy, member services, and partnership with government and stakeholders.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    A globally competitive, sustainable, and innovative engineering and steel sector that drives
                    Zimbabwe's industrial transformation and economic prosperity.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <History className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our History</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Over a century of leadership in Zimbabwe's industrial development.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                      <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-xl">{item.year}</CardTitle>
                            <CardDescription>{item.event}</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                      <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                      <div className="flex-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Guiding principles that shape our work and relationships.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title}>
                    <CardHeader>
                      <Icon className="h-10 w-10 text-primary mb-3" />
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Leadership & Governance</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Experienced leaders guiding EISAZ's strategic direction.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Dr. Tendai Moyo", role: "Executive Director", image: "1" },
                { name: "Eng. Sarah Ndlovu", role: "Board Chairperson", image: "2" },
                { name: "Mr. James Chikwanha", role: "Vice Chairperson", image: "3" },
                { name: "Mrs. Grace Sibanda", role: "Treasurer", image: "4" },
                { name: "Eng. Patrick Mutasa", role: "Board Member", image: "5" },
                { name: "Ms. Rudo Mapfumo", role: "Secretary General", image: "6" },
              ].map((member) => (
                <Card key={member.name}>
                  <CardContent className="pt-6">
                    <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                      <img
                        src={`/ceholder-svg-key-leader.jpg?key=leader${member.image}&height=300&width=300&query=professional+portrait`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Strategic Partners</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Collaborating with key stakeholders to drive sector transformation.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <Card key={partner.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Handshake className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground">{partner.type}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">Join Our Mission</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
                Be part of Zimbabwe's industrial transformation. Become a member today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/membership">Become a Member</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

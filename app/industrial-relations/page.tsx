import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Scale, Users, Download, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Industrial Relations - EISAZ",
  description: "Access labour relations support, CBAs, wage agreements, and dispute resolution services.",
}

export default function IndustrialRelationsPage() {
  const services = [
    {
      icon: FileText,
      title: "Collective Bargaining Agreements",
      description: "Access current and historical CBAs negotiated between EISAZ and labour unions.",
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      description: "Professional mediation and arbitration services for labour disputes.",
    },
    {
      icon: Users,
      title: "HR Support & Advisory",
      description: "Expert guidance on labour law compliance and HR best practices.",
    },
    {
      icon: Shield,
      title: "Policy Advocacy",
      description: "Representation in tripartite negotiations with government and unions.",
    },
  ]

  const documents = [
    { title: "National Employment Council Agreement 2024", category: "CBA", date: "Jan 2024", size: "2.4 MB" },
    { title: "Wage Structure Guidelines 2024", category: "Wage Agreement", date: "Jan 2024", size: "1.8 MB" },
    { title: "Dispute Resolution Procedures Manual", category: "Template", date: "Dec 2023", size: "3.2 MB" },
    { title: "Employment Contract Template", category: "Template", date: "Nov 2023", size: "450 KB" },
    { title: "Safety & Health Regulations Handbook", category: "Policy", date: "Oct 2023", size: "5.1 MB" },
    { title: "Grievance Handling Protocol", category: "Template", date: "Sep 2023", size: "890 KB" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black/85 text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/relations.png')] bg-cover bg-center opacity-10" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">Industrial Relations</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Comprehensive labour relations support to maintain harmonious employer-employee relationships and ensure
                regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Expert support for all your labour relations needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title}>
                    <CardHeader>
                      <Icon className="h-10 w-10 text-primary mb-3" />
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                  Professional Labour Relations Support
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  EISAZ represents member companies in all labour matters, ensuring fair and balanced outcomes that
                  support business sustainability and worker welfare.
                </p>
                <ul className="space-y-4">
                  {[
                    "Negotiation of industry-wide wage structures",
                    "Representation in National Employment Council",
                    "Legal compliance guidance and updates",
                    "Training workshops for HR professionals",
                    "Access to expert labour law consultants",
                    "24/7 emergency dispute resolution support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src="/professional-meeting-discussion.jpg"
                  alt="Industrial relations meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documents & Resources */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Documents & Resources</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Essential documents and templates for member companies.
              </p>
            </div>

            <div className="grid gap-4">
              {documents.map((doc) => (
                <Card key={doc.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1">{doc.title}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="inline-flex items-center px-2 py-0.5 rounded bg-muted text-xs font-medium">
                              {doc.category}
                            </span>
                            <span>{doc.date}</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Members have access to the full document library in the member portal
              </p>
              <Button variant="outline" asChild>
                <Link href="/login">Login to Member Portal</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">Need Labour Relations Support?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
                Contact our industrial relations team for expert guidance on your labour matters.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/membership">Become a Member</Link>
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

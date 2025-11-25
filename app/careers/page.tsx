import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, DollarSign, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Careers - EISAZ",
  description: "Explore career opportunities in Zimbabwe's engineering and steel sector.",
}

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Policy Analyst",
      department: "Policy & Advocacy",
      location: "Harare",
      type: "Full-time",
      salary: "Competitive",
      description:
        "Lead research and analysis on sector policy issues, prepare position papers, and represent EISAZ in stakeholder meetings.",
      posted: "5 days ago",
    },
    {
      title: "Industrial Relations Officer",
      department: "Member Services",
      location: "Harare",
      type: "Full-time",
      salary: "Competitive",
      description:
        "Provide labour relations support to member companies, assist with dispute resolution, and maintain CBA documentation.",
      posted: "1 week ago",
    },
    {
      title: "Research & Data Analyst",
      department: "Knowledge Center",
      location: "Harare",
      type: "Full-time",
      salary: "Competitive",
      description: "Collect and analyze sector statistics, prepare reports, and maintain the industry data dashboard.",
      posted: "2 weeks ago",
    },
  ]

  const internships = [
    {
      title: "Policy Research Intern",
      duration: "6 months",
      description: "Support policy research activities and learn about industrial advocacy.",
    },
    {
      title: "Communications Intern",
      duration: "6 months",
      description: "Assist with content creation, social media, and member communications.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">Careers at EISAZ</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Join our team and contribute to Zimbabwe's industrial transformation. We're looking for passionate
                professionals committed to sector excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Current Openings</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Explore opportunities to make an impact in Zimbabwe's engineering and steel sector.
              </p>
            </div>

            <div className="grid gap-6">
              {jobs.map((job) => (
                <Card key={job.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">{job.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{job.department}</p>
                            <p className="text-sm text-foreground leading-relaxed mb-4">{job.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {job.type}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {job.salary}
                              </span>
                              <span className="text-muted-foreground">Posted {job.posted}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full lg:w-auto">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Internships */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Internship Programs</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Gain valuable experience and launch your career in industrial policy and advocacy.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {internships.map((internship) => (
                <Card key={internship.title}>
                  <CardHeader>
                    <CardTitle>{internship.title}</CardTitle>
                    <CardDescription className="mb-3">{internship.description}</CardDescription>
                    <div className="text-sm text-muted-foreground">Duration: {internship.duration}</div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Apply for Internship
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join EISAZ */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Why Join EISAZ</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Be part of an organization making a real difference in Zimbabwe's industrial development.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Meaningful Impact</CardTitle>
                  <CardDescription>
                    Contribute to policies and programs that shape Zimbabwe's industrial future and support thousands of
                    workers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Professional Growth</CardTitle>
                  <CardDescription>
                    Develop expertise in industrial policy, labour relations, and sector advocacy through hands-on
                    experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Dynamic Environment</CardTitle>
                  <CardDescription>
                    Work with industry leaders, government officials, and international partners on strategic
                    initiatives.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">How to Apply</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Submit your application including CV, cover letter, and relevant certificates to:
              </p>
              <Card>
                <CardContent className="py-8">
                  <p className="text-lg font-medium text-foreground mb-2">careers@eisaz.co.zw</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Please reference the position title in your email subject line
                  </p>
                  <Button size="lg" asChild>
                    <Link href="mailto:careers@eisaz.co.zw">Email Your Application</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

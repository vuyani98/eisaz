import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Shield, Users, FileText, Briefcase, TrendingUp, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Membership - Join EISAZ",
  description: "Discover membership benefits and join Zimbabwe's premier engineering and steel industry association.",
}

export default function MembershipPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Policy Advocacy",
      description: "Strong representation in government policy discussions and regulatory frameworks.",
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with industry leaders, partners, and stakeholders at exclusive events.",
    },
    {
      icon: FileText,
      title: "Labour Relations Support",
      description: "Access to CBAs, wage agreements, dispute resolution services, and HR templates.",
    },
    {
      icon: Briefcase,
      title: "Business Intelligence",
      description: "Industry reports, market data, sector statistics, and research publications.",
    },
    {
      icon: TrendingUp,
      title: "Export Development",
      description: "Market access programs, trade missions, and export competitiveness support.",
    },
    {
      icon: Award,
      title: "Training & Development",
      description: "Workshops, seminars, and capacity building programs for your workforce.",
    },
  ]

  const membershipTiers = [
    {
      name: "Associate Member",
      price: "Contact Us",
      description: "For emerging companies and SMEs in the engineering sector",
      features: [
        "Access to industry reports",
        "Event participation",
        "Newsletter subscription",
        "Basic networking opportunities",
      ],
    },
    {
      name: "Full Member",
      price: "Contact Us",
      description: "For established companies in engineering, iron & steel",
      features: [
        "All Associate benefits",
        "Policy advocacy representation",
        "Labour relations support",
        "Member directory listing",
        "Priority event access",
        "Voting rights",
      ],
      featured: true,
    },
    {
      name: "Corporate Member",
      price: "Contact Us",
      description: "For large enterprises and industry leaders",
      features: [
        "All Full Member benefits",
        "Board representation opportunity",
        "Strategic advisory access",
        "Premium branding visibility",
        "Custom support services",
        "Exclusive stakeholder meetings",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black/85 text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/members.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">Become a Member</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Join over 150 companies driving Zimbabwe's industrial transformation. Access exclusive resources,
                advocacy, and networking opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Membership Benefits</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Comprehensive support for your business growth and operational excellence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <Card key={benefit.title}>
                    <CardHeader>
                      <Icon className="h-10 w-10 text-primary mb-3" />
                      <CardTitle>{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Membership Options</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Choose the membership level that best fits your organization.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {membershipTiers.map((tier) => (
                <Card key={tier.name} className={tier.featured ? "border-primary shadow-lg" : ""}>
                  {tier.featured && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="text-3xl font-bold text-foreground mt-4">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={tier.featured ? "default" : "outline"} asChild>
                      <Link href="#apply">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">How to Join</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Simple process to become part of Zimbabwe's leading industrial association.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Complete the membership application form online or download it.",
                },
                {
                  step: "2",
                  title: "Review Process",
                  description: "Our team reviews your application and company credentials.",
                },
                {
                  step: "3",
                  title: "Board Approval",
                  description: "Application is presented to the board for final approval.",
                },
                {
                  step: "4",
                  title: "Welcome Aboard",
                  description: "Receive membership certificate and access to member portal.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-20 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Membership Application</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Fill out the form below and our team will contact you within 2 business days.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company-name" className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company-name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="registration-number" className="block text-sm font-medium text-foreground mb-2">
                        Registration Number *
                      </label>
                      <input
                        type="text"
                        id="registration-number"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-person" className="block text-sm font-medium text-foreground mb-2">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        id="contact-person"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                        Position *
                      </label>
                      <input
                        type="text"
                        id="position"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
                      Primary Sector *
                    </label>
                    <select
                      id="sector"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select a sector</option>
                      <option value="steel">Steel Manufacturing</option>
                      <option value="iron">Iron & Ore Processing</option>
                      <option value="engineering">Engineering Services</option>
                      <option value="fabrication">Metal Fabrication</option>
                      <option value="equipment">Equipment Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="membership-type" className="block text-sm font-medium text-foreground mb-2">
                      Membership Type *
                    </label>
                    <select
                      id="membership-type"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select membership type</option>
                      <option value="associate">Associate Member</option>
                      <option value="full">Full Member</option>
                      <option value="corporate">Corporate Member</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-2">
                      Number of Employees
                    </label>
                    <select
                      id="employees"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your company and why you want to join EISAZ..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Member Directory CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="py-12 px-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">Explore Our Member Directory</h2>
                <p className="text-lg mb-8 text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
                  Browse our comprehensive directory of member companies across Zimbabwe's engineering and steel sector.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/membership/directory">
                    View Member Directory <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

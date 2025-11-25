import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Linkedin, Twitter } from "lucide-react"

export const metadata = {
  title: "Contact Us - EISAZ",
  description: "Get in touch with EISAZ for inquiries about membership, events, or sector information.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["EISAZ House", "123 Industrial Way", "Harare, Zimbabwe"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: +263 4 XXX XXX", "Fax: +263 4 XXX XXX", "Emergency: +263 77 XXX XXXX"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["General: info@eisaz.co.zw", "Membership: membership@eisaz.co.zw", "Events: events@eisaz.co.zw"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday", "08:00 - 17:00", "Closed on Public Holidays"],
    },
  ]

  const departments = [
    {
      name: "Membership Services",
      contact: "membership@eisaz.co.zw",
      description: "Membership applications, renewals, and member support.",
    },
    {
      name: "Industrial Relations",
      contact: "labour@eisaz.co.zw",
      description: "CBAs, wage agreements, and dispute resolution.",
    },
    {
      name: "Policy & Advocacy",
      contact: "policy@eisaz.co.zw",
      description: "Sector policy matters and government engagement.",
    },
    {
      name: "Events & Training",
      contact: "events@eisaz.co.zw",
      description: "Event registrations, workshop bookings, and training programs.",
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">Contact Us</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                We're here to help. Reach out with any questions about membership, events, or our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Send Us a Message</h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <form className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="first-name"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="last-name"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            required
                          />
                        </div>
                      </div>

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
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="membership">Membership Inquiry</option>
                          <option value="events">Event Registration</option>
                          <option value="industrial-relations">Industrial Relations Support</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="media">Media/Press Inquiry</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Please provide details about your inquiry..."
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground">
                    Visit our office or contact us through any of the channels below.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <Card key={info.title}>
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg mb-2">{info.title}</CardTitle>
                              <div className="space-y-1">
                                {info.details.map((detail, index) => (
                                  <p key={index} className="text-sm text-muted-foreground">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    )
                  })}
                </div>

                {/* Social Media */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                    <CardDescription>Stay connected on social media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="h-5 w-5 text-primary" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-primary" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Department Contacts</h2>
              <p className="text-lg text-muted-foreground text-pretty">Reach the right team for your specific needs.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {departments.map((dept) => (
                <Card key={dept.name}>
                  <CardHeader>
                    <CardTitle>{dept.name}</CardTitle>
                    <CardDescription className="mb-3">{dept.description}</CardDescription>
                    <a href={`mailto:${dept.contact}`} className="text-sm font-medium text-primary hover:underline">
                      {dept.contact}
                    </a>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Located in the heart of Harare's industrial district.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <img
                  src="/harare-zimbabwe-map.jpg"
                  alt="Office location map"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">EISAZ Headquarters</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      EISAZ House, 123 Industrial Way, Harare, Zimbabwe
                    </p>
                    <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                      Get Directions
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

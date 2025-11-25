import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ArrowRight, Video } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Events - EISAZ",
  description:
    "Explore upcoming conferences, workshops, and networking events in Zimbabwe's engineering and steel sector.",
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Steel Industry Conference 2024",
      description:
        "Join industry leaders, policymakers, and stakeholders to discuss sector challenges, opportunities, and strategic priorities for 2025.",
      date: "December 15, 2024",
      time: "08:00 - 17:00",
      location: "Rainbow Towers Hotel, Harare",
      type: "Conference",
      attendees: "250+ expected",
      registration: "Open",
      image: "1",
    },
    {
      id: 2,
      title: "Labour Relations & HR Best Practices Workshop",
      description:
        "Interactive training session on collective bargaining, dispute resolution, and compliance with latest labour regulations.",
      date: "January 22, 2025",
      time: "09:00 - 16:00",
      location: "Bulawayo Conference Centre",
      type: "Workshop",
      attendees: "80 seats available",
      registration: "Open",
      image: "2",
    },
    {
      id: 3,
      title: "Export Market Development Seminar",
      description:
        "Learn about new export opportunities, market entry strategies, and quality standards for international markets.",
      date: "February 5, 2025",
      time: "10:00 - 15:00",
      location: "Meikles Hotel, Harare",
      type: "Seminar",
      attendees: "120 seats available",
      registration: "Open",
      image: "3",
    },
    {
      id: 4,
      title: "Quarterly Members Networking Evening",
      description:
        "Informal networking event for member companies to connect, share experiences, and explore collaboration opportunities.",
      date: "February 28, 2025",
      time: "17:30 - 20:00",
      location: "EISAZ Headquarters, Harare",
      type: "Networking",
      attendees: "Members only",
      registration: "Open Soon",
      image: "4",
    },
  ]

  const pastEvents = [
    {
      title: "Industrial Technology Expo 2024",
      date: "October 12, 2024",
      attendees: "340 participants",
      highlights: "Showcased latest manufacturing technologies and equipment innovations.",
    },
    {
      title: "Policy Roundtable: NDS1 Implementation",
      date: "September 18, 2024",
      attendees: "65 participants",
      highlights: "Strategic discussion with government officials on sector priorities.",
    },
    {
      title: "Skills Development Summit",
      date: "August 7, 2024",
      attendees: "180 participants",
      highlights: "Launched new technical training partnerships with industry colleges.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black/85 text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/events.png')] bg-cover bg-center opacity-10" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">Events & Calendar</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Connect with industry peers, enhance your knowledge, and stay ahead through our conferences, workshops,
                and networking events.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Mark your calendar and register for these essential industry gatherings.
              </p>
            </div>

            <div className="grid gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="aspect-video lg:aspect-auto bg-muted relative">
                      <img
                        src={`/ceholder-svg-key-ywdlh-key-event.jpg?key=ywdlh&key=event${event.image}&height=400&width=400&query=professional+conference+event`}
                        alt={event.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {event.type}
                          </span>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              event.registration === "Open"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                            }`}
                          >
                            {event.registration}
                          </span>
                        </div>
                        <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-3 sm:grid-cols-2 mb-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 flex-shrink-0" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button disabled={event.registration !== "Open"}>
                            {event.registration === "Open" ? "Register Now" : "Registration Opens Soon"}
                          </Button>
                          <Button variant="outline">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Event Categories</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Diverse formats designed to meet different learning and networking needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Users,
                  title: "Conferences",
                  description: "Large-scale industry gatherings with keynote speakers and panel discussions.",
                },
                {
                  icon: Clock,
                  title: "Workshops",
                  description: "Hands-on training sessions on technical and managerial topics.",
                },
                {
                  icon: Video,
                  title: "Webinars",
                  description: "Online seminars accessible to members across Zimbabwe.",
                },
                {
                  icon: Users,
                  title: "Networking",
                  description: "Informal gatherings to build relationships and share insights.",
                },
              ].map((category) => {
                const Icon = category.icon
                return (
                  <Card key={category.title}>
                    <CardHeader>
                      <Icon className="h-10 w-10 text-primary mb-3" />
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Past Events</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Highlights from recent EISAZ events and programs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pastEvents.map((event) => (
                <Card key={event.title}>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{event.date}</div>
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <CardDescription className="mb-3">{event.highlights}</CardDescription>
                    <div className="text-sm font-medium text-primary">{event.attendees}</div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">Never Miss an Event</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
                Subscribe to our newsletter to receive event notifications and industry updates.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/knowledge-center#newsletters">Subscribe to Newsletter</Link>
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

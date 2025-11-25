"use client"

import Link from "next/link"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Factory, MapPin, Phone, Mail, Globe, Search } from "lucide-react"

// Mock member data
const members = [
  {
    id: 1,
    name: "Zimbabwe Iron & Steel Company",
    sector: "Steel Manufacturing",
    location: "Harare",
    employees: "500+",
    email: "info@zisco.co.zw",
    phone: "+263 4 XXX XXX",
    website: "www.zisco.co.zw",
    description: "Leading steel manufacturer producing quality steel products for construction and industrial use.",
  },
  {
    id: 2,
    name: "Harare Engineering Works",
    sector: "Engineering Services",
    location: "Harare",
    employees: "201-500",
    email: "contact@harareengineer.co.zw",
    phone: "+263 4 XXX XXX",
    website: "www.harareengineer.co.zw",
    description: "Comprehensive engineering solutions including design, fabrication, and installation services.",
  },
  {
    id: 3,
    name: "Bulawayo Steel Mills",
    sector: "Steel Manufacturing",
    location: "Bulawayo",
    employees: "500+",
    email: "info@bsm.co.zw",
    phone: "+263 9 XXX XXX",
    website: "www.bulaways steel.co.zw",
    description: "Integrated steel production facility serving regional and international markets.",
  },
  {
    id: 4,
    name: "National Railways Engineering",
    sector: "Equipment Manufacturing",
    location: "Bulawayo",
    employees: "500+",
    email: "engineering@nrz.co.zw",
    phone: "+263 9 XXX XXX",
    website: "www.nrz.co.zw",
    description: "Railway equipment manufacturing and maintenance services for transport infrastructure.",
  },
  {
    id: 5,
    name: "Engineering Solutions Ltd",
    sector: "Engineering Services",
    location: "Harare",
    employees: "51-200",
    email: "info@engsolutions.co.zw",
    phone: "+263 4 XXX XXX",
    website: "www.engsolutions.co.zw",
    description: "Specialized engineering consultancy and project management for industrial clients.",
  },
  {
    id: 6,
    name: "Industrial Metals Zimbabwe",
    sector: "Metal Fabrication",
    location: "Gweru",
    employees: "201-500",
    email: "info@indmetals.co.zw",
    phone: "+263 54 XXX XXX",
    website: "www.industrialmetals.co.zw",
    description: "Custom metal fabrication and structural steel work for construction projects.",
  },
  {
    id: 7,
    name: "Precision Engineering Co.",
    sector: "Engineering Services",
    location: "Mutare",
    employees: "51-200",
    email: "contact@precisioneng.co.zw",
    phone: "+263 20 XXX XXX",
    website: "www.precisioneng.co.zw",
    description: "Precision machining and engineering services for mining and manufacturing sectors.",
  },
  {
    id: 8,
    name: "Zimalloys",
    sector: "Iron & Ore Processing",
    location: "Gweru",
    employees: "500+",
    email: "info@zimalloys.co.zw",
    phone: "+263 54 XXX XXX",
    website: "www.zimalloys.co.zw",
    description: "Processing and refining of ferro-alloys for domestic and export markets.",
  },
]

const sectors = [
  "All Sectors",
  "Steel Manufacturing",
  "Engineering Services",
  "Metal Fabrication",
  "Equipment Manufacturing",
  "Iron & Ore Processing",
]
const locations = ["All Locations", "Harare", "Bulawayo", "Gweru", "Mutare"]

export default function MemberDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSector, setSelectedSector] = useState("All Sectors")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSector = selectedSector === "All Sectors" || member.sector === selectedSector
    const matchesLocation = selectedLocation === "All Locations" || member.location === selectedLocation
    return matchesSearch && matchesSector && matchesLocation
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-balance">Member Directory</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/90 text-pretty">
                Connect with EISAZ member companies across Zimbabwe's engineering and steel sector.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-muted/30 sticky top-[73px] z-40 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredMembers.length} of {members.length} members
            </div>
          </div>
        </section>

        {/* Member Cards */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {filteredMembers.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Factory className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">No members found matching your criteria.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {filteredMembers.map((member) => (
                  <Card key={member.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                            <Factory className="h-12 w-12 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                  {member.sector}
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                  {member.employees} employees
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.description}</p>
                            </div>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span>{member.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="h-4 w-4 flex-shrink-0" />
                              <span>{member.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Mail className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{member.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Globe className="h-4 w-4 flex-shrink-0" />
                              <a
                                href={`https://${member.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary truncate"
                              >
                                {member.website}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="py-12 px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-balance">Want to Be Listed Here?</h2>
                <p className="text-lg mb-8 text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
                  Join EISAZ today and gain visibility among industry peers and potential partners.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/membership">Become a Member</Link>
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

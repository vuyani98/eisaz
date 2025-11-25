import Link from "next/link"
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    // 1. Set the main background to primary color and default text color to white
    <footer className="border-t border-border bg-primary text-white"> 
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            {/* Change text-primary to text-white or a subtle light color */}
            <h3 className="text-lg font-bold text-white mb-4">EISAZ</h3>
            {/* Change text-muted-foreground to a light/subtle white shade */}
            <p className="text-sm text-white/90 leading-relaxed">
              Engineering, Iron & Steel Association of Zimbabwe - Strategic partner to government and champion of
              industrial growth since the 1920s.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Change hover color to a light accent if needed, otherwise white */}
              <Link href="#" className="text-white hover:text-white/70 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/70 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/70 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {/* Change text-foreground to white */}
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                {/* Change text-muted-foreground to white/90 */}
                <Link href="/about" className="text-sm text-white/90 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm text-white/90 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-center"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-white/90 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            {/* Change text-foreground to white */}
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/industrial-relations"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Industrial Relations
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-center"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Reports & Publications
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-white/90 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/90 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            {/* Change text-foreground to white */}
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              {/* Change text-muted-foreground to white/90 */}
              <li className="flex items-start gap-2 text-sm text-white/90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>33 Knightsbridge Road, Highlands Harare</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+2638677160776 | +263 242 746 796</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@eisaz.co.zw</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        {/* Border and text color change */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Engineering, Iron & Steel Association of Zimbabwe. All rights reserved. Designed By Vutha Digital
          </p>
        </div>
      </div>
    </footer>
  )
}
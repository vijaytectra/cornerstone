import Link from "next/link";
import { Box } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-[200px] md:h-12 md:w-[260px]">
                <Image src="/black-cs.png" alt="Cornerstone" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Premium cross-border logistics platform. Global operations control center for high-value parcel delivery.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-status-transit animate-pulse" />
                <span className="text-xs text-muted-foreground font-mono">SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight mb-4">Corridors</h4>
            <ul className="space-y-3 text-[13px] text-[#666]">
              <li><Link href="#" className="hover:text-foreground transition-colors">India → Canada</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Canada → Australia</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Australia → USA</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Australia → India</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight mb-4">Platform</h4>
            <ul className="space-y-3 text-[13px] text-[#666]">
              <li><Link href="#" className="hover:text-foreground transition-colors">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Webhooks</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Customs Data</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Telemetry Network</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-tight mb-4">Company</h4>
            <ul className="space-y-3 text-[13px] text-[#666]">
              <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Cornerstone Logistics Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
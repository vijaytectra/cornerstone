"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function WhyCornerstone() {
  const reasons = [
    "Dedicated space on premier commercial airlines.",
    "Proprietary customs integration for sub-4-hour clearance.",
    "Immutable audit trails for every physical handover.",
    "Zero-exception routing (no dynamic rerouting).",
    "Direct API access for enterprise volume.",
    "No consumer-grade packaging requirements."
  ];

  return (
    <section className="py-6 md:py-12 border-b border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="csn-label mb-4 text-primary">COMPETITIVE DELTA</span>
            <h2 className="text-3xl md:text-5xl lg:text-[52px] font-heading font-normal tracking-tight leading-[1.05] mb-6">
              Why control centers matter.
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              The logistics industry is built on black boxes and best-effort promises. We built Cornerstone on deterministic routing and absolute data transparency.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="aspect-square md:aspect-[4/3] bg-background border border-border rounded-2xl p-8 relative overflow-hidden flex flex-col justify-end">
              <Image 
                src="/logistics-control-center.jpg"
                alt="Digital Control Room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />

              {/* Mockup Data Grid */}
              <div className="relative z-20 space-y-4 bg-background/80 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-border shadow-sm">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 border-b border-border pb-2">
                  <span className="csn-label text-left">METRIC</span>
                  <span className="csn-label text-left">INDUSTRY</span>
                  <span className="csn-label text-primary text-left">CORNERSTONE</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center group">
                  <span className="text-xs sm:text-sm text-foreground font-medium transition-colors text-left">Clearance Time</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground text-left">24-48 hrs</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground font-semibold text-left">&lt; 4 hrs</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center group">
                  <span className="text-xs sm:text-sm text-foreground font-medium transition-colors text-left">Data Latency</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground text-left leading-tight">Batched<br className="sm:hidden" /> (Daily)</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground font-semibold text-primary text-left leading-tight">Real-time<br className="sm:hidden" /> (API)</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center group">
                  <span className="text-xs sm:text-sm text-foreground font-medium transition-colors text-left">Loss Rate</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground text-left">1.2%</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground font-semibold text-left">0.01%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
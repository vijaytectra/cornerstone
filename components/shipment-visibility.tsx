"use client";

import { Badge } from "@/components/ui/badge";
import { LocateFixed, MapPin, Activity } from "lucide-react";
import { motion } from "motion/react";

export function ShipmentVisibility() {
  return (
    <section id="tracking" className="py-24 md:py-32 border-b border-border relative overflow-hidden bg-[#faf9f6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="csn-label text-primary mb-4 block">TELEMETRY & VISIBILITY</span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-heading font-normal tracking-tight leading-[1.05] mb-6">
              Never wonder where it is.
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              Generic couriers give you vague status updates. Cornerstone provides real-time telemetry, exact coordinates, and clearance milestone logging.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group p-4 -ml-4 rounded-2xl hover:bg-black/[0.03] transition-all cursor-default">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-accent rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(229,92,46,0.2)]">
                  <Activity className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="pt-1">
                  <h4 className="font-medium text-zinc-900 mb-1 transition-colors group-hover:text-primary">Live Node Tracking</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">Every scan, transfer, and customs check is logged immutably and instantly available via dashboard or API.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group p-4 -ml-4 rounded-2xl hover:bg-black/[0.03] transition-all cursor-default">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-accent rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(229,92,46,0.2)]">
                  <LocateFixed className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-90" />
                </div>
                <div className="pt-1">
                  <h4 className="font-medium text-zinc-900 mb-1 transition-colors group-hover:text-primary">Geographic Coordinates</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">For critical shipments, view the exact GPS coordinates of the last known scanning facility.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact tracking panel (dark) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#1e1e1e] text-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex justify-between items-start mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[1.2px] block mb-1">SHIPMENT ID</span>
                <span className="text-lg font-medium text-white font-mono">CSN-8942-X</span>
              </div>
              <Badge variant="outline" className="border-blue-400/30 text-blue-300 bg-blue-500/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse mr-2" />
                IN TRANSIT
              </Badge>
            </div>

            <div className="relative space-y-6 pl-5">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <span className="absolute -left-5 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#1e1e1e] bg-primary shadow-[0_0_0_4px_rgba(229,92,46,0.25)]" />
                <div className="p-4 rounded-xl border border-primary/25 bg-white/5 ml-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-[1.2px] block">CURRENT STATUS</span>
                    <span className="text-xs font-mono text-white/50">14:32 UTC</span>
                  </div>
                  <p className="text-sm font-medium text-white">Cleared Customs (YYZ)</p>
                  <p className="text-xs text-white/50 mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" /> 43.6777° N, 79.6248° W</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <span className="absolute -left-5 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#1e1e1e] bg-white/25" />
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 ml-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[1.2px] block">PREVIOUS NODE</span>
                    <span className="text-xs font-mono text-white/50">08:15 UTC</span>
                  </div>
                  <p className="text-sm text-white/70">Departed Origin Hub (DEL)</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
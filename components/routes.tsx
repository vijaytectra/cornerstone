"use client";

import { ArrowRight, Plane, Ship } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export function Routes() {
  const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);

  const corridors = [
    { from: "India", to: "Canada", code: "IN → CA", mode: "AIR / SEA", time: "48-72h", active: true, desc: "Direct daily flights via LHR layover. Priority clearance at YYZ." },
    { from: "Canada", to: "Australia", code: "CA → AU", mode: "AIR", time: "72-96h", active: true, desc: "Trans-pacific direct allocations. Advanced biometric security scanning." },
    { from: "Australia", to: "USA", code: "AU → US", mode: "AIR / SEA", time: "48-72h", active: true, desc: "High-volume cargo corridor. Next-day injection into domestic USPS grid." },
    { from: "Australia", to: "India", code: "AU → IN", mode: "AIR", time: "48-72h", active: true, desc: "Express pharmaceutical and high-value tech lanes. Pre-cleared in BOM." },
  ];

  return (
    <section id="routes" className="py-10 md:py-16 border-b border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 max-w-2xl"
          >
            <span className="csn-label mb-4 block text-primary">PRIMARY CORRIDORS</span>
            <h2 className="text-[14px] md:text-[32px] lg:text-[40px] font-heading font-normal tracking-tight leading-[1.05] text-foreground mb-6">
              Optimized intercontinental routing.
            </h2>
            <p className="text-lg text-muted-foreground">
              We don&apos;t do everywhere. We do four corridors with absolute precision. High-frequency dispatches and dedicated customs clearance lanes.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full h-64 md:h-80 relative rounded-2xl overflow-hidden border border-border"
          >
            <Image 
              src="/new-routes-map.jpg" 
              alt="Global Flight Routes" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corridors.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onHoverStart={() => setHoveredRoute(i)}
              onHoverEnd={() => setHoveredRoute(null)}
              className="group relative border border-border bg-card p-8 rounded-2xl hover:border-primary/60 transition-colors cursor-pointer overflow-hidden"
            >
              <motion.div
                animate={{ backgroundColor: hoveredRoute === i ? "rgba(229, 92, 46, 0.04)" : "transparent" }}
                className="absolute inset-0 pointer-events-none transition-colors duration-300"
              />

              {/* Removed absolute dot, moved into the flex header below */}

              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="flex items-start gap-4 pr-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center border border-primary/20">
                    0{i + 1}
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xl md:text-2xl font-heading font-medium text-foreground flex items-center flex-wrap gap-x-3 gap-y-1">
                      {route.from} 
                      <motion.div animate={{ x: hoveredRoute === i ? 5 : 0 }}>
                        <ArrowRight className="h-5 w-5 text-muted-foreground/50" />
                      </motion.div>
                      {route.to}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 bg-muted/30 p-4 rounded-xl border border-border/50 relative z-10">
                <div className="flex flex-col text-left items-start">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Route ID</span>
                  <span className="font-mono text-sm text-foreground font-medium">{route.code}</span>
                </div>
                <div className="flex flex-col text-left items-start">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Mode</span>
                  <span className="text-sm font-medium text-foreground flex items-center justify-start gap-1.5">
                    {route.mode.includes("AIR") && <Plane className="h-3.5 w-3.5 text-primary" />}
                    {route.mode.includes("SEA") && <Ship className="h-3.5 w-3.5 text-primary" />}
                    {route.mode}
                  </span>
                </div>
                <div className="flex flex-col text-right items-end">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Transit</span>
                  <span className="text-sm font-medium text-foreground">{route.time}</span>
                </div>
              </div>

              <AnimatePresence>
                {hoveredRoute === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="pt-6 mt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground">{route.desc}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
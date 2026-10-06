"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Crosshair, Navigation2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const TypewriterLine = ({ text, delay, className }: { text: string, delay: number, className?: string }) => (
  <span className={className}>
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.01, delay: delay + index * 0.04 }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

export function Hero() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 5000); // Repeat every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0b1d29] text-white flex-1 flex flex-col justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/global-network-globe.png" 
          alt="Global Logistics Network" 
          fill 
          className="object-cover object-[80%_center] md:object-right saturate-50 contrast-75 brightness-90"
          priority
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b1d29] via-[#0b1d29]/70 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0b1d29] via-transparent to-[#0b1d29]/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-10 md:pt-32 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-x-16 gap-y-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >


            <h1 key={animationKey} className="text-5xl sm:text-6xl xl:text-[68px] leading-[1.04] font-heading font-normal tracking-tight mb-6 min-h-[160px] sm:min-h-[190px] md:min-h-[200px] xl:min-h-[220px]">
              <TypewriterLine text="Your shipment." delay={0.4} />
              <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              <TypewriterLine text="Across borders." delay={1.2} className="text-primary" />
              <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              <TypewriterLine text="Always in sight." delay={2.1} />
            </h1>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-10"
            >
              Precision cross-border parcel delivery operating across primary
              corridors: India, Canada, Australia, and the USA. Real-time data,
              absolute transparency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl rounded-2xl sm:rounded-full border border-white/20 bg-white/10 p-4 sm:p-2 sm:pl-5 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="flex-1 flex items-center w-full">
                <Crosshair className="h-5 w-5 text-white/70 mr-3 shrink-0" />
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-white/60">
                    ENTER TRACKING ID OR REFERENCE
                  </span>
                  <Input
                    type="text"
                    placeholder="e.g. CSN482913750"
                    className="border-0 p-0 h-8 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-lg uppercase font-mono tracking-wider text-white placeholder:text-white/40"
                  />
                </div>
              </div>
              <Button className="w-full sm:w-auto h-12 px-8 font-semibold tracking-wide">
                TRACK SHIPMENT <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats / Signature Pattern Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-16 text-left border-t border-white/15 pt-8"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-white/50 block mb-1">ACTIVE ROUTES</span>
            <span className="text-lg font-medium text-white flex items-center gap-2 tracking-tight whitespace-nowrap">
              <Navigation2 className="h-4 w-4 text-primary shrink-0" /> 4 CORRIDORS
            </span>
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-white/50 block mb-1">NETWORK UPTIME</span>
            <span className="text-lg font-medium text-status-delivered tracking-tight whitespace-nowrap">99.9%</span>
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-white/50 block mb-1">AVG. CLEARANCE</span>
            <span className="text-lg font-medium text-white tracking-tight whitespace-nowrap">&lt; 4 HOURS</span>
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-white/50 block mb-1">SYSTEM STATUS</span>
            <span className="text-lg font-medium text-white flex items-center gap-2 tracking-tight whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-status-transit animate-pulse shrink-0" /> OPERATIONAL
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
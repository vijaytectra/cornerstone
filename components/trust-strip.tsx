"use client";

import { motion } from "motion/react";

export function TrustStrip() {
  const logos = [
    <div key="1" className="font-heading font-semibold text-xl leading-none tracking-tight text-white whitespace-nowrap flex items-center">GLOBAL<span className="font-light">CUSTOMS</span></div>,
    <div key="2" className="font-heading font-semibold text-xl leading-none tracking-tight text-white whitespace-nowrap flex items-center">AERO<span className="font-light">FREIGHT</span></div>,
    <div key="3" className="font-heading font-semibold text-xl leading-none tracking-tight text-white whitespace-nowrap flex items-center">BORDER<span className="font-light">SECURE</span></div>,
    <div key="4" className="font-heading font-semibold text-xl leading-none tracking-tight text-white whitespace-nowrap flex items-center">LOGIX<span className="font-light">DATA</span></div>,
  ];

  const logoGroup = (
    <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-8 md:gap-16">
          {logos}
        </div>
      ))}
    </div>
  );

  return (
    <section className="border-b border-white/10 bg-[#0b1d29] py-8 overflow-hidden relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 text-white/50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 shrink-0 z-10 md:bg-[#0b1d29] md:pr-4"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-white/40">
              INTEGRATED WITH
            </span>
            <div className="h-6 w-[1px] bg-white/20 hidden md:block" />
          </motion.div>

          <div className="flex flex-1 items-center w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="flex items-center w-max opacity-100"
            >
              {logoGroup}
              {logoGroup}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    { num: "01", title: "API Dispatch", desc: "Digital ingestion of shipment manifest and customs documentation before pickup." },
    { num: "02", title: "First Mile", desc: "Secure pickup via dedicated local assets. Initial barcode telemetry established." },
    { num: "03", title: "Export Clearance", desc: "Pre-cleared through our digital customs bridges at the origin airport." },
    { num: "04", title: "Linehaul", desc: "Direct flight to destination corridor. Monitored via active GPS tags when applicable." },
    { num: "05", title: "Final Node", desc: "Injection into the local delivery grid for immediate final-mile execution." }
  ];

  return (
    <section className="py-6 md:py-12 border-b border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
        >
          <span className="csn-label text-primary mb-4 block">THE PROTOCOL</span>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-heading font-normal tracking-tight leading-[1.05]">
            Standardized operational flow.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[22px] left-[60px] w-[calc(100%-76px)] h-[1px] bg-border overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5, ease: "circOut" }}
                    className="w-full h-full bg-primary"
                  />
                </div>
              )}
              <div className="mb-6 relative z-10 bg-background inline-block pr-4">
                <span className="w-11 h-11 rounded-full border border-border text-primary text-sm font-semibold inline-flex items-center justify-center group-hover:border-primary group-hover:bg-accent transition-colors">
                  {step.num}
                </span>
              </div>
              <h4 className="font-heading font-medium text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-zinc-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
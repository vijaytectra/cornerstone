"use client";

import { ShieldCheck, Zap, Scale } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function Services() {
  const services = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Express Air Freight",
      desc: "Priority routing for time-critical shipments. Guaranteed space allocations on daily commercial and cargo flights.",
      meta: "24-48H TRANSIT"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Secure Cross-Border",
      desc: "End-to-end chain of custody for high-value goods. Tamper-evident protocols and direct routing to minimize handling.",
      meta: "INSURED UP TO $1M"
    },
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: "Customs Clearance (DDP)",
      desc: "Delivered Duty Paid. We handle all import/export documentation, duties, and taxes before the shipment leaves origin.",
      meta: "ZERO DELAYS"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 border-b border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <span className="csn-label mb-4 text-primary">SERVICE CAPABILITIES</span>
            <h2 className="text-3xl md:text-5xl lg:text-[52px] font-heading font-normal tracking-tight leading-[1.05] mb-6">
              Engineered for reliability.
            </h2>
            <p className="text-muted-foreground mb-8 lg:mb-12">
              We specialize in complex, high-stakes parcel delivery where failure is not an option. Our service architecture is designed around predictability.
            </p>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mt-8 hidden sm:block lg:mt-0">
              <Image 
                src="/modern-cargo-logistics.jpg" 
                alt="Air Cargo Loading"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 md:gap-8 mt-8 lg:mt-0">
            {services.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                key={i}
                className="flex flex-col p-8 bg-card border border-border rounded-2xl hover:border-primary/60 hover:shadow-lg transition-all cursor-default"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-accent">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-medium text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{service.desc}</p>
                <div className="mt-auto pt-4 border-t border-border">
                  <span className="csn-label text-primary">{service.meta}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
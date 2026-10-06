"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export function Faq() {
  const faqs = [
    {
      q: "What items are prohibited on Cornerstone corridors?",
      a: "We adhere strictly to international aviation regulations. Prohibited items include hazardous materials (Hazmat), lithium batteries (unless strictly packaged per IATA regulations), perishable goods, and restricted dual-use technologies."
    },
    {
      q: "How does the 'Delivered Duty Paid' (DDP) service work?",
      a: "With DDP, Cornerstone calculates all import duties and taxes at the time of dispatch. These fees are billed to the shipper, ensuring the shipment passes through destination customs without requiring payment or action from the recipient, eliminating delays."
    },
    {
      q: "What happens during a customs hold?",
      a: "If a customs hold occurs, our API triggers an immediate 'Exception' webhook. Our dedicated brokers engage local authorities instantly. Because our documentation is pre-verified, 94% of holds are resolved within 6 hours."
    },
    {
      q: "Can I integrate Cornerstone into Shopify or Magento?",
      a: "Yes. While we focus on Enterprise APIs, we provide pre-built headless connectors for major e-commerce platforms, allowing you to display real-time DDP rates and tracking inside your existing checkout flow."
    }
  ];

  return (
    <section className="py-10 md:py-16 border-b border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-10"
        >
          <span className="csn-label text-primary mb-4 block">SYSTEM INQUIRIES</span>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-heading font-normal tracking-tight leading-[1.05] text-foreground">Frequently Asked Questions</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors hover:no-underline text-foreground text-lg md:text-xl py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base md:text-lg pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Cta() {
  return (
    <section className="pt-2 pb-6 md:pt-4 md:pb-12 bg-background">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1e1e1e] px-4 py-12 md:px-6 md:py-24 text-center relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pattern-grid-dark"
          />

          <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="csn-label !text-white mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5"
            >
              SYSTEM ACCESS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-[64px] font-heading font-normal tracking-tight leading-[1.05] text-white mb-8"
            >
              Deploy your first dispatch.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-10 max-w-xl"
            >
              Integrate the Cornerstone protocol today. Experience deterministic delivery and absolute transparency across borders.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button className="h-14 px-8 font-semibold tracking-wide text-lg">
                CREATE ACCOUNT <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 rounded-full font-semibold tracking-wide text-lg bg-transparent">
                CONTACT SALES
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
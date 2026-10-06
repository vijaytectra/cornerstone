"use client";

import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { motion } from "motion/react";

export function Business() {
  return (
    <section id="business" className="py-24 md:py-32 border-b border-border bg-[#faf9f6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-border rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="csn-label text-primary mb-4 block">ENTERPRISE API</span>
            <h2 className="text-3xl md:text-5xl lg:text-[48px] font-heading font-normal tracking-tight leading-[1.05] mb-6">
              Plug straight into the network.
            </h2>
            <p className="text-lg text-zinc-600 mb-8">
              Bypass the portal. Integrate our logistics protocol directly into your ERP or WMS via our RESTful API. Generate labels, dispatch pickups, and subscribe to webhooks for node-level tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-8 font-semibold tracking-wide">
                VIEW DOCUMENTATION
              </Button>
              <Button variant="outline" className="h-12 px-8 font-semibold tracking-wide border-zinc-300 text-zinc-950 hover:bg-zinc-100 bg-white">
                REQUEST SANDBOX KEY
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl overflow-hidden text-sm shadow-2xl">
              <div className="flex items-center px-5 py-3 bg-[#2a2a2a] border-b border-[#353535]">
                <Terminal className="h-4 w-4 text-zinc-400 mr-2" />
                <span className="text-zinc-400 font-mono text-xs">POST /v1/shipments</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-zinc-300">
                  <code>
<span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> cornerstone.createShipment({`{`}
  origin: <span className="text-green-400">&apos;IN-DEL&apos;</span>,
  destination: <span className="text-green-400">&apos;CA-YYZ&apos;</span>,
  service_level: <span className="text-green-400">&apos;PRIORITY_AIR&apos;</span>,
  customs_data: `{`
    hs_code: <span className="text-green-400">&apos;8471.30&apos;</span>,
    declared_value: <span className="text-orange-400">1250.00</span>,
    currency: <span className="text-green-400">&apos;USD&apos;</span>
  `}`
{`}`});

console.log(response.tracking_id);
<span className="text-zinc-500">{`// Returns: CSN-8942-X`}</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
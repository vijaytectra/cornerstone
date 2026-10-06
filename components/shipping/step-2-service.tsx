"use client";

import { motion } from "motion/react";
import { Plane, Truck, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const rates = [
  {
    id: "dhl-express",
    carrier: "DHL Express",
    name: "Express Worldwide",
    transitTime: "2-3 Business Days",
    price: 145.00,
    description: "Fastest option. Includes priority customs clearance.",
    icon: Plane,
    recommended: true,
  },
  {
    id: "fedex-priority",
    carrier: "FedEx",
    name: "International Priority",
    transitTime: "4-6 Business Days",
    price: 128.50,
    description: "Reliable standard clearance with end-to-end tracking.",
    icon: ShieldCheck,
  },
  {
    id: "csn-economy",
    carrier: "Cornerstone",
    name: "Global Economy",
    transitTime: "8-12 Business Days",
    price: 65.00,
    description: "Best value for non-urgent shipments.",
    icon: Truck,
  }
];

export function Step2Service({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="bg-[#142433] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-white/50 hover:text-white transition-colors mb-4 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Rate Details
        </button>
        <h2 className="text-2xl font-heading mb-2">Select a Service</h2>
        <p className="text-white/60">
          Showing available rates for <span className="text-white font-medium">India</span> to <span className="text-white font-medium">Canada</span> (2.5kg).
        </p>
      </div>

      <div className="space-y-4">
        {rates.map((rate, index) => {
          const Icon = rate.icon;
          return (
            <motion.div
              key={rate.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border transition-all hover:bg-white/5 \${
                rate.recommended 
                  ? "border-primary/50 bg-primary/5" 
                  : "border-white/10 bg-[#0b1d29]"
              }`}
            >
              {rate.recommended && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Recommended
                </div>
              )}
              
              <div className="flex items-start gap-4 flex-1">
                <div className={`mt-1 p-3 rounded-full \${rate.recommended ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/70'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-lg leading-none">{rate.carrier}</h3>
                    <span className="text-white/50 text-sm">•</span>
                    <span className="text-white/70 text-sm">{rate.name}</span>
                  </div>
                  <p className="text-primary font-medium mb-1">{rate.transitTime}</p>
                  <p className="text-white/50 text-sm">{rate.description}</p>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/10">
                <div className="font-mono text-2xl font-semibold mb-2">${rate.price.toFixed(2)}</div>
                <Button onClick={onNext} variant={rate.recommended ? "default" : "secondary"}>
                  Select <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

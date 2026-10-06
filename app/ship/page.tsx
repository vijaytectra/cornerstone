"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Step1Rate } from "@/components/shipping/step-1-rate";
import { Step2Service } from "@/components/shipping/step-2-service";
import { Step3Details } from "@/components/shipping/step-3-details";
import { Step4Payment } from "@/components/shipping/step-4-payment";
import { CheckCircle2 } from "lucide-react";

const steps = [
  { id: 1, name: "Rate" },
  { id: 2, name: "Service" },
  { id: 3, name: "Details" },
  { id: 4, name: "Payment" },
];

export default function ShipPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-[#0b1d29] text-white selection:bg-primary/30 flex flex-col dark relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/global-network-globe.png"
          alt="Global Network"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0b1d29]/40" />
      </div>

      {/* Checkout Navbar */}
      <header className="border-b border-white/10 bg-[#0b1d29]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
            <span className="font-heading font-semibold text-lg tracking-tight">CORNERSTONE</span>
          </Link>
          <div className="text-xs font-medium tracking-widest text-white/50 uppercase">
            Secure Checkout
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl flex flex-col relative z-10">
        {/* Stepper */}
        <div className="mb-16">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/10 z-0" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-primary z-0 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step) => {
              const isActive = step.id === currentStep;
              const isPast = step.id < currentStep;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors duration-300 ${
                      isActive ? "bg-primary text-primary-foreground" :
                      isPast ? "bg-white text-[#0b1d29]" :
                      "bg-[#142433] text-white/40 border border-white/10"
                    }`}
                  >
                    {step.id}
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider hidden sm:block absolute top-10 whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-primary" :
                    isPast ? "text-white/80" :
                    "text-white/40"
                  }`}>
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              initial={{ opacity: 0, x: 20 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 * direction }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              {currentStep === 1 && <Step1Rate onNext={nextStep} />}
              {currentStep === 2 && <Step2Service onNext={nextStep} onBack={prevStep} />}
              {currentStep === 3 && <Step3Details onNext={nextStep} onBack={prevStep} />}
              {currentStep === 4 && <Step4Payment onNext={() => setCurrentStep(5)} onBack={prevStep} />}
              {currentStep === 5 && (
                <div className="text-center py-20 bg-[#142433] border border-white/10 rounded-2xl max-w-xl mx-auto shadow-2xl">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-heading mb-4">Shipment Booked!</h2>
                  <p className="text-white/60 mb-8">
                    Your Cornerstone Waybill is <strong className="text-white font-mono bg-white/10 px-2 py-1 rounded">CSN-8849-2026-X</strong>
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link href="/track" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
                      Track Shipment
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

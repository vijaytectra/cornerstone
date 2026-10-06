"use client";

import { ArrowLeft, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Step5Review({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="bg-[#142433] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-white/50 hover:text-white transition-colors mb-4 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Customs
        </button>
        <h2 className="text-2xl font-heading mb-2">Review Shipment</h2>
        <p className="text-white/60">
          Please verify all details before proceeding to payment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#0b1d29] border border-white/5 rounded-xl p-5">
            <h3 className="font-heading text-lg mb-4 text-white/90">Route & Service</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Origin</p>
                <p className="font-medium">Chennai, IN</p>
              </div>
              <div className="hidden sm:block text-white/20 px-4">→</div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Destination</p>
                <p className="font-medium">Toronto, CA</p>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Service</p>
                <p className="font-medium text-primary">DHL Express (2-3 Days)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0b1d29] border border-white/5 rounded-xl p-5">
            <h3 className="font-heading text-lg mb-4 text-white/90">Addresses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Sender</p>
                <p className="text-sm leading-relaxed text-white/80">
                  <strong className="text-white">Akash S.</strong><br/>
                  +91 9876543210<br/>
                  123 Logistics Way<br/>
                  Chennai, Tamil Nadu 600001<br/>
                  India
                </p>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Receiver</p>
                <p className="text-sm leading-relaxed text-white/80">
                  <strong className="text-white">John Doe</strong><br/>
                  +1 416-555-0198<br/>
                  456 Maple Street<br/>
                  Toronto, Ontario M5V 2N4<br/>
                  Canada
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0b1d29] border border-white/5 rounded-xl p-5">
            <h3 className="font-heading text-lg mb-4 text-white/90 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Customs Declaration
            </h3>
            <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
              <div>
                <p className="text-sm text-white/90">1x Cotton T-Shirts (Commercial Goods)</p>
                <p className="text-xs text-white/50">HS: 6109.10</p>
              </div>
              <p className="font-mono text-sm">$45.00</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 sticky top-24">
            <h3 className="font-heading text-lg mb-6">Payment Summary</h3>
            
            <div className="space-y-4 text-sm border-b border-white/10 pb-6 mb-6">
              <div className="flex justify-between">
                <span className="text-white/70">Base Shipping</span>
                <span className="font-mono text-white/90">$145.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Fuel Surcharge</span>
                <span className="font-mono text-white/90">$12.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Insurance</span>
                <span className="font-mono text-white/90">$5.00</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-white/90 font-medium">Total (USD)</span>
              <span className="font-mono text-3xl font-semibold text-primary">$162.50</span>
            </div>

            <label className="flex items-start gap-3 mb-6 cursor-pointer group">
              <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center bg-[#0b1d29] group-hover:border-primary shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-transparent group-hover:text-primary/50" />
              </div>
              <span className="text-sm text-white/60 leading-relaxed">
                I confirm the shipment details are accurate and agree to the <span className="text-primary hover:underline">Terms of Service</span>.
              </span>
            </label>

            <Button size="lg" onClick={onNext} className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20">
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

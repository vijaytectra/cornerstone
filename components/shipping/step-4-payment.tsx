"use client";

import { CreditCard, Lock, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Step4Payment({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="bg-[#142433] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center text-white/50 hover:text-white transition-colors mb-4 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Details
          </button>
          <h2 className="text-2xl font-heading mb-2">Review & Payment</h2>
          <p className="text-white/60">
            Verify your details and complete the booking.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-[#0b1d29] border border-white/5 rounded-xl p-6">
            <h3 className="font-heading text-lg mb-4 text-white/90">Shipment Summary</h3>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Route</p>
                  <p className="font-medium text-white/90">Chennai, IN → Toronto, CA</p>
                </div>
                <div className="text-right">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Service</p>
                  <p className="font-medium text-primary">DHL Express (2-3 Days)</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Base Shipping</span>
                  <span className="font-mono text-white/90">$145.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Fuel Surcharge</span>
                  <span className="font-mono text-white/90">$12.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Insurance</span>
                  <span className="font-mono text-white/90">$5.00</span>
                </div>
              </div>

              <div className="flex justify-between items-end pt-4 border-t border-white/10">
                <span className="text-white/90 font-medium">Total (USD)</span>
                <span className="font-mono text-3xl font-semibold text-primary">$162.50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg">Secure Checkout</h3>
              <p className="text-white/50 text-sm">256-bit encrypted payment</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Card Number</Label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input placeholder="0000 0000 0000 0000" className="pl-9 bg-[#0b1d29] border-white/10 text-white h-12 font-mono text-lg" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Expiry Date</Label>
                <Input placeholder="MM/YY" className="bg-[#0b1d29] border-white/10 text-white h-12 font-mono text-center" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">CVC</Label>
                <Input type="password" placeholder="***" className="bg-[#0b1d29] border-white/10 text-white h-12 font-mono text-center" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Name on Card</Label>
              <Input placeholder="Akash S." className="bg-[#0b1d29] border-white/10 text-white h-12" />
            </div>
          </div>

          <div className="pt-6">
            <Button size="lg" onClick={onNext} className="w-full h-14 text-lg font-semibold shadow-lg shadow-primary/20 group">
              Pay $162.50 <CheckCircle2 className="h-5 w-5 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

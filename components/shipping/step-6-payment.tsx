"use client";

import { CreditCard, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Step6Payment({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-xl mx-auto bg-[#142433] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-8 text-center">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-heading mb-2">Secure Payment</h2>
        <p className="text-white/60">
          Complete your booking. Total amount: <strong className="text-white">$162.50 USD</strong>
        </p>
      </div>

      <div className="space-y-6">
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

        <div className="pt-6 mt-6 border-t border-white/10">
          <Button size="lg" onClick={onNext} className="w-full h-14 text-lg font-semibold shadow-lg shadow-primary/20 group">
            Pay $162.50 <CheckCircle2 className="h-5 w-5 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Button>
          <p className="text-center text-white/30 text-xs mt-4 flex items-center justify-center gap-1">
            <Lock className="h-3 w-3" /> Payments are secure and encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { ArrowLeft, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Step3Details({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="bg-[#142433] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-white/50 hover:text-white transition-colors mb-4 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Services
        </button>
        <h2 className="text-2xl font-heading mb-2">Sender & Receiver Details</h2>
        <p className="text-white/60">
          Where is the package coming from, and where is it going?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Sender Details */}
        <div className="space-y-6 relative">
          <div className="flex items-center gap-2 pb-4 border-b border-white/10">
            <User className="h-5 w-5 text-primary" />
            <h3 className="font-heading text-lg">Sender (Origin)</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Full Name</Label>
              <Input placeholder="Akash S." className="bg-[#0b1d29] border-white/10 text-white h-11" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Phone</Label>
                <Input placeholder="+91" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Email</Label>
                <Input type="email" placeholder="hello@example.com" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Street Address</Label>
              <Input placeholder="123 Logistics Way" className="bg-[#0b1d29] border-white/10 text-white h-11" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">City</Label>
                <Input placeholder="Chennai" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">State/Province</Label>
                <Input placeholder="Tamil Nadu" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Postal Code</Label>
                <Input placeholder="600001" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Country</Label>
                <Input value="India" disabled className="bg-[#0b1d29]/50 border-white/5 text-white/50 h-11" />
              </div>
            </div>
          </div>
        </div>

        {/* Receiver Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-white/10">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="font-heading text-lg">Receiver (Destination)</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Full Name</Label>
              <Input placeholder="John Doe" className="bg-[#0b1d29] border-white/10 text-white h-11" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Phone</Label>
                <Input placeholder="+1" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Email</Label>
                <Input type="email" placeholder="john@example.com" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Street Address</Label>
              <Input placeholder="456 Maple Street" className="bg-[#0b1d29] border-white/10 text-white h-11" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">City</Label>
                <Input placeholder="Toronto" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">State/Province</Label>
                <Input placeholder="Ontario" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Postal Code</Label>
                <Input placeholder="M5V 2N4" className="bg-[#0b1d29] border-white/10 text-white h-11" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Country</Label>
                <Input value="Canada" disabled className="bg-[#0b1d29]/50 border-white/5 text-white/50 h-11" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 mt-8 border-t border-white/10 flex justify-end">
        <Button size="lg" onClick={onNext} className="w-full sm:w-auto px-12 h-12 text-base font-semibold">
          Continue to Customs
        </Button>
      </div>
    </div>
  );
}

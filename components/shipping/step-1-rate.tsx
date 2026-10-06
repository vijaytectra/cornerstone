"use client";

import { motion } from "motion/react";
import { MapPin, Box, Scale, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Step1Rate({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-[#142433] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-heading mb-2">Where are you shipping?</h2>
        <p className="text-white/60">Enter origin and destination to calculate rates.</p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label className="text-white/70 text-xs uppercase tracking-wider">From</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 z-10" />
              <Select defaultValue="india">
                <SelectTrigger className="pl-9 bg-[#0b1d29] border-white/10 text-white h-12">
                  <SelectValue placeholder="Select origin" />
                </SelectTrigger>
                <SelectContent className="dark bg-[#0b1d29] border-white/10 text-white">
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-3">
            <Label className="text-white/70 text-xs uppercase tracking-wider">To</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 z-10" />
              <Select defaultValue="canada">
                <SelectTrigger className="pl-9 bg-[#0b1d29] border-white/10 text-white h-12">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent className="dark bg-[#0b1d29] border-white/10 text-white">
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <h3 className="font-heading text-lg mb-6 flex items-center gap-2">
            <Box className="h-5 w-5 text-primary" /> Parcel Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Weight (kg)</Label>
              <div className="relative">
                <Scale className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input type="number" placeholder="0.0" className="pl-9 bg-[#0b1d29] border-white/10 text-white h-12" />
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Length (cm)</Label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input type="number" placeholder="0" className="pl-9 bg-[#0b1d29] border-white/10 text-white h-12" />
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Width (cm)</Label>
              <Input type="number" placeholder="0" className="bg-[#0b1d29] border-white/10 text-white h-12 text-center" />
            </div>
            <div className="space-y-3">
              <Label className="text-white/70 text-xs uppercase tracking-wider">Height (cm)</Label>
              <Input type="number" placeholder="0" className="bg-[#0b1d29] border-white/10 text-white h-12 text-center" />
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-end">
          <Button size="lg" onClick={onNext} className="w-full sm:w-auto px-12 h-12 text-base font-semibold">
            Get Rate
          </Button>
        </div>
      </div>
    </div>
  );
}

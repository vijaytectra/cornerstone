"use client";

import { ArrowLeft, Info, Plus, Trash2 } from "lucide-react";
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

export function Step4Customs({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="bg-[#142433] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-white/50 hover:text-white transition-colors mb-4 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Details
        </button>
        <h2 className="text-2xl font-heading mb-2">Customs Declaration</h2>
        <p className="text-white/60">
          Declare the contents of your shipment for international border clearance.
        </p>
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3 mb-8">
        <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-primary/90 leading-relaxed">
          <strong>Accurate customs information helps prevent clearance delays.</strong> Ensure your descriptions are specific (e.g., "Men's cotton t-shirts" instead of "Clothes") and the declared value matches the actual commercial value.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <Label className="text-white/70 text-xs uppercase tracking-wider">Shipment Purpose</Label>
          <Select defaultValue="commercial">
            <SelectTrigger className="bg-[#0b1d29] border-white/10 text-white h-12 w-full md:w-1/2">
              <SelectValue placeholder="Select purpose" />
            </SelectTrigger>
            <SelectContent className="dark bg-[#0b1d29] border-white/10 text-white">
              <SelectItem value="commercial">Commercial Goods</SelectItem>
              <SelectItem value="personal">Personal Effects</SelectItem>
              <SelectItem value="gift">Gift</SelectItem>
              <SelectItem value="sample">Sample</SelectItem>
              <SelectItem value="return">Return / Repair</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-heading text-lg">Declared Items</h3>
          </div>
          
          <div className="bg-[#0b1d29] border border-white/5 rounded-xl p-4 relative group">
            <button className="absolute top-4 right-4 text-white/30 hover:text-destructive transition-colors opacity-0 group-hover:opacity-100">
              <Trash2 className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Detailed Description</Label>
                <Input placeholder="e.g. Cotton T-Shirts" className="bg-[#142433] border-white/10 text-white h-10" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Quantity</Label>
                <Input type="number" placeholder="1" className="bg-[#142433] border-white/10 text-white h-10" />
              </div>
              <div className="md:col-span-3 space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">HS Code (Optional)</Label>
                <Input placeholder="6109.10" className="bg-[#142433] border-white/10 text-white h-10" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label className="text-white/70 text-xs uppercase tracking-wider">Value (USD)</Label>
                <Input type="number" placeholder="0.00" className="bg-[#142433] border-white/10 text-white h-10" />
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full border-dashed border-white/20 bg-transparent hover:bg-white/5 text-white/70 hover:text-white">
            <Plus className="h-4 w-4 mr-2" /> Add Another Item
          </Button>
        </div>

        <div className="flex justify-end p-4 bg-[#0b1d29] rounded-xl border border-white/5">
          <div className="text-right">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Total Declared Value</p>
            <p className="font-mono text-2xl font-semibold">$0.00 <span className="text-base text-white/50 font-normal">USD</span></p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <Button size="lg" onClick={onNext} className="w-full sm:w-auto px-12 h-12 text-base font-semibold">
            Review Shipment
          </Button>
        </div>
      </div>
    </div>
  );
}

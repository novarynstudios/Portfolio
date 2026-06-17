"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CarouselControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  label: string;
};

export function CarouselControls({ onPrev, onNext, prevDisabled, nextDisabled, label }: CarouselControlsProps) {
  return (
    <div className="flex items-center gap-2" aria-label={`${label} carousel controls`}>
      <Button variant="icon" type="button" onClick={onPrev} disabled={prevDisabled} aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </Button>
      <Button variant="icon" type="button" onClick={onNext} disabled={nextDisabled} aria-label="Next slide">
        <ChevronRight className="h-5 w-5" aria-hidden />
      </Button>
    </div>
  );
}

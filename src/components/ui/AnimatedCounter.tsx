"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  className = "",
  suffixClassName = "",
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <div ref={ref} className={className}>
      <span>{count}</span>
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </div>
  );
}

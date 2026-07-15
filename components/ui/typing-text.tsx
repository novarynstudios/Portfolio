"use client";

import { useEffect, useState } from "react";

export function TypingText({ strings }: { strings: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (strings.length === 0) return;

    if (subIndex === strings[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 65);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, strings]);

  useEffect(() => {
    if (strings.length === 0) return;
    setText(strings[index].substring(0, subIndex));
  }, [subIndex, index, strings]);

  return (
    <span className="text-[#06b6d4] font-bold border-r-[3px] border-[#06b6d4] pr-1 animate-pulse min-h-[1.5em] inline-block font-poppins">
      {text}
    </span>
  );
}

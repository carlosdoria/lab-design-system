import { ReactNode } from "react";
import { clsx } from "clsx";
import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxRadix.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckboxRadix.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-300" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  );
}

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center w-full h-12 gap-3 px-3 py-4 bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ ...props }: TextInputInputProps) {
  return (
    <input
      {...props}
      className="flex-1 text-xs text-gray-100 bg-transparent outline-none placeholder:text-gray-400"
    />
  );
}

export interface TextInputProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputProps) {
  return <Slot className="w-5 h-5 text-gray-400">{children}</Slot>;
}

TextInputRoot.displayName = "TextInput.Root";
TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};

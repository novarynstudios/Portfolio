import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-bright",
        secondary: "bg-zinc-200 text-zinc-950 hover:bg-white",
        ghost: "text-muted hover:bg-white/10 hover:text-white",
        icon: "h-11 w-11 rounded-full border border-white/20 bg-white/10 p-0 text-white hover:bg-white/10"
      }
    },
    defaultVariants: { variant: "primary" }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { href?: never };

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & { href: string };

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export function LinkButton({ className, variant, href, ...props }: LinkButtonProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    />
  );
}

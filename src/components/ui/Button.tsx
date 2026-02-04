import * as React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "../../lib/utils"

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost"
    size?: "sm" | "default" | "lg"
    loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", loading, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap border-2 uppercase font-bold tracking-tighter transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"

        // Hardcoded variants for now to avoid CVA dep
        const variants = {
            primary: "bg-accent text-accent-foreground border-transparent hover:scale-105 active:scale-95",
            outline: "border-border bg-transparent text-foreground hover:bg-foreground hover:text-black hover:scale-105 active:scale-95",
            ghost: "border-transparent text-foreground hover:text-accent hover:scale-105 active:scale-95"
        }

        const sizes = {
            default: "h-14 px-8 text-base",
            sm: "h-10 px-4 text-sm",
            lg: "h-20 px-12 text-xl"
        }

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                {...props}
            >
                {children}
            </motion.button>
        )
    }
)
Button.displayName = "Button"

export { Button }

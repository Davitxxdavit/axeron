import { cn } from "../../lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    fullWidth?: boolean
}

export function Section({ className, fullWidth, children, ...props }: SectionProps) {
    return (
        <section
            className={cn(
                "py-20 md:py-32 w-full",
                !fullWidth && "container mx-auto px-4 md:px-8 max-w-[95vw]",
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

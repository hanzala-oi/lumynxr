import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
  darkMode?: boolean
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  darkMode,
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>> & { darkMode?: boolean }) {
  const Component = as || "button"
  const defaultColor = color || (darkMode ? "white" : "black")

  return (
    <Component
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[51px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          darkMode ? "opacity-70" : "opacity-20"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          darkMode ? "opacity-70" : "opacity-20"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "relative z-10 text-center text-[16px] font-semibold tracking-wider overflow-hidden",
          "w-full h-full px-[24px] py-[14px] rounded-[51px] border-[1px] ",
          darkMode
            ? "border-[#1D1D1D] text-white bg-[linear-gradient(180deg,rgba(221,221,221,0.13)_0%,rgba(67,67,67,0.13)_100%)]"
            : "border-[#1D1D1D] text-black bg-[linear-gradient(180deg,rgba(255,255,255,0.70)_0%,rgba(245,245,245,0.70)_100%)]"
        )}
      >
        {children}
      </div>
    </Component>
  )
}
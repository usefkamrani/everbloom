"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { cn } from "@/lib/utils"

/* =========================
   Context
========================= */

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

/* =========================
   CardContainer
========================= */

export interface CardContainerProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: CardContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()

    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25

    containerRef.current.style.transform = `
      rotateY(${x}deg)
      rotateX(${-y}deg)
    `
  }

  const handleMouseEnter = () => {
    setIsMouseEntered(true)
  }

  const handleMouseLeave = () => {
    setIsMouseEntered(false)
    if (!containerRef.current) return
    containerRef.current.style.transform =
      "rotateY(0deg) rotateX(0deg)"
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative transition-transform duration-300 ease-out",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

/* =========================
   CardBody
========================= */

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div
      className={cn(
        "h-full w-full [transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  )
}

/* =========================
   CardItem
========================= */

export type CardItemProps = {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number
  translateY?: number
  translateZ?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
} & React.HTMLAttributes<HTMLElement>

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const ref = useRef<HTMLElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    if (!ref.current) return

    if (isMouseEntered) {
      ref.current.style.transform = `
        translate3d(${translateX}px, ${translateY}px, ${translateZ}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `
    } else {
      ref.current.style.transform =
        "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
    }
  }, [isMouseEntered])

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-transform duration-300 ease-out will-change-transform",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* =========================
   Hook
========================= */

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (!context) {
    throw new Error("useMouseEnter must be used within CardContainer")
  }
  return context
}

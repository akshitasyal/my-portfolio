import React, { useEffect, useRef } from 'react'

export default function cursor() {
const ref = useRef<HTMLDivElement | null>(null)
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const mouse = useRef({ x: pos.current.x, y: pos.current.y })
  const req = useRef<number | null>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const touch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]){
        mouse.current.x = e.touches[0].clientX
        mouse.current.y = e.touches[0].clientY
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('touchstart', touch)
    window.addEventListener('touchmove', touch)

    const lerp = (a:number, b:number, n:number) => a + (b - a) * n

    const loop = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.18)
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.18)

      if (ref.current){
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px,0) translate(-50%, -50%)`
      }

      req.current = requestAnimationFrame(loop)
    }

    req.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchstart', touch)
      window.removeEventListener('touchmove', touch)
      if (req.current) cancelAnimationFrame(req.current)
    }
  }, [])

  // hover state wiring for interactive elements
  useEffect(() => {
    const addHover = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')

    const selector = 'a, button, input, textarea, select, .interactive'
    const interactive = Array.from(document.querySelectorAll(selector)) as Element[]
    interactive.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <div ref={ref} className="custom-cursor" aria-hidden>
      <div className="ring"><div className="dot" /></div>
    </div>
  )
}
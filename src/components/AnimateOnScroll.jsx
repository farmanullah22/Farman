import React, { useEffect, useRef, useState } from 'react'

export default function AnimateOnScroll({ children, className = '', rootMargin = '-10% 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={`${className} ${inView ? 'in-view' : ''}`}>
      {children}
    </div>
  )
}

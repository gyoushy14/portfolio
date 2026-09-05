import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 160) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    let rafId = null

    const update = () => {
      const scrollPos = window.scrollY + offset
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      const lastEl = document.getElementById(ids[ids.length - 1] ?? '')
      if (
        lastEl &&
        window.innerHeight + Math.ceil(window.scrollY) >=
          document.documentElement.scrollHeight - 4
      ) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        update()
        rafId = null
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
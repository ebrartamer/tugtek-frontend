'use client'
import { useState, useEffect } from 'react'

const useScreen = () => {
  const [screenSize, setScreenSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    // check if window is defined
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return screenSize
}

export default useScreen

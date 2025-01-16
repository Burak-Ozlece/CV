'use client'

import React, { useState, useEffect } from 'react'

export function TypingEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Yazma işlemi bittiğinde 500ms sonra imleci gizle
        setTimeout(() => {
          setShowCursor(false)
        }, 700)
      }
    }, 50)

    return () => {
      clearInterval(typingInterval)
    }
  }, [text])

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  )
}


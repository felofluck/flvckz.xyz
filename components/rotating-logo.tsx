"use client"

import { useEffect, useRef } from "react"

export function RotatingLogo({ isDarkMode }: { isDarkMode: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = 120
    canvas.width = size
    canvas.height = size

    let rotation = 0

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 28

      // Draw rotating text
      const text = "0xFlvckz Dev "
      const angleStep = (Math.PI * 2) / text.length

      ctx.fillStyle = isDarkMode ? "white" : "black"
      ctx.font = "14px monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      for (let i = 0; i < text.length; i++) {
        const angle = rotation + i * angleStep
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(angle + Math.PI / 2)
        ctx.fillText(text[i], 0, 0)
        ctx.restore()
      }

      rotation += 0.01
      requestAnimationFrame(animate)
    }

    animate()
  }, [isDarkMode])

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <canvas ref={canvasRef} className="w-[120px] h-[120px]" />
    </div>
  )
}

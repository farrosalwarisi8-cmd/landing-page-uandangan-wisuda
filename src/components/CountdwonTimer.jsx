import { useState, useEffect } from 'react'

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: 'Hari' },
    { value: timeLeft.hours, label: 'Jam' },
    { value: timeLeft.minutes, label: 'Menit' },
    { value: timeLeft.seconds, label: 'Detik' },
  ]

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-5">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-gold/20 rounded-lg bg-dark-card/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent"></div>
              <span className="font-cormorant text-2xl md:text-3xl text-gold relative z-10">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <p className="font-lora text-[10px] md:text-xs text-cream/40 mt-2 tracking-wider">
              {unit.label}
            </p>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-gold/30 text-lg md:text-xl font-light mb-5">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
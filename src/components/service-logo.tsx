interface ServiceLogoProps {
  className?: string
}

export function ServiceLogo({ className = '' }: ServiceLogoProps) {
  return (
    <div className={`uppercase text-white text-xl ${className}`}>
      <span className="font-thin">I</span>
      <span className="font-thin italic">Am</span>
      <span className="font-semibold italic">A</span>
      <span className="font-semibold">nxi</span>
      <span className="font-semibold italic">ous</span>
    </div>
  )
}

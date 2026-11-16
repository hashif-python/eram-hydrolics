interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center rounded-lg bg-white px-3 py-1.5 shadow-md shadow-black/20 ${className}`}>
      <img src="/styles/v1/logo.png" alt="ERAM Hydraulics" className="h-8 w-auto" />
    </span>
  );
}

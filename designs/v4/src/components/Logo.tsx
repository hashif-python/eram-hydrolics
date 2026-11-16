import { Link } from 'react-router-dom';
interface LogoProps { tone?: 'light' | 'dark' }
export default function Logo({ tone = 'dark' }: LogoProps) {
  return <Link to="/" className="inline-flex items-center rounded-sm bg-white px-2.5 py-1.5 shadow-sm" aria-label="ERAM Hydraulics home">
    <img src="/styles/v4/eram-official-logo.png" width="213" height="71" alt="ERAM Hydraulics official logo" className="block h-12 w-auto max-w-[180px] object-contain" />
  </Link>;
}

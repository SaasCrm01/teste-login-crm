'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  // Check if the current path is the home page
  const isHome = pathname === '/';

  if (isHome) return null;

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container-fluid  align-items-start">
        <Link href="/" className="navbar-brand">
          MyApp
        </Link>
        <ul className="navbar-nav flex-column w-100">
          <li className="nav-item">
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link href="/register-client" className="nav-link">Register Client</Link>
          </li>
          <li className="nav-item">
            <Link href="/register-seller" className="nav-link">Register Seller</Link>
          </li>
          <li className="nav-item">
            <Link href="/assign-clients" className="nav-link">Assign Clients</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

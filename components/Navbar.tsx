"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/">
            <img src="/images/Logo1.png" alt="Seprop Logo" />
          </Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer' }}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
            <li><Link href="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link></li>
            <li><Link href="/#contacto" onClick={() => setIsOpen(false)} className="btn-primary" style={{ padding: '8px 20px', color: '#fff' }}>Cotizar</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
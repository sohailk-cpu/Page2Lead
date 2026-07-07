import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/hooks/useTheme'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'


const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const WA_LINK = 'https://wa.me/917597256642?text=Hi%20Sohail,%20I%20want%20to%20book%20a%20strategy%20call'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { toggle, isDark } = useTheme()
  const scrolled = useScrolled(30)
  const { pathname } = useLocation()

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="container-wide flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link
            to="/"
            className="flex items-center gap-2.5 focus-ring rounded-lg"
          >
            <img
              src={scrolled ? "/assets/favicon-light.png" : "/assets/favicon-dark.png"}
              alt="Page2Lead"
              className="w-10 h-10"
            />
          
           <span
              className={cn(
                "font-display font-bold text-2xl tracking-tight transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}
            >
              Page
              <span className="text-cyan-400">2</span>
              Lead
            </span>
          </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 focus-ring',
                pathname === link.href
                  ? 'text-brand-500 bg-brand-500/8'
                  : scrolled
                    ? 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    : 'text-white/60 hover:text-white hover:bg-white/10',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={cn(
              'w-9 h-9 flex items-center justify-center rounded-lg transition-colors focus-ring',
              scrolled
                ? 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                : 'text-white/60 hover:text-white hover:bg-white/10',
            )}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/contact">
            <Button
              size="md"
              variant="outline"
              className={!scrolled ? 'border-white/25 text-white hover:bg-white/10 hover:text-white' : undefined}
            >
              Contact
            </Button>
          </Link>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="md">Book Free Call</Button>
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={cn(
              'w-9 h-9 flex items-center justify-center rounded-lg transition-colors',
              scrolled || menuOpen
                ? 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                : 'text-white/60 hover:text-white hover:bg-white/10',
            )}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              'w-9 h-9 flex items-center justify-center rounded-lg transition-colors',
              scrolled || menuOpen
                ? 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                : 'text-white/60 hover:text-white hover:bg-white/10',
            )}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
                    pathname === link.href
                      ? 'text-brand-500 bg-brand-500/8'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 flex flex-col gap-2">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full" variant="outline">Contact</Button>
                </Link>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full">Book Free Call</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

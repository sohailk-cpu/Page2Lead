import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-500/8 blur-[120px]" />

      <div className="container-tight relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-bold text-brand-500/20 mb-4 tracking-tighter">404</p>
          <h1 className="text-display text-3xl lg:text-4xl text-white mb-4">
            Page not found
          </h1>
          <p className="text-white/50 mb-8 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="w-4 h-4" /> Go Home
              </Button>
            </Link>
            <button onClick={() => window.history.back()}>
              <Button size="lg" variant="ghost" className="text-white/60 hover:text-white gap-2">
                <ArrowLeft className="w-4 h-4" /> Go Back
              </Button>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

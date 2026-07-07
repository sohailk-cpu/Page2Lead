import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Calendar } from 'lucide-react'
import { blogs } from '@/data/blogs'
import { CTASection } from '@/components/sections/CTASection'
import { useState } from 'react'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(blogs.map((b) => b.category)))
  const filteredBlogs = selectedCategory ? blogs.filter((b) => b.category === selectedCategory) : blogs

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />

        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-eyebrow mb-4">Automation Insights</p>
            <h1 className="text-display text-4xl lg:text-6xl text-white mb-5 text-balance">
              The Blog
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Insights on AI automation, lead generation, and how to save your team hundreds of hours every month.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section bg-background">
        <div className="container-wide">
          {/* Category filter */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-brand-500 text-white'
                  : 'border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-white'
                    : 'border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={`/blog/${blog.slug}`}>
                    <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-brand-500/30 hover:shadow-card-hover transition-all cursor-pointer group flex flex-col">
                      {/* Meta */}
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-500 uppercase tracking-wide">
                          {blog.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {blog.readTime} min
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-brand-500 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-2 flex-1">
                        {blog.excerpt}
                      </p>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border">
                        <Calendar className="w-3 h-3" />
                        {new Date(blog.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blogs in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}

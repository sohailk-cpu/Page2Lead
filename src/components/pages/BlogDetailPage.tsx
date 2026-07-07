import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogs } from '@/data/blogs'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog not found</h1>
          <p className="text-muted-foreground mb-6">This article doesn't exist or has been moved.</p>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

// Add dynamic meta tags for each blog
useEffect(() => {
  document.title = `${blog.title} - Page2Lead Blog`
  
  // Meta description
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', blog.excerpt)
  
  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', blog.title)
}, [blog])

  // Parse markdown content with proper image handling
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, i) => {
      // Handle images: ![alt](url)
      const imageRegex = /!\[([^\]]*)\]\(([^\)]+)\)/
      if (imageRegex.test(paragraph)) {
        const match = paragraph.match(imageRegex)
        if (match) {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="my-8"
            >
              <img
                src={match[2]}
                alt={match[1]}
                className="w-full rounded-2xl shadow-lg border border-brand-500/20 object-cover max-h-96"
              />
              {match[1] && (
                <p className="text-sm text-muted-foreground text-center mt-3 italic">{match[1]}</p>
              )}
            </motion.div>
          )
        }
      }

      // Handle headers
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={i} className="text-4xl font-bold text-white mt-12 mb-6">
            {paragraph.replace('# ', '')}
          </h1>
        )
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={i} className="text-3xl font-bold text-white mt-10 mb-5">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }

      // Handle blockquotes
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote
            key={i}
            className="border-l-4 border-brand-500 pl-6 py-3 my-6 bg-brand-500/5 italic text-foreground/80 rounded-r-lg"
          >
            {paragraph.replace('> ', '')}
          </blockquote>
        )
      }

      // Handle lists
      if (paragraph.startsWith('- ') || paragraph.startsWith('✅') || paragraph.startsWith('❌')) {
        return (
          <ul key={i} className="list-disc list-inside space-y-3 my-6 text-foreground/80">
            {paragraph.split('\n').map((item, j) => (
              <li key={j} className="text-foreground/80 leading-relaxed">
                {item.replace(/^[✅❌-]\s*/, '')}
              </li>
            ))}
          </ul>
        )
      }

      // Handle numbered lists
      if (paragraph.match(/^\d+\./)) {
        return (
          <ol key={i} className="list-decimal list-inside space-y-3 my-6 text-foreground/80">
            {paragraph.split('\n').map((item, j) => (
              <li key={j} className="text-foreground/80 leading-relaxed">
                {item.replace(/^\d+\.\s*/, '')}
              </li>
            ))}
          </ol>
        )
      }

      // Handle tables
      if (paragraph.includes('|')) {
        const rows = paragraph.split('\n').filter((row) => row.includes('|'))
        return (
          <div key={i} className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <tbody>
                {rows.map((row, j) => {
                  const cells = row.split('|').filter((c) => c.trim())
                  // Skip separator row
                  if (cells.some((c) => c.trim().match(/^-+$/))) return null
                  return (
                    <tr
                      key={j}
                      className={`border-b ${
                        j === 0
                          ? 'border-brand-500 bg-brand-500/10'
                          : 'border-white/10 hover:bg-white/5'
                      }`}
                    >
                      {cells.map((cell, k) => (
                        <td
                          key={k}
                          className={`px-4 py-3 text-sm ${
                            j === 0
                              ? 'font-bold text-brand-300'
                              : 'text-foreground/70'
                          }`}
                        >
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      }

      // Handle code blocks
      if (paragraph.startsWith('```')) {
        const code = paragraph.replace(/```\w*\n?|\n?```/g, '').trim()
        return (
          <pre
            key={i}
            className="bg-surface-800 border border-brand-500/20 p-6 rounded-xl overflow-x-auto my-8"
          >
            <code className="text-sm text-brand-300 font-mono whitespace-pre-wrap break-words">
              {code}
            </code>
          </pre>
        )
      }

      // Handle HTML img tags (fallback)
      if (paragraph.includes('<img')) {
        const htmlImageRegex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/
        const htmlMatch = paragraph.match(htmlImageRegex)
        if (htmlMatch) {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="my-8"
            >
              <img
                src={htmlMatch[1]}
                alt={htmlMatch[2]}
                className="w-full rounded-2xl shadow-lg border border-brand-500/20 object-cover max-h-96"
              />
              {htmlMatch[2] && (
                <p className="text-sm text-muted-foreground text-center mt-3 italic">{htmlMatch[2]}</p>
              )}
            </motion.div>
          )
        }
      }

      // Regular paragraph
      if (paragraph.trim()) {
        return (
          <p key={i} className="text-foreground/80 leading-relaxed text-lg">
            {paragraph}
          </p>
        )
      }

      return null
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-brand-500/10 blur-[100px]" />

        <div className="container-wide relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 uppercase tracking-wide">
                {blog.category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white mb-6 text-balance leading-tight font-bold">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {blog.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime} min read
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content - Full Width with Max Width Container */}
      <section className="section bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-none"
          >
            <div className="text-foreground/80 leading-relaxed space-y-6">
              {renderContent(blog.content)}
            </div>
          </motion.article>

          {/* CTA at end */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-2xl border border-brand-500/20 bg-brand-500/5 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to automate your business?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Book a free 30-minute strategy call and let's discuss what AI can do for you.
            </p>
            <Link to="/contact">
              <Button className="px-8">Get Started</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related blogs */}
      <section className="section bg-surface-50 dark:bg-surface-900/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">More from the blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link key={relatedBlog.id} to={`/blog/${relatedBlog.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-2xl border border-border bg-card hover:border-brand-500/30 hover:shadow-card-hover transition-all h-full cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-500">
                        {relatedBlog.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{relatedBlog.readTime} min</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-brand-500 transition-colors line-clamp-2 text-lg">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedBlog.excerpt}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(relatedBlog.date).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
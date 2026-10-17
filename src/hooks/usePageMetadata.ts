import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface PageMetadata {
  title: string
  description: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: string
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function usePageMetadata(metadata: PageMetadata) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = metadata.title
    setMeta('meta[name="description"]', 'name', 'description', metadata.description)
    setMeta('meta[name="robots"]', 'name', 'robots', metadata.robots ?? 'index, follow')

    const canonicalUrl = metadata.canonical ?? `https://page2lead.in${pathname === '/' ? '/' : pathname}`
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:title"]', 'property', 'og:title', metadata.ogTitle ?? metadata.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', metadata.ogDescription ?? metadata.description)
    setMeta('meta[property="og:image"]', 'property', 'og:image', metadata.ogImage ?? 'https://page2lead.in/assets/page2lead-og.png')

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.twitterTitle ?? metadata.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.twitterDescription ?? metadata.description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', metadata.twitterImage ?? metadata.ogImage ?? 'https://page2lead.in/assets/page2lead-og.png')
  }, [metadata, pathname])
}

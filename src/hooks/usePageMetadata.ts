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
}

export function usePageMetadata(metadata: PageMetadata) {
  const { pathname } = useLocation()

  useEffect(() => {
    // Update title
    document.title = metadata.title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description)
    }

    // Update canonical
    if (metadata.canonical) {
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', metadata.canonical)
      }
    }

    // Update OG tags
    if (metadata.ogTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute('content', metadata.ogTitle)
    }

    if (metadata.ogDescription) {
      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', metadata.ogDescription)
    }

    if (metadata.ogImage) {
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) ogImage.setAttribute('content', metadata.ogImage)
    }

    // Update Twitter tags
    if (metadata.twitterTitle) {
      const twitterTitle = document.querySelector('meta[property="twitter:title"]')
      if (twitterTitle) twitterTitle.setAttribute('content', metadata.twitterTitle)
    }

    if (metadata.twitterDescription) {
      const twitterDesc = document.querySelector('meta[property="twitter:description"]')
      if (twitterDesc) twitterDesc.setAttribute('content', metadata.twitterDescription)
    }

    if (metadata.twitterImage) {
      const twitterImage = document.querySelector('meta[property="twitter:image"]')
      if (twitterImage) twitterImage.setAttribute('content', metadata.twitterImage)
    }

    // Update og:url and twitter:url to match current page
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://page2lead.in${pathname}`)
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]')
    if (twitterUrl) {
      twitterUrl.setAttribute('content', `https://page2lead.in${pathname}`)
    }
  }, [metadata, pathname])
}

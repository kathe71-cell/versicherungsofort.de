import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({ 
  title, 
  description, 
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://versicherungsofort.de/og-image.svg",
  structuredData 
}) {
  const location = useLocation();
  const fullUrl = `https://versicherungsofort.de${canonical || location.pathname}`;

  useEffect(() => {
    // Set title
    if (title) {
      document.title = title;
    }

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Set canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = fullUrl;
      document.head.appendChild(link);
    }

    // Set robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index, follow, max-snippet:-1, max-image-preview:large';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'versicherungsofort.de' },
      { property: 'og:locale', content: 'de_DE' }
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('property', property);
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('name', name);
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    });

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        const newScript = document.createElement('script');
        newScript.type = 'application/ld+json';
        newScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(newScript);
      }
    }
  }, [title, description, keywords, fullUrl, ogType, ogImage, structuredData]);

  return null;
}
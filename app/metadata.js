// Structured Data (JSON-LD) for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Test Hubble",
  "url": "https://testhubble.com",
  "logo": "https://testhubble.com/logo.png",
  "description": "Managed test automation services for web and mobile applications. SOC 2 certified, HIPAA ready. Trusted by finance, healthcare, and SaaS companies.",
  "foundingDate": "2024",
  "sameAs": [
    // Add social media links when available
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@testhubble.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Test Hubble",
  "url": "https://testhubble.com",
  "description": "Managed test automation services for web and mobile applications",
  "publisher": {
    "@type": "Organization",
    "name": "Test Hubble"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://testhubble.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Test Automation Services",
  "provider": {
    "@type": "Organization",
    "name": "Test Hubble"
  },
  "description": "Managed test automation services for web and mobile applications. We provide comprehensive test automation using Playwright, Cypress, Selenium, and Appium.",
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Test Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Testing",
          "description": "End-to-end testing for web applications across all major browsers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Application Testing",
          "description": "Native and hybrid mobile app testing for iOS and Android"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CI/CD Integration",
          "description": "Seamless integration with your existing CI/CD pipeline"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Test Maintenance",
          "description": "Ongoing maintenance and updates for your test suite"
        }
      }
    ]
  }
}

export const breadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export const faqSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}


'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { breadcrumbSchema } from '../metadata'

const blogPosts = [
  {
    slug: 'complete-guide-test-automation-2024',
    title: 'Complete Guide to Test Automation in 2024',
    excerpt: 'Everything you need to know about test automation: from basics to advanced strategies, tool selection, and ROI calculation.',
    category: 'Guide',
    readTime: '15 min read',
    date: '2024-01-15',
    featured: true
  },
  {
    slug: 'playwright-vs-cypress-comparison',
    title: 'Playwright vs Cypress: Complete Comparison 2024',
    excerpt: 'Detailed comparison of Playwright and Cypress: features, performance, use cases, and which tool to choose for your project.',
    category: 'Comparison',
    readTime: '12 min read',
    date: '2024-01-10',
    featured: true
  },
  {
    slug: 'selenium-best-practices-2024',
    title: 'Selenium Best Practices for Modern Web Applications',
    excerpt: 'Learn how to write maintainable, reliable Selenium tests with proper wait strategies, page object models, and test data management.',
    category: 'Best Practices',
    readTime: '10 min read',
    date: '2024-01-08',
    featured: false
  },
  {
    slug: 'mobile-test-automation-appium-guide',
    title: 'Mobile Test Automation with Appium: A Complete Guide',
    excerpt: 'Master mobile app testing with Appium. Learn how to automate iOS and Android apps, handle device fragmentation, and scale your mobile testing.',
    category: 'Mobile Testing',
    readTime: '14 min read',
    date: '2024-01-05',
    featured: false
  },
  {
    slug: 'ci-cd-test-integration-strategies',
    title: 'Integrating Test Automation into CI/CD Pipelines',
    excerpt: 'Discover strategies for seamlessly integrating automated tests into your CI/CD workflow, reducing build times, and improving deployment confidence.',
    category: 'CI/CD',
    readTime: '11 min read',
    date: '2024-01-03',
    featured: false
  },
  {
    slug: 'reducing-test-flakiness-techniques',
    title: 'How to Reduce Test Flakiness: Proven Techniques',
    excerpt: 'Explore practical techniques to eliminate flaky tests, improve test reliability, and build confidence in your test automation suite.',
    category: 'Quality',
    readTime: '9 min read',
    date: '2024-01-01',
    featured: false
  }
]

export default function Blog() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Blog', url: 'https://testhubble.com/blog' }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <ScrollProgress />
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <div className="page-hero-content">
              <h1>Blog & Resources</h1>
              <p>Expert insights, guides, and best practices for test automation and QA</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <RevealOnScroll key={post.slug} delay={index * 0.1}>
                <motion.article
                  className={`blog-card ${post.featured ? 'featured' : ''}`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="blog-card-header">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <Link href={`/blog/${post.slug}`} className="blog-read-more">
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/animations/ScrollProgress'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { breadcrumbSchema } from '../../metadata'

const blogPosts = {
  'complete-guide-test-automation-2024': {
    title: 'Complete Guide to Test Automation in 2024',
    excerpt: 'Everything you need to know about test automation: from basics to advanced strategies, tool selection, and ROI calculation.',
    category: 'Guide',
    readTime: '15 min read',
    date: '2024-01-15',
    author: 'Test Hubble Team',
    content: `
      <h2>Introduction to Test Automation</h2>
      <p>Test automation has become essential for modern software development teams. In this comprehensive guide, we'll cover everything you need to know about test automation in 2024.</p>
      
      <h2>What is Test Automation?</h2>
      <p>Test automation is the practice of using software tools to execute tests automatically, compare actual outcomes with expected results, and report on the success or failure of these tests.</p>
      
      <h2>Why Test Automation Matters</h2>
      <p>Test automation offers numerous benefits including faster feedback, increased test coverage, reduced costs, and improved reliability. Teams that implement test automation effectively can reduce QA time by 60-80% while improving test reliability to 99%+.</p>
      
      <h2>Getting Started with Test Automation</h2>
      <p>Starting with test automation requires careful planning. Begin by identifying your critical user flows, selecting the right tools, and building a sustainable test automation strategy.</p>
      
      <h2>Tool Selection</h2>
      <p>Choosing the right test automation tool depends on your tech stack, team expertise, and specific requirements. Popular tools include Playwright, Cypress, Selenium, and Appium.</p>
      
      <h2>Best Practices</h2>
      <p>Follow these best practices for successful test automation:</p>
      <ul>
        <li>Start with critical user flows</li>
        <li>Maintain test independence</li>
        <li>Use proper wait strategies</li>
        <li>Keep tests maintainable</li>
        <li>Integrate with CI/CD</li>
      </ul>
      
      <h2>Calculating ROI</h2>
      <p>Test automation ROI can be calculated by comparing the cost of manual testing versus automated testing, including time savings, reduced bug escape rates, and faster release cycles.</p>
      
      <h2>Conclusion</h2>
      <p>Test automation is no longer optional for modern development teams. By following best practices and choosing the right tools, you can significantly improve your QA process and ship faster with confidence.</p>
    `
  },
  'playwright-vs-cypress-comparison': {
    title: 'Playwright vs Cypress: Complete Comparison 2024',
    excerpt: 'Detailed comparison of Playwright and Cypress: features, performance, use cases, and which tool to choose for your project.',
    category: 'Comparison',
    readTime: '12 min read',
    date: '2024-01-10',
    author: 'Test Hubble Team',
    content: `
      <h2>Introduction</h2>
      <p>Playwright and Cypress are two of the most popular test automation tools. This comprehensive comparison will help you choose the right tool for your project.</p>
      
      <h2>Overview</h2>
      <p><strong>Playwright</strong> is a modern, cross-browser testing framework developed by Microsoft. <strong>Cypress</strong> is a developer-friendly testing framework with excellent debugging capabilities.</p>
      
      <h2>Feature Comparison</h2>
      <p>Both tools offer excellent features, but with different strengths:</p>
      <ul>
        <li><strong>Browser Support:</strong> Playwright supports more browsers natively</li>
        <li><strong>API Testing:</strong> Playwright has built-in API testing</li>
        <li><strong>Debugging:</strong> Cypress has superior debugging tools</li>
        <li><strong>Learning Curve:</strong> Cypress is easier for beginners</li>
      </ul>
      
      <h2>Performance</h2>
      <p>Playwright generally offers better performance for parallel execution and cross-browser testing, while Cypress excels in developer experience and debugging.</p>
      
      <h2>Use Cases</h2>
      <p><strong>Choose Playwright if:</strong> You need cross-browser testing, API testing, or maximum performance.</p>
      <p><strong>Choose Cypress if:</strong> You prioritize developer experience, need excellent debugging, or are building a new test suite.</p>
      
      <h2>Conclusion</h2>
      <p>Both tools are excellent choices. Your decision should be based on your specific needs, team expertise, and project requirements.</p>
    `
  }
}

export default function BlogPost({ params }) {
  const router = useRouter()
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="btn btn-primary-modern">Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://testhubble.com' },
    { name: 'Blog', url: 'https://testhubble.com/blog' },
    { name: post.title, url: `https://testhubble.com/blog/${params.slug}` }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <ScrollProgress />
      <Navbar />
      <article className="blog-post-page">
        <div className="container-medium">
          <RevealOnScroll>
            <div className="blog-post-header">
              <Link href="/blog" className="blog-back-link">← Back to Blog</Link>
              <div className="blog-post-meta">
                <span className="blog-post-category">{post.category}</span>
                <span className="blog-post-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="blog-post-read-time">{post.readTime}</span>
              </div>
              <h1 className="blog-post-title">{post.title}</h1>
              <p className="blog-post-excerpt">{post.excerpt}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="blog-post-cta">
              <h2>Ready to automate your testing?</h2>
              <p>Let's discuss how Test Hubble can help your team achieve reliable test automation.</p>
              <div className="blog-post-cta-buttons">
                <button
                  onClick={() => {
                    const event = new CustomEvent('openDemoModal')
                    window.dispatchEvent(event)
                  }}
                  className="btn btn-primary-modern"
                >
                  Schedule a Demo
                </button>
                <Link href="/contact" className="btn btn-secondary-modern">
                  Contact Us
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </article>
      <Footer />
    </>
  )
}


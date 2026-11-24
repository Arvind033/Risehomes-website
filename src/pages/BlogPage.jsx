import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArticleMeta, BlogConsultation, JournalPhoto } from '../components/blog/BlogShared.jsx'
import Button from '../components/common/Button.jsx'
import Container from '../components/common/Container.jsx'
import ReferencePhoto from '../components/common/ReferencePhoto.jsx'
import { blogArticles, blogCategories, blogContent } from '../data/blog.js'
import { business } from '../data/business.js'
import { referencePhotos } from '../data/home.js'
import '../styles/blog.css'

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filterButtonRef = useRef(null)
  const articles = blogArticles.filter((article) => activeCategory === 'All' || article.category === activeCategory)
  const featured = blogArticles.find((article) => article.featured)
  const showFeatured = activeCategory === 'All' || activeCategory === featured.category

  useLayoutEffect(() => {
    filterButtonRef.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' })
  }, [activeCategory])

  useEffect(() => {
    document.title = `The ${business.name} Journal | Construction & Interiors Guides`
    document.querySelector('meta[name="description"]')?.setAttribute('content', blogContent.description)
  }, [])

  return (
    <div className="journal-page">
      <section className="journal-hero" aria-labelledby="journal-heading">
        <ReferencePhoto image={referencePhotos.details} className="journal-hero__image" loading="eager" fetchPriority="high" />
        <Container className="journal-hero__inner">
          <div className="journal-hero__copy">
            <p className="journal-eyebrow">{blogContent.eyebrow}</p>
            <h1 id="journal-heading" tabIndex={-1}>{blogContent.title}</h1>
            <p className="journal-description">{blogContent.description}</p>
          </div>
          <p className="journal-hero__reference">Design reference. Not a {business.name} project.</p>
        </Container>
      </section>

      {showFeatured && (
        <section className="journal-featured journal-section" aria-labelledby="featured-article-heading">
          <Container className="journal-featured__layout">
            <JournalPhoto image={featured.image} sizes="(min-width: 83rem) 43rem, (min-width: 64rem) 55vw, 100vw" />
            <div className="journal-featured__copy">
              <p className="journal-eyebrow journal-featured__label">Featured article</p>
              <ArticleMeta article={featured} />
              <h2 id="featured-article-heading">{featured.title}</h2>
              <p className="journal-description">{featured.summary}</p>
              <Button to={`/blog/${featured.slug}`} variant="text" className="journal-read-link" aria-labelledby="featured-read-label featured-article-heading">
                <span id="featured-read-label">Read the article</span> <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
            </div>
          </Container>
        </section>
      )}

      <section className="journal-section journal-collection" aria-labelledby="journal-collection-heading">
        <Container>
          <div className="journal-collection__header">
            <div>
              <p className="journal-eyebrow">Considered advice, everyday decisions</p>
              <h2 id="journal-collection-heading">From the journal.</h2>
            </div>
            <div className="journal-filters" role="group" aria-label="Filter articles by category">
              {blogCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  aria-pressed={activeCategory === category}
                  aria-controls="journal-articles"
                  onClick={(event) => {
                    filterButtonRef.current = event.currentTarget
                    setActiveCategory(category)
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <p className="journal-results" role="status" aria-live="polite" aria-atomic="true">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'}{activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
          <ul id="journal-articles" className="journal-grid" role="list">
            {articles.map((article) => (
              <li key={article.slug}>
                <article className="journal-card" aria-labelledby={`card-${article.slug}`}>
                  <Link to={`/blog/${article.slug}`} className="journal-card__link" aria-labelledby={`card-${article.slug}`}>
                    <JournalPhoto image={article.image} sizes="(min-width: 83rem) 24.5rem, (min-width: 64rem) 31vw, (min-width: 48rem) 46vw, 100vw" />
                    <ArticleMeta article={article} />
                    <h3 id={`card-${article.slug}`}>{article.title}</h3>
                    <p className="journal-description">{article.summary}</p>
                    <span className="journal-card__read">Read article <ArrowUpRight size={18} aria-hidden="true" /></span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <BlogConsultation />
    </div>
  )
}

export default BlogPage
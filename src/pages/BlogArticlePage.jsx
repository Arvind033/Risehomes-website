import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ArticleMeta, BlogConsultation, JournalPhoto } from '../components/blog/BlogShared.jsx'
import Button from '../components/common/Button.jsx'
import Container from '../components/common/Container.jsx'
import { blogArticles } from '../data/blog.js'
import { business } from '../data/business.js'
import '../styles/blog.css'

function BlogArticlePage() {
  const { slug } = useParams()
  const article = blogArticles.find((entry) => entry.slug === slug)

  useEffect(() => {
    document.title = `${article ? article.title : 'Article not found'} | ${business.name}`
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      article ? article.summary : `This journal article could not be found. Explore construction and interiors guidance in the ${business.name} journal.`,
    )
  }, [article])

  if (!article) {
    return (
      <Container className="journal-page journal-not-found">
        <p className="journal-eyebrow">The {business.name} Journal</p>
        <h1 tabIndex={-1}>Article not found.</h1>
        <p className="journal-description">This article is not available at this address. Explore the journal for guidance on construction, interiors and planning.</p>
        <Button to="/blog"><ArrowLeft size={18} aria-hidden="true" /> Back to Blog</Button>
      </Container>
    )
  }

  return (
    <div className="journal-page journal-reading-page">
      <article className="journal-article" aria-labelledby="article-heading">
        <Container>
          <header className="journal-article__header">
            <Link to="/blog" className="journal-back"><ArrowLeft size={17} aria-hidden="true" /> Back to Blog</Link>
            <ArticleMeta article={article} />
            <h1 id="article-heading" tabIndex={-1}>{article.title}</h1>
            <p className="journal-description">{article.summary}</p>
          </header>
          <JournalPhoto image={article.image} className="journal-article__image" eager sizes="(min-width: 83rem) 78rem, 100vw" />
          <div className="journal-reading-layout">
            <nav className="journal-contents" aria-labelledby="article-contents-heading">
              <h2 id="article-contents-heading">In this article</h2>
              <ol>
                {article.sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                ))}
                <li><a href="#article-takeaway">Your takeaway</a></li>
              </ol>
            </nav>
            <div className="journal-prose">
              <p className="journal-prose__introduction">{article.introduction}</p>
              {article.sections.map((section) => (
                <section key={section.id} aria-labelledby={section.id}>
                  <h2 id={section.id} tabIndex={-1}>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}
              <section className="journal-takeaway" aria-labelledby="article-takeaway">
                <p className="journal-eyebrow">Keep in mind</p>
                <h2 id="article-takeaway" tabIndex={-1}>Your takeaway</h2>
                <p>{article.takeaway}</p>
                <ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
              <p className="journal-guidance-note">General planning guidance, not a site-specific design, quotation or legal opinion. Confirm requirements for your property with the relevant qualified professionals and authorities.</p>
              <Link to="/blog" className="journal-back"><ArrowLeft size={17} aria-hidden="true" /> Back to Blog</Link>
            </div>
          </div>
        </Container>
      </article>
      <BlogConsultation />
    </div>
  )
}

export default BlogArticlePage
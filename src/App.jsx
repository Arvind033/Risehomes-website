import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import { pages, notFoundPage } from './data/pages.js'
import AboutPage from './pages/AboutPage.jsx'
import BlogArticlePage from './pages/BlogArticlePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ConstructionPage from './pages/ConstructionPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import InteriorsPage from './pages/InteriorsPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/interiors" element={<InteriorsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {pages.filter((page) => page.path !== '/construction' && page.path !== '/interiors' && page.path !== '/projects' && page.path !== '/about' && page.path !== '/blog' && page.path !== '/blog/:slug' && page.path !== '/contact').map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={page.path === '/' ? <HomePage /> : <PlaceholderPage page={page} />}
          />
        ))}
        <Route path="*" element={<PlaceholderPage page={notFoundPage} />} />
      </Route>
    </Routes>
  )
}

export default App

// Blog.jsx
import React, { useState } from 'react';
import './Blogs.css';

const Blog = () => {
  // Dummy Blog Data
  const blogData = [
    {
      id: 1,
      title: "Journey into React 18: New Features & Best Practices",
      excerpt: "Exploring the latest React 18 features including concurrent rendering, automatic batching, and the new hooks API. Learn how to upgrade and optimize your applications.",
      content: "React 18 brings groundbreaking features that transform how we build web applications. Concurrent rendering allows React to work on multiple tasks simultaneously...",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Frontend"],
      views: 1248,
      likes: 342,
      isFeatured: true
    },
    {
      id: 2,
      title: "Building Scalable Microservices with Node.js",
      excerpt: "A comprehensive guide to designing and implementing scalable microservices architecture using Node.js and Docker.",
      content: "Microservices architecture has revolutionized how we build large-scale applications...",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Node.js", "Backend", "Architecture"],
      views: 2156,
      likes: 512,
      isFeatured: false
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Patterns & Techniques",
      excerpt: "Deep dive into advanced TypeScript patterns including generics, utility types, and type inference strategies.",
      content: "TypeScript has become an essential tool for modern web development...",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["TypeScript", "Development", "Tools"],
      views: 1892,
      likes: 428,
      isFeatured: true
    },
    {
      id: 4,
      title: "The Art of Clean Code: Principles Every Developer Should Know",
      excerpt: "Practical principles and patterns for writing maintainable, readable, and efficient code.",
      content: "Clean code is not just about making code work - it's about making it understandable...",
      date: "2024-01-02",
      readTime: "6 min read",
      tags: ["Best Practices", "Programming", "Clean Code"],
      views: 3456,
      likes: 897,
      isFeatured: false
    },
    {
      id: 5,
      title: "Next.js 14: Server Components & Performance Optimization",
      excerpt: "Exploring Next.js 14 new features, server components architecture, and performance optimization techniques.",
      content: "Next.js 14 introduces revolutionary changes to how we think about React applications...",
      date: "2023-12-28",
      readTime: "15 min read",
      tags: ["Next.js", "React", "Performance"],
      views: 2873,
      likes: 623,
      isFeatured: true
    },
    {
      id: 6,
      title: "State Management in 2024: Beyond Redux",
      excerpt: "Modern state management solutions including Zustand, Jotai, and React Query compared.",
      content: "The state management landscape has evolved significantly...",
      date: "2023-12-25",
      readTime: "9 min read",
      tags: ["State Management", "React", "Tools"],
      views: 1765,
      likes: 389,
      isFeatured: false
    },
    {
      id: 7,
      title: "CSS in 2024: Modern Layouts & Animation Techniques",
      excerpt: "Cutting-edge CSS features including container queries, subgrid, and scroll-driven animations.",
      content: "CSS continues to evolve at an incredible pace...",
      date: "2023-12-20",
      readTime: "11 min read",
      tags: ["CSS", "Design", "Frontend"],
      views: 2341,
      likes: 567,
      isFeatured: true
    },
    {
      id: 8,
      title: "From Junior to Senior: My Career Progression Journey",
      excerpt: "Personal insights and lessons learned while progressing through different developer career stages.",
      content: "The journey from a junior to senior developer is filled with challenges and learning opportunities...",
      date: "2023-12-15",
      readTime: "7 min read",
      tags: ["Career", "Growth", "Experience"],
      views: 4123,
      likes: 1024,
      isFeatured: false
    },
    {
      id: 9,
      title: "Building Premium UI: Design Systems & Component Libraries",
      excerpt: "Creating reusable, scalable component libraries with Storybook and design tokens.",
      content: "A well-designed component library is the foundation of any successful frontend project...",
      date: "2023-12-10",
      readTime: "14 min read",
      tags: ["UI/UX", "Design Systems", "Components"],
      views: 1987,
      likes: 478,
      isFeatured: true
    },
    {
      id: 10,
      title: "Performance Optimization: From 0 to 100 Lighthouse Score",
      excerpt: "Practical techniques to improve web performance and achieve perfect Lighthouse scores.",
      content: "Performance optimization is both an art and a science...",
      date: "2023-12-05",
      readTime: "13 min read",
      tags: ["Performance", "Optimization", "Web Vitals"],
      views: 2987,
      likes: 712,
      isFeatured: false
    }
  ];

  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get all unique tags
  const allTags = ['All', ...new Set(blogData.flatMap(blog => blog.tags))];
  
  // Filter blogs based on selected tag and search query
  const filteredBlogs = blogData.filter(blog => {
    const matchesTag = selectedTag === 'All' || blog.tags.includes(selectedTag);
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getRandomNeonColor = (index) => {
    const colors = [
      'rgba(255, 0, 255, 0.1)',
      'rgba(0, 255, 255, 0.1)',
      'rgba(255, 255, 0, 0.1)',
      'rgba(255, 0, 128, 0.1)',
      'rgba(128, 0, 255, 0.1)'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              My <span className="neon-glow">Blogs</span>
            </h1>
            <p className="hero-subtitle">
              Thoughts, insights, and experiences from my journey as a developer. 
              Sharing knowledge about tech, career growth, and modern web development.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{blogData.length}</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat">
                <span className="stat-number">48K+</span>
                <span className="stat-label">Total Views</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Tags</span>
              </div>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="graphic-dot"></div>
            <div className="graphic-dot"></div>
            <div className="graphic-dot"></div>
            <div className="graphic-line"></div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="blog-filters">
        <div className="filters-container">
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">⌕</span>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="tags-container">
            <div className="tags-scroll">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                  {selectedTag === tag && <span className="tag-indicator"></span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="featured-section">
        <h2 className="section-title">
          <span className="title-text">Featured</span>
          <span className="title-underline"></span>
        </h2>
        <div className="featured-grid">
          {blogData
            .filter(blog => blog.isFeatured)
            .slice(0, 2)
            .map((blog, index) => (
              <div key={blog.id} className="featured-card glow-border">
                <div className="featured-badge">🔥 Featured</div>
                <div className="featured-content">
                  <div className="featured-header">
                    <div className="featured-tags">
                      {blog.tags.map((tag, i) => (
                        <span key={i} className="featured-tag">{tag}</span>
                      ))}
                    </div>
                    <span className="featured-date neon-yellow">{formatDate(blog.date)}</span>
                  </div>
                  <h3 className="featured-title">{blog.title}</h3>
                  <p className="featured-excerpt">{blog.excerpt}</p>
                  <div className="featured-footer">
                    <div className="blog-stats">
                      <span className="stat-item">📖 {blog.readTime}</span>
                      <span className="stat-item">👁️ {blog.views.toLocaleString()} views</span>
                      <span className="stat-item">❤️ {blog.likes}</span>
                    </div>
                    <button className="read-more-button">
                      Read Article
                      <span className="button-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* All Blogs Grid */}
      <section className="blogs-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">Latest Articles</span>
            <span className="title-underline"></span>
          </h2>
          <div className="results-count">
            Showing {filteredBlogs.length} of {blogData.length} articles
          </div>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="blogs-grid">
            {filteredBlogs.map((blog, index) => (
              <article 
                key={blog.id} 
                className="blog-card glow-border"
                style={{ '--neon-bg': getRandomNeonColor(index) }}
              >
                <div className="card-header">
                  <div className="blog-tags">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  {blog.isFeatured && (
                    <span className="featured-indicator">⭐</span>
                  )}
                </div>
                
                <div className="card-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  
                  <div className="blog-meta">
                    <span className="blog-date neon-yellow">{formatDate(blog.date)}</span>
                    <span className="blog-read-time">⏱️ {blog.readTime}</span>
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="blog-stats">
                    <div className="stat">
                      <span className="stat-icon">👁️</span>
                      <span className="stat-value">{blog.views.toLocaleString()}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">❤️</span>
                      <span className="stat-value">{blog.likes}</span>
                    </div>
                  </div>
                  <button className="read-more-button">
                    Read More
                    <span className="button-arrow">→</span>
                  </button>
                </div>
                
                {/* Neon Border Effect */}
                <div className="card-glow"></div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3 className="no-results-title">No articles found</h3>
            <p className="no-results-text">
              Try adjusting your search or filter criteria
            </p>
            <button 
              className="reset-filters-button"
              onClick={() => {
                setSelectedTag('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Button */}
        {filteredBlogs.length > 0 && filteredBlogs.length < blogData.length && (
          <div className="view-all-container">
            <button className="view-all-button">
              View All Articles
              <span className="arrow-icon">↘</span>
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-card glow-border">
          <div className="newsletter-content">
            <h3 className="newsletter-title">
              <span className="neon-cyan">Stay Updated</span>
            </h3>
            <p className="newsletter-text">
              Subscribe to receive my latest articles on web development, career growth, 
              and tech insights directly in your inbox.
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="email-input"
                  required
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                  <span className="send-icon">✉</span>
                </button>
              </div>
              <p className="form-note">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
          <div className="newsletter-graphic">
            <div className="graphic-element"></div>
            <div className="graphic-element"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
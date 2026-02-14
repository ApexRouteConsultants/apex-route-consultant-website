import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ChevronRight, User } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-neutral-50 min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-navy-900 py-20 relative overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-gold-500/5"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-fade-in-up">Immigration Insights</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light animate-fade-in-up delay-100">
            Expert analysis, policy updates, and comprehensive guides for global mobility.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 animate-fade-in-up delay-200">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold-500 text-navy-900 shadow-md'
                    : 'bg-white border border-neutral-200 text-neutral-500 hover:border-gold-500 hover:text-navy-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <Link 
                to={`/blogs/${post.id}`} 
                key={post.id}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-navy-900 z-10">
                    {post.category}
                  </div>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-neutral-400 mb-4">
                     <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                     <span>|</span>
                     <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-serif text-navy-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-neutral-100 mt-auto">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                           <User className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium text-navy-900">{post.author}</span>
                     </div>
                     <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-navy-900 group-hover:border-navy-900 group-hover:text-white transition-all">
                        <ChevronRight className="w-4 h-4" />
                     </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-neutral-400">
               <p className="text-lg">No articles found matching your criteria.</p>
               <button onClick={() => {setSearchTerm(''); setSelectedCategory('All');}} className="mt-4 text-gold-500 hover:underline">Clear filters</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Blogs;
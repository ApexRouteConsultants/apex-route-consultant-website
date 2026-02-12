import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Tag, User, Link as LinkIcon, Twitter, Linkedin, Check } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const currentUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: currentUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Navigation Bar */}
      <div className="container mx-auto px-6 lg:px-12 py-8">
         <Link to="/blogs" className="inline-flex items-center text-neutral-500 hover:text-gold-500 transition-colors text-sm font-medium uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
         </Link>
      </div>

      {/* Editorial Header */}
      <article className="container mx-auto px-6 lg:px-12 max-w-4xl">
         <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-widest mb-6 border border-navy-100">
               {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 leading-tight mb-8">
               {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 border-y border-neutral-100 py-6">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-navy-900">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-navy-900 font-bold block">{post.author}</span>
                    <span className="text-neutral-400 text-xs">{post.role}</span>
                  </div>
               </div>
               <div className="w-px h-8 bg-neutral-200 hidden sm:block"></div>
               <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
               </div>
               <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
               </div>
            </div>
         </div>

         {/* Hero Image */}
         <div className="rounded-[2rem] overflow-hidden shadow-2xl mb-16 animate-fade-in-up delay-100 ring-1 ring-neutral-900/5">
            <img src={post.imageUrl} alt={post.title} className="w-full h-[400px] md:h-[500px] object-cover" />
         </div>

         {/* Content Body */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">
            
            {/* Share/Socials Sidebar (Left on Desktop) */}
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4 sticky top-32 h-fit animate-fade-in-up delay-200">
               <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2 text-center">Share</span>
               
               <button 
                onClick={handleShare}
                title="Native Share"
                className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-navy-900 hover:border-navy-900 hover:text-white transition-colors mx-auto"
               >
                  <Share2 className="w-4 h-4" />
               </button>

               <a 
                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Share on LinkedIn"
                 className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-colors mx-auto"
               >
                 <Linkedin className="w-4 h-4" />
               </a>

               <a 
                 href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 title="Share on Twitter"
                 className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:border-black hover:text-white transition-colors mx-auto"
               >
                 <Twitter className="w-4 h-4" />
               </a>

               <button 
                onClick={handleCopyLink}
                title="Copy Link"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors mx-auto ${
                  copied 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : 'border-neutral-200 text-neutral-600 hover:bg-gold-500 hover:border-gold-500 hover:text-white'
                }`}
               >
                  {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
               </button>
            </div>

            {/* Main Text */}
            <div className="lg:col-span-10 max-w-3xl">
               <div 
                  className="prose prose-lg prose-headings:font-serif prose-headings:text-navy-900 prose-headings:font-medium prose-p:text-neutral-600 prose-p:leading-relaxed prose-a:text-gold-600 hover:prose-a:text-gold-500 prose-strong:text-navy-900 prose-ul:text-neutral-600 prose-li:marker:text-gold-500 animate-fade-in-up delay-200"
                  dangerouslySetInnerHTML={{ __html: post.content }}
               ></div>
               
               {/* Mobile Share Bar */}
               <div className="lg:hidden flex items-center gap-4 mt-8 py-6 border-y border-neutral-100">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Share Article:</span>
                  <button onClick={handleShare} className="p-2 text-neutral-600 hover:text-navy-900"><Share2 className="w-5 h-5" /></button>
                  <button onClick={handleCopyLink} className="p-2 text-neutral-600 hover:text-navy-900">
                    {copied ? <Check className="w-5 h-5 text-green-500" /> : <LinkIcon className="w-5 h-5" />}
                  </button>
               </div>

               {/* Tags */}
               <div className="mt-12 pt-8">
                  <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                     <Tag className="w-4 h-4" /> Related Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                     {post.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-neutral-100 text-navy-800 text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors cursor-default">
                           #{tag}
                        </span>
                     ))}
                  </div>
               </div>
            </div>

         </div>
      </article>

      {/* Related / CTA Area */}
      <section className="bg-navy-900 py-24 text-center relative overflow-hidden mt-12">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-50"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-80"></div>
         
         <div className="container mx-auto px-6 relative z-10 max-w-2xl">
            <div className="inline-block p-3 rounded-full bg-gold-500/10 mb-6">
               <User className="w-6 h-6 text-gold-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need Professional Assistance?</h2>
            <p className="text-neutral-300 mb-10 text-lg leading-relaxed font-light">
               Immigration rules are complex and subject to change. Ensure your application is accurate by consulting with our qualified experts for <strong>{post.category}</strong>.
            </p>
            <Link to="/contact" className="inline-block px-10 py-5 bg-gold-500 text-navy-900 font-bold rounded-full uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-xl">
               Book a Consultation
            </Link>
         </div>
      </section>

    </div>
  );
};

export default BlogDetail;
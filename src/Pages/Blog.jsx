import React from 'react';
import '../style/Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-heading">MY <span>BLOG</span></h1>
      <p className="blog-subtext">
        Learn tips & stories behind the professional moments. <br />Discover deeper stories behind every shot.
      </p>

      <div className="blog-cards">
        <div className="blog-card">
          <img src="/blog1.jpg" alt="Blog Post 1" />
          <h3>Make Your Website</h3>
          <p>🕒 July 2025 · 💬 42 comments</p>
          <p>Learn how to plan, shoot, and share cinematic projects like a pro.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src="/blog2.jpg" alt="Blog Post 2" />
          <h3>Golden Hour Power</h3>
          <p>🕒 June 2025 · 💬 18 comments</p>
          <p>Behind the scenes of my favorite golden hour shoot this year.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src="/blog3.jpg" alt="Blog Post 3" />
          <h3>Visual Storytelling</h3>
          <p>🕒 May 2025 · 💬 32 comments</p>
          <p>Why story matters in photography & how to craft it visually.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src="/blog4.jpg" alt="Blog Post 4" />
          <h3>First Client Shoot</h3>
          <p>🕒 May 2025 · 💬 20 comments</p>
          <p>Tips from my first ever paid photoshoot and what I learned.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src="/blog5.jpg" alt="Blog Post 5" />
          <h3>Editing Styles</h3>
          <p>🕒 April 2025 · 💬 25 comments</p>
          <p>Different editing techniques and which one fits your brand.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src="/blog6.jpg" alt="Blog Post 6" />
          <h3>Camera Gear I Use</h3>
          <p>🕒 March 2025 · 💬 15 comments</p>
          <p>Everything inside my camera bag for different types of shoots.</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

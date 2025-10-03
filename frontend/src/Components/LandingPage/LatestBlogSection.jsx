import React from 'react';

// Component for individual blog cards

const BlogCard = ({ imageUrl, tag, date, title, description }) => {
  return (
    <div className="bg-[#f1f2f1] rounded-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      {/* Blog Post Image */}
      <img
        className="w-full h-52 object-cover rounded-b-lg"
        src={imageUrl}
        alt={title}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found'; }}
      />
      <div className="py-5">
        {/* Blog Meta Information (Tag and Date) */}
        <div className="flex items-center mb-3">
          <span className="text-sm font-semibold text-[#62b17e] bg-[#d1efe1] px-3 py-1 rounded-full">{tag}</span>
          <span className="text-sm text-gray-500 ml-4">{date}</span>
        </div>
        {/* Blog Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#62b17e] cursor-pointer transition-colors tracking-tighter">
          {title}
        </h3>
        {/* Blog Description */}
        <p className="text-gray-600 text-base tracking-tighter">
          {description}{' '}
          <strong className="font-bold whitespace-nowrap">Read more...</strong>
        </p>
      </div>
    </div>
  );
};

// Main component that lays out the entire section
export default function App() {
  // Sample data for the blog posts
  const blogPosts = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto-format&fit=crop',
      tag: 'Blog',
      date: 'August 31, 2023',
      title: 'Revolutionizing Energy Procurement: The Promise Potential of Virtual Power Purchase Agreements',
      description: 'In the quest for achieving net-zero targets and promoting sustainable energy'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto-format&fit=crop',
      tag: 'Blog',
      date: 'August 31, 2023',
      title: 'Revolutionizing Energy Procurement: The Promise',
      description: 'In the quest for achieving net-zero targets and promoting sustainable energy'
    }
  ];

  return (
    // Main container with the specified background color and font
    <div className="bg-[#f1f2f1] min-h-screen flex items-center justify-center font-sans">
      <div className="w-full border-b-[20px] border-[#62b17e]">
        <div className="w-full p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Left Column: Title and Button */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tighter">
                Latest blogs from our desk
              </h2>
              <button className="bg-[#62b17e] text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300 shadow-md">
                Read more blogs →
              </button>
            </div>

            {/* Right Column: Blog Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  imageUrl={post.imageUrl}
                  tag={post.tag}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}



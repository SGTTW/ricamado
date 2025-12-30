// src/components/blog/BlogSearch.tsx - UPDATED with native search
"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/types/index";
import Link from "next/link";
import { ArrowRight, Heart, Forward, Search } from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface BlogSearchProps {
  posts: BlogPost[];
}

const BlogSearch = ({ posts }: BlogSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [showShareOptions, setShowShareOptions] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);
  const [hoveredViewMore, setHoveredViewMore] = useState(false);

  // Simple client-side search filter
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();

    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
        // (post.category && post.category.toLowerCase().includes(query))
      );
    });
  }, [posts, searchQuery]);

  // Handle like toggle
  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  // Handle share functionality
  const handleShare = (platform: string, post: BlogPost) => {
    const shareUrl = `${window.location.origin}/blog/${post.id}`;
    const shareTitle = post.title;
    const shareDescription = post.excerpt;

    let shareLink = "";
    switch (platform) {
      case "WhatsApp":
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `${shareTitle}\n\n${shareDescription}\n\n${shareUrl}`
        )}`;
        break;
      case "Facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}&quote=${encodeURIComponent(shareTitle)}`;
        break;
      case "Twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${shareTitle}\n\n${shareDescription}`
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "LinkedIn":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`;
        break;
    }
    if (shareLink) {
      window.open(shareLink, "_blank");
      setShowShareOptions(null);
    }
  };

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };

  return (
    <div className="w-full">
      {/* Native search box */}
      <div className="mb-8">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search blog posts by title, author, or content..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleItems(6); // Reset visible items when searching
            }}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setVisibleItems(6);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Search results count */}
        {searchQuery && (
          <p className="mt-2 text-sm text-gray-600">
            Found {filteredPosts.length} result
            {filteredPosts.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* No results message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No blog posts found matching your search.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Blog cards grid */}
      {filteredPosts.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(0, visibleItems).map((post) => (
              <Link href={`/blog/${post.id}`} className="block" key={post.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Image section with like and share icons */}
                  <div className="relative h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Share icon - top right */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowShareOptions(
                          showShareOptions === post.id ? null : post.id
                        );
                      }}
                      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <Forward size={18} className="text-gray-600" />
                    </button>

                    {/* Share options dropdown */}
                    {showShareOptions === post.id && (
                      <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-2 z-20 flex flex-col gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleShare("Facebook", post);
                          }}
                          className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                        >
                          <FaFacebook
                            className="text-blue-600 mr-2"
                            size={16}
                          />
                          Facebook
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleShare("Twitter", post);
                          }}
                          className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                        >
                          <FaXTwitter
                            className="text-blue-400 mr-2"
                            size={16}
                          />
                          X
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleShare("LinkedIn", post);
                          }}
                          className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                        >
                          <FaLinkedin
                            className="text-blue-700 mr-2"
                            size={16}
                          />
                          LinkedIn
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleShare("WhatsApp", post);
                          }}
                          className="flex items-center px-3 py-2 hover:bg-gray-100 rounded text-sm whitespace-nowrap"
                        >
                          <FaWhatsapp
                            className="text-green-600 mr-2"
                            size={16}
                          />
                          WhatsApp
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content section */}
                  <div className="p-4">
                    {/* Title with like icon */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800 flex-1 mr-2">
                        {post.title}
                      </h3>

                      {/* Like icon */}
                      <Heart
                        className={`${
                          likedPosts.has(post.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-600"
                        } cursor-pointer hover:text-red-500 transition-colors duration-100 flex-shrink-0`}
                        size={20}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleLike(post.id);
                        }}
                      />
                    </div>

                    {/* Author and date */}
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-700 mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>

                    {/* Read more link */}
                    <div className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Read more
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View more button */}
          {!searchQuery && visibleItems < filteredPosts.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={showMoreItems}
                className="inline-flex items-center px-8 py-3 text-blue-600 hover:text-blue-500 transition-colors text-lg font-semibold"
                onMouseEnter={() => setHoveredViewMore(true)}
                onMouseLeave={() => setHoveredViewMore(false)}
              >
                View More Posts
                {hoveredViewMore ? (
                  <ArrowRight className="ml-2" size={20} />
                ) : null}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogSearch;

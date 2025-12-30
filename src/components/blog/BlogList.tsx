// src/components/blog/BlogList.tsx
"use client";

import { useState } from "react";
import { BlogPost } from "@/types/index";
import Link from "next/link";
import { Heart, Forward, ArrowRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

interface BlogListProps {
  posts: BlogPost[];
  itemsPerPage?: number;
}

const BlogList = ({ posts, itemsPerPage = 6 }: BlogListProps) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [hoveredViewMore, setHoveredViewMore] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

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
    setVisibleItems((prev) => prev + itemsPerPage);
  };

  return (
    <div className="space-y-8">
      {/* Blog cards grid - matching property card structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, visibleItems).map((post) => (
          <Link href={`/blog/${post.id}`} className="block" key={post.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Image section with like and share icons */}
              <div className="relative h-64">
                <Image
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
                      <FaFacebook className="text-blue-600 mr-2" size={16} />
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
                      <FaXTwitter className="text-blue-400 mr-2" size={16} />
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
                      <FaLinkedin className="text-blue-700 mr-2" size={16} />
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
                      <FaWhatsapp className="text-green-600 mr-2" size={16} />
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
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
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
      {visibleItems < posts.length && (
        <div className="flex justify-center">
          <button
            onClick={showMoreItems}
            className="inline-flex items-center px-8 py-3 text-blue-600 hover:text-blue-500 transition-colors text-lg font-semibold"
            onMouseEnter={() => setHoveredViewMore(true)}
            onMouseLeave={() => setHoveredViewMore(false)}
          >
            View More Posts
            {hoveredViewMore && <ArrowRight className="ml-2" size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;

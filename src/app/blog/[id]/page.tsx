// src/app/blog/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import Container from "@/components/common/Container";
import blogPosts from "@/data/blogData";
import BlogGallery from "@/components/blog/BlogGallery";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [postId, setPostId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getParams() {
      const resolvedParams = await params;
      setPostId(resolvedParams.id);
    }
    getParams();
  }, [params]);

  if (!postId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  const handleBackClick = () => {
    router.push("/blog");
  };

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="my-6">
          <button
            onClick={handleBackClick}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </button>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Blog Gallery Component  */}
          <div className="mb-6">
            <BlogGallery
              images={post.images ?? []}
              videos={post.videos ?? []}
              title={post.title}
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {post.title}
              </h1>

              {/* Author info with date and read time */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{post.author}</p>
                  <p className="text-sm text-gray-600">
                    {post.readTime} • {post.date}
                  </p>
                </div>
              </div>
            </div>

            {/* horizontal divider */}
            <div className="flex-grow border-t border-gray-100 py-4"></div>

            {/* Blog Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <div className="prose prose-lg max-w-none">
                    {post.content.split("\n\n").map((paragraph, index) => {
                      if (paragraph.startsWith("## ")) {
                        return (
                          <h2
                            key={index}
                            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                          >
                            {paragraph.replace("## ", "")}
                          </h2>
                        );
                      }
                      if (
                        paragraph.startsWith("**") &&
                        paragraph.endsWith("**")
                      ) {
                        return (
                          <p
                            key={index}
                            className="text-gray-800 leading-relaxed mb-4 font-semibold"
                          >
                            {paragraph.replace(/\*\*/g, "")}
                          </p>
                        );
                      }
                      if (paragraph.match(/^\d+\./)) {
                        return (
                          <li
                            key={index}
                            className="text-gray-700 leading-relaxed ml-6 mb-2"
                          >
                            {paragraph.replace(/^\d+\.\s/, "")}
                          </li>
                        );
                      }
                      if (
                        paragraph.startsWith("- ") ||
                        paragraph.startsWith("• ")
                      ) {
                        return (
                          <li
                            key={index}
                            className="text-gray-700 leading-relaxed ml-6 mb-2"
                          >
                            {paragraph.replace(/^[-•]\s/, "")}
                          </li>
                        );
                      }
                      return (
                        <p
                          key={index}
                          className="list-disc leading-relaxed mb-6"
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

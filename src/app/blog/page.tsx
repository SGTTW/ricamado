// src/app/blog/page.tsx 
import Container from "@/components/common/Container";
import BlogHero from "@/components/blog/BlogHero";
import BlogSearch from "@/components/blog/BlogSearch";
import blogPosts from "@/data/blogData";


export default function BlogPage() {
  return (
    <Container>
      <BlogHero />
      <div className="py-12">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-gray-800 mb-6">All Blog Posts</h2>
          {/* Pass blog posts to the search component */}
          <BlogSearch posts={blogPosts} />
        </div>
      </div>
    </Container>
  );
}
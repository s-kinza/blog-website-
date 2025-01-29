import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";
import { MagicContainer } from "@/components/ui/magic-container";
import { Metadata } from "next";
import BlogContent from "@/components/BlogContent";
import BlogComments from "@/components/BlogComments";
import RelatedPosts from "@/components/RelatedPosts";
import InfoCards from "@/components/InfoCards";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Calculate read time based on content length
  const wordCount = post.content?.reduce((count, section) => {
    return count + (section.content?.split(' ').length || 0);
  }, 0) || 0;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return (
    <MagicContainer>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative h-[50vh] mb-12 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="mr-2 h-4 w-4" />
                {post.date}
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        
        <InfoCards readTime={readTime} category="Technology" />
        
        <BlogContent post={post} />
        <BlogComments postId={post.id} />
        <RelatedPosts currentPostId={post.id} posts={blogPosts} />
      </article>
    </MagicContainer>
  );
}
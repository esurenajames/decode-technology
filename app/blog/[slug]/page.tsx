
import BlogPost from '../../page/BlogPost/page';

export default function BlogPostRoute({ params }: { params: { slug: string } }) {
    // In a real app, we would use params.slug to fetch data
    return <BlogPost />;
}

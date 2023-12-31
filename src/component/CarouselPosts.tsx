import {getNonFeaturedPosts} from "../../service/post";
import PostCard from "@/component/PostCard";
import MultiCarousel from "@/component/MultiCarousel";

export default async function CarouselPosts() {
    const posts = await getNonFeaturedPosts();
    return <section className='my-4'>
        <h2 className='text-2xl font-bold my-2'>You May Like</h2>
        <MultiCarousel>
            {posts.map((post) => (
                <PostCard post={post} key={post.path}/>
            ))}
        </MultiCarousel>
    </section>
}
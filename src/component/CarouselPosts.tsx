import {getNonFeaturedPosts} from "../../service/post";
import PostCard from "@/component/PostCard";

export default async function CarouselPosts() {
    const posts = await getNonFeaturedPosts();
    return <section>
        <h2>You May Like</h2>
        {posts.map((post) => (
            <PostCard post={post} key={post.path}/>
            ))}
    </section>
}
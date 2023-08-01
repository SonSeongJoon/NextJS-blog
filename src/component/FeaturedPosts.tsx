import PostCard from "@/component/Post";
import {getAllPosts} from "@/service/post";

export default async function FeaturedPostsPage() {
    // 1. 모든 포스트 데이터를 읽어와야 함
    const posts = await getAllPosts();
    // 2. 모든 포스트 데이터를 보여줌
    return (
        <section>
            <h2>Featured Post</h2>
            <PostCard posts={posts}/>
        </section>
    )
}
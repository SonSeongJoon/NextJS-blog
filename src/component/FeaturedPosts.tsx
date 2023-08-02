import PostGrid from "@/component/PostGrid";
import {getAllPosts, getFeaturedPosts} from "../../service/post";

export default async function FeaturedPostsPage() {
    // 1. 모든 포스트 데이터를 읽어와야 함
    // const posts = await getAllPosts();
    // 2. 모든 포스트 데이터를 보여줌
    const posts = await getFeaturedPosts();
    return (
        <section className='my-4'>
            <h2 className='text-2xl font-bold my-2'>Featured Post</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}
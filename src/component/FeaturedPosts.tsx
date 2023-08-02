import PostGrid from "@/component/PostGrid";
import {getAllPosts, getFeauredPosts} from "../../service/post";

export default async function FeaturedPostsPage() {
    // 1. 모든 포스트 데이터를 읽어와야 함
    // const posts = await getAllPosts();
    // 2. 모든 포스트 데이터를 보여줌
    const posts = await getFeauredPosts();
    return (
        <section>
            <h2 className='text-2xl font-bold my-2'>Featured Post</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}
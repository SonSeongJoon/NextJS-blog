import {getAllPosts} from "../../../service/post";
import FilterablePosts from "@/component/FilterablePosts";
export const metadata = {
    title: 'All Posts',
    description: '풀스택 관련 블로그 글',
}
export default async function PostsPage() {
    const posts = await getAllPosts();
    // 고유한 카테고리만 배열로 받아오기
    const categories = [...new Set(posts.map((post) => post.category))]
    
    return <FilterablePosts posts={posts} categories={categories}/>
}
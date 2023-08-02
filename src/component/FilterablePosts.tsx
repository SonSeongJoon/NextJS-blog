// 상태를 가지기 위해서 클라이언트 컴포넌트가 되어야 한다.
'use client';
import {Post} from "../../service/post";
import {useState} from "react";
import PostGrid from "@/component/PostGrid";
import Categories from "@/component/Categories";

type Props = {
    posts: Post[];
    categories: string[];
}
const ALL_POSTS = 'All_Posts';
export default function FilterablePosts({posts, categories}: Props) {
    const [selected, setSelected] = useState(ALL_POSTS);
    const filtered = selected === ALL_POSTS
        ? posts
        :posts.filter(post => post.category === selected);

    return <section className='flex m-4'>
        <PostGrid posts={filtered}/>
        <Categories
            categories={[ALL_POSTS, ...categories]}
            selected={selected}
            onClick={setSelected}/>
    </section>
}
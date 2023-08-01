import {Post} from "@/service/post";

export type Props = { posts : Post[] };
export default function PostCard({posts}: Props) {
    return (
        <>
            <ul>
                {posts.map((post)=><li>{post.title}</li>)}
            </ul>
        </>
    )
}
import {getPostData} from "../../../../service/post";


import Image from "next/image";
import PostContent from "@/component/PostContent";

type Props = {
    params: {
        slug: string;
    }
}
export default async function PostPage({params: {slug}}: Props) {
    //1.  전달된 slug에 해당하는 포스트 데이터를 읽어와서
    //2. 데이터를 마크다운뷰어에 표기하면 됨
    const post = await getPostData(slug);
    const {title, path} = post;
    return <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg'>
        <Image
            className='w-full h-1/5 max-h-[400px]'
            src={`/images/posts/${path}.png`}
            alt={title}
            width={760}
            height={420}
        />
        <PostContent post={post}/>

    </article>

}
import path from "path";
import {readFile} from "fs/promises";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
};

export type PostData = Post & {
    content: string;
    next: Post | null;
    prev: Post | null;
};

export async function getNonFeaturedPosts():Promise<Post[]> {
    return getAllPosts()
        .then(posts => posts.filter((post)=> post.featured))
}

// featured된 것만 post 데이터 가져오기
export async function getFeaturedPosts():Promise<Post[]> {
    return getAllPosts()
        .then(posts => posts.filter((post)=> post.featured))
}
// 모든 post 데이터 가져오기
export async function getAllPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return readFile(filePath, 'utf-8')
        .then<Post[]>(JSON.parse)
        .then((posts) => posts.sort((a,b) => (a.date > b.date ? -1:1)));
}
// 타입스크립트인데, 기존의 A타입과 와 B타입을 인털섹션 타입을 정의할 수 있음
export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts',`${fileName}.md`);
    const posts = await getAllPosts()
    const post = posts.find((post)=> post.path === fileName);

    if(!post)
        throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index-1] : null;
    const prev = index < posts.length - 1  ? posts[index+1]: null;
    const content = await  readFile(filePath, 'utf-8');
    return {...post, content, next, prev};

}
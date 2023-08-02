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
export async function getNonFeaturedPosts():Promise<Post[]> {
    return getAllPosts()
        .then(posts => posts.filter((post)=> post.featured))
}

// featured된 것만 post 데이터 가져오기
export async function getFeauredPosts():Promise<Post[]> {
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
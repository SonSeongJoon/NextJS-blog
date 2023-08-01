import Image from 'next/image'
import Hero from '../component/Hero'
import FeaturedPostsPage from "@/component/FeaturedPosts";

export default function HomePage() {
    return (
        <>
            <Hero/>
            <FeaturedPostsPage/>
        </>
    )
}

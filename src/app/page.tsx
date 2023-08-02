import Image from 'next/image'
import Hero from '../component/Hero'
import FeaturedPostsPage from "@/component/FeaturedPosts";
import CarouselPosts from "@/component/CarouselPosts";

export default function HomePage() {
    return (
        <>
            <Hero/>
            <FeaturedPostsPage/>
            <CarouselPosts/>
        </>
    )
}

import Image from "next/image";
import myImage from '../../public/images/clothes.jpg';
import Link from "next/link";

export default function Hero() {
    return (
        <section className="text-center">
            <Image className="mx-auto rounded-full"
                   src={myImage}
                   alt='hero'
                   width={250}
                   height={250}
                   priority
            />
            <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Son"}</h2>
            <h3 className="text-xl font-semibold">Full-stack Engineer</h3>
            <p>성공을 코딩하는 남자</p>
            <Link href='/contact'>
                <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact</button>
            </Link>
        </section>
    )
}
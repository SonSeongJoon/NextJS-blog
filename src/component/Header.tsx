import Link from "next/link";

export default function Header() {
    return (
        <header className="flex p-4 justify-between item-center">
            <h1 className="font-bold text-3xl">Son Blog</h1>
            <nav className="flex items-center gap-3">
                <Link className="hover:text-gray-200 mx-4" href="/">home</Link>
                <Link className="hover:text-gray-200 mx-4" href="/about">about</Link>
                <Link className="hover:text-gray-200 mx-4" href="/posts">posts</Link>
                <Link className="hover:text-gray-200 mx-4" href="/contact">contact</Link>
            </nav>
        </header>
    )
}
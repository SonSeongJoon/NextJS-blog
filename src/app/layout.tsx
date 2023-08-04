import './globals.css'
import {Open_Sans} from 'next/font/google';
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Link from "next/link";
import Footer from '@/component/Footer'
import Header from "@/component/Header";

const sans = Open_Sans({subsets: ['latin']})
const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: {
        default: 'Son Blog',
        template: 'Son Blog | %s'
    },
    description: 'Full Stack Engineer Son',

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en" className={sans.className}>
            <body className="flex flex-col w-full max-w-screen-xl mx-auto">
            <Header/>
            <main className='grow'>{children}</main>
            <Footer/>
            </body>
            </html>
        </>

    )
}

import {AiFillGithub, AiFillLinkedin, AiFillNotification, AiFillYoutube} from "react-icons/ai";
import ContactForm from '../../component/ContactForm'

export const metadata = {
    title: 'Contact Me',
    description: 'Son에게 메일 보내기',
}

const LINKS = [
    {icon: <AiFillGithub/>, url: 'https://github.com/SonSeongJoon'},
    // {icon: <AiFillNotification/>,url: ''},
    // {icon: <AiFillLinkedin/>,url: ''}
]
export default function ContactPage() {
    return (
        <section className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
            <p>next-js-blog-smoky.vercel.app</p>
            <ul className='flex gap-4 my-2'>
                {LINKS.map((link, index) => (
                    <a key={index} href={link.url} target='_blank' className='text-5xl hover:text-yellow-400'>
                        {link.icon}
                    </a>
                ))}
            </ul>
            <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
            <ContactForm/>
        </section>
    )
}
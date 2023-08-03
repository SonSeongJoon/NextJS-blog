import Hero from "@/component/Hero";

export default function AboutPage() {
    return (
        <>
            <Hero/>
            <section className='bg-gray-100 rounded-md mt-6 shadow-lg text-center p-10 mb-20'>
                <div className='mb-10'>
                    <h2 className='text-2xl font-bold'>Who Am I?</h2>
                    <p>개발을 사랑하는 풀스택 개발자</p>
                    <p>사람과 디자인을 담는 웹앱을 만들고 있음</p>
                </div>
                <div className='mb-10'>
                    <h2 className='text-2xl font-bold'>Career</h2>
                    <p>...</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Skills</h2>
                    <p>React, Node, Git</p>
                </div>
            </section>
        </>
    )
}
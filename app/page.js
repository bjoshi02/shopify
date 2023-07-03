import Image from 'next/image';
import TopHead from '@/components/TopHead';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <TopHead />
        <Hero />
        <Stats />
        <Footer />
    </main>
  )
}

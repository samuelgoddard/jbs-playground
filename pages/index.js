import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import EmblaCarousel from '@/components/emblaCarousel'

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade} className="w-full">
            <EmblaCarousel slides={slides} />

            <div className="fixed bottom-0 left-0 right-0 w-full p-5 flex items-end">
              <span className="uppercase block font-bold text-lg w-[45%]">Filter</span>
              
              <div className="flex space-x-3 mx-auto">
                <span className="uppercase block font-bold text-lg line-through">Gallery</span>
                <span className="uppercase block font-bold text-lg">Index</span>
              </div>

              <span className="uppercase block font-bold text-5xl leading-none ml-auto w-[100px] text-right">JBS</span>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

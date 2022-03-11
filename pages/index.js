import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'



const slides = [{
  classes: 'mr-auto mb-24',
  image: 'https://placedog.net/300/480'
}, {
  classes: 'mx-auto mb-32',
  image: 'https://placedog.net/500/280'
}, {
  classes: 'ml-auto mb-12',
  image: 'https://placedog.net/320/410'
}, {
  classes: 'mr-auto mb-28',
  image: 'https://placedog.net/500/280'
}, {
  classes: 'mx-auto mb-12',
  image: 'https://placedog.net/320/280'
}, {
  classes: 'ml-auto mb-20',
  image: 'https://placedog.net/500/280'
}, {
  classes: 'mr-auto mb-48',
  image: 'https://placedog.net/440/440'
}, {
  classes: 'mx-auto mb-12',
  image: 'https://placedog.net/500/280'
}, {
  classes: 'mx-auto',
  image: 'https://placedog.net/420/680'
}]

export default function Home() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.045 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.main
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.article variants={fade} className="w-full relative" id="sticky" data>
                  <div className="w-[65%] fixed top-0 left-0 pointer-events-none" data-scroll data-scroll-sticky data-scroll-target="#sticky">
                    <img src="https://placedog.net/720/480" className="w-full will-change-transform" />
                    <div className="flex uppercase text-sm pl-3 pt-1">
                      <span className="w-auto m-auto">JBS.06</span>
                      <span className="ml-4 flex-1">Banks Rum</span>
                      <span className="flex-1">Global Advertising Campaign</span>
                      <span className="flex-1">London</span>
                      <span className="w-auto ml-auto underline">Case Study</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap p-8">
                    <div className="ml-auto w-[30%]">
                      {slides.map((item, index) => (
                        <img
                          className={`will-change-transform ${item.classes}`}
                          src={item.image}
                          alt="A cool cat."
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                </m.article>
              </m.main>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>

      <div className="fixed bottom-0 left-0 right-0 w-full p-5 flex items-end">
        <span className="uppercase block font-bold text-lg w-[45%]">Filter</span>
        
        <div className="flex space-x-3 mx-auto">
          <span className="uppercase block font-bold text-lg line-through">Gallery</span>
          <span className="uppercase block font-bold text-lg">Index</span>
        </div>

        <span className="uppercase block font-bold text-5xl leading-none ml-auto w-[100px] text-right">JBS</span>
      </div>
    </Layout>
  )
}

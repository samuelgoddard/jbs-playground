import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect, useState } from 'react'

export default function EmblaCarousel( {slides} ) {
  const { scroll } = useLocomotiveScroll()
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (scroll) {
      scroll.on('call', function(e) {
        setCurrent(e)
        console.log(e)
      });
    }
  }, [scroll])

  return (
    <>
      <div className="w-[65%] fixed top-0 left-0 pointer-events-none" data-scroll data-scroll-sticky data-scroll-target="#sticky">
        <div className="w-full relative overflow-hidden bg-gray-100 mt-[55px]">
          <img
            className={`w-full will-change-transform`}
            src={slides[current].mainImage ? slides[current].mainImage : slides[current].image}
            alt="A cool cat."
          />
        </div>
          
        <div className="relative w-full">
          {slides.map((item, i) => (
            <div className={`flex uppercase text-sm pl-3 pt-1 absolute top-0 left-0 right-0 font-mono ${ i == current ? 'opacity-100 scale-100' : 'opacity-0 scale-110' }`}>
            <span className="w-auto m-auto">JBS.{current < 10 && ('0')}{current}</span>
            <span className="ml-4 flex-1">{slides[current].title}</span>
            <span className="flex-1">{slides[current].type}</span>
            <span className="flex-1">{slides[current].location}</span>
            <span className="w-auto ml-auto underline">Case Study</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap p-8">
      <div className="ml-auto w-[30%] flex flex-col pt-20">
          {slides.map((item, i) => (
            <div className="relative flex" key={i}>
              <div className={`${item.classes} relative overflow-hidden mt-5`}>
                <img
                  className={`will-change-transform trasition-translate ease-in-out duration-500 ${ i == current ? 'scale-[1.15]' : 'scale-100' }`}
                  src={item.image}
                  alt="A cool cat."
                  onClick={() => setCurrent(i)}
                  data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="80%, 20%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

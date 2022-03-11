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
        <div className="w-full h-[70vh] relative overflow-hidden bg-gray-100 mt-[55px]">
          {slides.map((item, i) => (
            <img
              className={`w-full h-full will-change-transform absolute inset-0 object-cover transition-all ease-in-out duration-500 ${ i == current ? 'opacity-100 scale-100' : 'opacity-0 scale-110' }`}
              src={item.image}
              alt="A cool cat."
              key={i}
            />
          ))}
        </div>
          
        <div className="relative w-full">
          {slides.map((item, i) => (
            <div className={`flex uppercase text-sm pl-3 pt-1 absolute top-0 left-0 right-0 ${ i == current ? 'opacity-100 scale-100' : 'opacity-0 scale-110' }`}>
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
        <div className="ml-auto w-[30%] flex flex-col">
          {slides.map((item, i) => (
            <div className="relative flex" key={i}>
              <div className={`${item.classes} relative overflow-hidden mt-5`}>
                <img
                  className={`will-change-transform trasition-translate ease-in-out duration-500 ${ i == current ? 'scale-[1.15]' : 'scale-100' }`}
                  src={item.image}
                  alt="A cool cat."
                  onClick={() => setCurrent(i)}
                  data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="70%, 30%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

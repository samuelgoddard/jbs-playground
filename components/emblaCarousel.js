import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    axis: "y",
    dragFree: true,
    draggableClass: "",
    draggingClass: "",
    selectedClass: ""
  }, [WheelGesturesPlugin()]);
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="w-[65%] absolute top-0 left-0 pointer-events-none">
        <img src="https://placedog.net/500/280" className="w-full" />
        <div className="flex uppercase text-sm pl-3 pt-1">
          <span className="w-auto m-auto">JBS.06</span>
          <span className="ml-4 flex-1">Banks Rum</span>
          <span className="flex-1">Global Advertising Campaign</span>
          <span className="flex-1">London</span>
          <span className="w-auto ml-auto underline">Case Study</span>
        </div>
      </div>
      <div className="embla__viewport flex flex-wrap" ref={viewportRef}>
        <div className="embla__container ml-auto w-[30%]">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div className="embla__slide__inner__inner">
                  <img
                    className="embla__slide__img"
                    src="https://placedog.net/500/280"
                    alt="A cool cat."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};

export default EmblaCarousel;

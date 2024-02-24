import React, { useEffect } from 'react';
import gsap from 'gsap';

const Grid = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.fromTo('.border-top', { width: '0%' }, { width: '100%', duration: 1 })
      .fromTo('.border-right', { height: '0%' }, { height: '100%', duration: 1 }, '-=0.5')
      .fromTo('.border-bottom', { width: '0%' }, { width: '100%', duration: 1 }, '-=0.5')
      .fromTo('.border-left', { height: '0%' }, { height: '100%', duration: 1 }, '-=0.5');
  }, []);

  return (
    <div className="grid grid-cols-5 grid-rows-7 h-screen">
      <div className="primero col-span-2 row-span-3 border-black "></div>
      <div className="my-element col-span-3 row-span-4 col-start-3 border-right border-black border-l-4"></div>
      <div className="my-element col-span-2 row-span-4 row-start-4 border-top border-black border-t-4"></div>
      <div className="my-element col-span-3 row-span-3 col-start-3 row-start-5 bg-[#E0E5E7] border-black"></div>
    </div>
  );
}

export default Grid;

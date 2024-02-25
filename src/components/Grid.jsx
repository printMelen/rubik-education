import React, { useEffect } from 'react';
import gsap from 'gsap';

const Grid = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.fromTo('.border-top', { width: '0%' }, { width: '100%', duration: 1 })
      .fromTo('.border-right', { height: '0%' }, { height: '100%', duration: 1 }, '-=0.5')
      .fromTo('.border-bottom', { width: '0%' }, { width: '100%', duration: 1 }, '-=0.5')
      .fromTo('.border-left', { height: '0%' }, { height: '100%', duration: 1 }, '-=0.5');
    tl.to('.primero', { backgroundColor: '#E0E5E7', duration: 1 }, '-=0.25');
    tl.to('.cuarto', { backgroundColor: '#E0E5E7', duration: 1 }, '-=0.25');
    tl.to('.segundo', { backgroundColor: '#F0CE06', duration: 1 }, '-=0.25');
    tl.to('.tercero', { backgroundColor: '#D4121A', duration: 1 }, '-=0.25');
  }, []);

  return (
    <div className="grid grid-cols-5 grid-rows-7 h-screen">
      <div className="primero col-span-2 row-span-3 border-black flex items-center justify-center">
        <img src="public\icon.svg" alt="" srcset="" />
      </div>
      <div className="segundo my-element col-span-3 row-span-4 col-start-3 border-right border-black border-l-4 flex items-center justify-center">
        <h2 className='text-7xl font-titillium-black font-black uppercase text-white'>Playground</h2>
      </div>
      <div className="tercero my-element col-span-2 row-span-4 row-start-4 border-top border-black border-t-4 flex items-center justify-center">
        <h2 className='text-7xl font-titillium-black font-black uppercase text-white'>Ranking</h2>
      </div>
      <div className="cuarto my-element col-span-3 row-span-3 col-start-3 row-start-5 border-left border-top border-t-4 border-l-4 border-black flex items-center justify-center">
        <h2 className='text-7xl font-titillium-black font-black uppercase text-black'>Account</h2>
      </div>
    </div>
  );
}

export default Grid;

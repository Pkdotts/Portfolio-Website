'use client';

import { useEffect } from "react";

export default function ScrollReveal(){
  useEffect(() => {
    const elements = document.querySelectorAll('.element');


    function onScroll() {
      setTimeout(() => {
        elements.forEach((element, idx) => {
          setTimeout(() => {
              const rect = element.getBoundingClientRect();
              if (rect.top < window.innerHeight) {
                element.classList.add('visible');
              }
            }, (20 * idx))}); 
      }, 100);
    }

  
    
    window.addEventListener('scroll', onScroll);

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
     
}
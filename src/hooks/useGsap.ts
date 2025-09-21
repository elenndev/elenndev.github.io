import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useGsap = () => {

  gsap.registerPlugin(useGSAP);
  return gsap;
}

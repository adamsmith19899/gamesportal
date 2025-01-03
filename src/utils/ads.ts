import { ADSENSE_CLIENT_ID } from './constants';

export const initializeAds = () => {
  try {
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
    document.head.appendChild(script);
  } catch (error) {
    console.error('Error initializing ads:', error);
  }
};
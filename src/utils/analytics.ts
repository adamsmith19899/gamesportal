import { GA_TRACKING_ID } from './constants';

export const initializeGA = () => {
  try {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  } catch (error) {
    console.error('Error initializing GA:', error);
  }
};

export const trackPageView = (path: string) => {
  try {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: path,
      });
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};
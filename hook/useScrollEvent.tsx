'use client';

import { useState, useEffect } from 'react';

export const useScrollEvent = () => {
  const [data, setData] = useState({
    y: 0,
    lastY: 0,
  });

  const handleScroll = () => {
    setData((last) => {
      return {
        y: window.scrollY,
        lastY: last.y,
      };
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return data;
};

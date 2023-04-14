'use client';

import { useState, useEffect, useRef } from 'react';

export const useScrollEvent = () => {
  const [hide, setHide] = useState(false);
  const [data, setData] = useState({
    y: 0,
  });
  const documentRef = useRef(document);

  const handleScroll = () => {
    setData((last) => {
      return {
        y: window.scrollY,
      };
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return data;
};

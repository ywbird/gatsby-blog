import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ToTopButton = styled.div`
  /* width: 40px;
  height: 40px; */
  font-family: var(--main-font);
  color: var(--font-color);
  cursor: pointer;
  letter-spacing: 0;
  transition: 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    /* letter-spacing: 2px; */
    /* transform: translateX(px); */
  }
`;

const ToTopEl = styled.div`
  @media (min-width: 935px) {
    position: fixed;
    display: block;
    left: 50%;
    bottom: 180px;
    transform: translateX(410px);
  }
  display: none;
`;

const ToTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const isWindow = typeof window === 'object';

  useEffect(() => {
    if (isWindow) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }
  }, []);

  const scrollToTop = () => {
    if (isWindow) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for smoothly scrolling
      });
    }
  };

  return (
    <ToTopEl>
      {showButton && (
        <ToTopButton onClick={scrollToTop} className="back-to-top">
          TOP
        </ToTopButton>
      )}
    </ToTopEl>
  );
};

export default ToTop;

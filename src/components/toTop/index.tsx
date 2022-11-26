import { Icon } from '@iconify/react';
import { FC, useEffect, useState } from 'react';

import './toTop.scss';

const ToTop: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const isWindow = typeof window !== `undefined`;

  useEffect(() => {
    if (isWindow) {
      window.addEventListener(`scroll`, () => {
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
        behavior: `smooth`, // for smoothly scrolling
      });
    }
  };

  return (
    <div id="to_top">
      {showButton && (
        <div onClick={scrollToTop} className="back-to-top">
          <Icon width={24} icon="mdi:chevron-up-box" />
          {/* TOP */}
        </div>
      )}
    </div>
  );
};

export default ToTop;

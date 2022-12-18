import { Link } from 'gatsby';
import { FC, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useColorMode } from 'theme-ui';

import './header.scss';

interface navItem {
  name: string;
  path: string;
  icon?: `${string}:${string}`;
}

interface props {
  links: navItem[];
  siteTitle: string;
}

const isDocument = typeof document !== `undefined`;

const Header: FC<props> = ({ links, siteTitle }) => {
  const [colorTheme, setColorTheme] = useColorMode();
  const [menus, setMenus] = useState<number[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const nextColorMode = colorTheme === `light` ? `dark` : `light`;

  useEffect(() => {
    if (isDocument) {
      document.body.classList.remove(nextColorMode);
      document.body.classList.add(colorTheme);
    }
  }, [colorTheme, nextColorMode]);

  useEffect(() => {
    if (isDocument) {
      const options = {
        root: document.querySelector(`nav`),
        rootMargin: `0px`,
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(
        (e: IntersectionObserverEntry[]) => {
          e.forEach((intersection) => {
            const index = parseInt(
              intersection.target.getAttribute(`index`) || `0`,
            );
            if (intersection.isIntersecting) {
              intersection.target.removeAttribute(`style`);
              if (index === 0) {
                setShowMenu(() => false);
              }
              setMenus((prev) => {
                const p = [...prev];
                p.splice(index, 1);
                return p;
              });
            } else {
              intersection.target.setAttribute(`style`, `opacity:0;`);
              if (index === 0) {
                setShowMenu(() => true);
              }
              setMenus((prev) => {
                const p = [...prev];
                p.push(index);
                return p;
              });
            }
          });
        },
        options,
      );

      const targets = document.querySelectorAll(`.nav-item`);

      targets.forEach((target, i) => {
        target.setAttribute(`index`, `${i}`);
        observer.observe(target);
      });
    }
  }, []);
  const toggle = () => {
    setColorTheme(nextColorMode);
  };
  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <div id="header">
      <header>
        <Link to="/" className="title">
          {siteTitle}
        </Link>
        <nav>
          <ul>
            {links.map((l, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link" to={l.path}>
                  {l.icon && <Icon width={20} icon={l.icon} />}
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="functional">
          <div className="color-toggle" onClick={toggle}>
            {colorTheme === `dark` ? (
              <Icon width={20} icon="fa-solid:moon" />
            ) : colorTheme === `light` ? (
              <Icon width={20} icon="fa-solid:sun" />
            ) : (
              <Icon width={20} icon="fa-solid:adjust" />
            )}
          </div>
          <div className="search">
            <Link className="search-btn" to="/search">
              <Icon width={20} icon="fa6-solid:magnifying-glass" />
            </Link>
          </div>
          {showMenu ? (
            <button
              aria-controls="primary-nav"
              aria-expanded="false"
              onClick={toggleMenu}
              className="hamburger"
            >
              <Icon
                width={20}
                icon={isMenuOpened ? `fa6-solid:plus` : `fa6-solid:bars`}
              />
            </button>
          ) : null}
        </div>
      </header>
      {/* {isMenuOpened ? ( */}
      <div
        data-state={isMenuOpened ? `opend` : `closed`}
        className="primary-nav"
      >
        <nav>
          <ul>
            {menus.map((item, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link" to={links[item].path}>
                  {links[item].icon && (
                    <Icon width={20} icon={links[item].icon || `:`} />
                  )}
                  {links[item].name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default Header;

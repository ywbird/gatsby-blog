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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--fa-solid"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256z"
                ></path>
              </svg>
            ) : colorTheme === `light` ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--fa-solid"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96zm246.4 80.5l-94.7-47.3l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5l-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4l-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3l-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5l47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7l100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4l94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0c-49.9-49.9-49.9-131.1 0-181c49.9-49.9 131.1-49.9 181 0c49.9 49.9 49.9 131.1 0 181z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--fa-solid"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8S8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184c0 101.705-82.311 184-184 184z"
                ></path>
              </svg>
            )}
          </div>
          <div className="search">
            <Link className="search-btn" to="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--fa6-solid"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64S64 128.5 64 208s64.5 144 144 144z"
                ></path>
              </svg>
            </Link>
          </div>
          {showMenu ? (
            <button
              aria-controls="primary-nav"
              aria-expanded="false"
              onClick={toggleMenu}
              className="hamburger"
            >
              {isMenuOpened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fa6-solid"
                  width="20"
                  height="22.86"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fa6-solid"
                  width="20"
                  height="22.86"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                  ></path>
                </svg>
              )}
            </button>
          ) : null}
        </div>
      </header>
      {/* {isMenuOpened ? ( */}
      <div
        data-state={isMenuOpened ? `opened` : `closed`}
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

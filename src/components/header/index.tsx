import { Link } from 'gatsby';
import { FC, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useColorMode } from 'theme-ui';

import './header.scss';

interface props {
  links: { name: string; path: string; icon?: `${string}:${string}` }[];
  siteTitle: string;
}

const Header: FC<props> = ({ links, siteTitle }) => {
  const [colorTheme, setColorTheme] = useColorMode();
  const nextColorMode = colorTheme === `light` ? `dark` : `light`;

  useEffect(() => {
    if (typeof document !== `undefined`) {
      document.body.classList.remove(nextColorMode);
      document.body.classList.add(colorTheme);
    }
  }, [colorTheme, nextColorMode]);

  const toggle = () => {
    setColorTheme(nextColorMode);
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
              <li key={i}>
                <Link className="nav-link" to={l.path}>
                  {l.icon && <Icon width={20} icon={l.icon} />}
                  {l.name}
                </Link>
              </li>
            ))}
            <li className="color-toggle" onClick={toggle}>
              {colorTheme === `dark` ? (
                <Icon width={20} icon="fa-solid:moon" />
              ) : colorTheme === `light` ? (
                <Icon width={20} icon="fa-solid:sun" />
              ) : (
                <Icon width={20} icon="fa-solid:adjust" />
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

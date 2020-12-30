import React from 'react';

import styles from './NavBar.module.scss';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  const logoClass = ['f-center', styles.logo].join(' ');
  const linkClass = ['f-center', styles.link].join(' ');
  const hrefClass = ['f-center', styles.linkHref].join(' ');
  return (
    <nav className={styles.NavBar}>
      <div className={logoClass}>
        <Link to='/'>Forecast App</Link>
      </div>
      <div className='spacer'></div>
      <ul className={styles.links}>
        <li className={linkClass}>
          <NavLink
            className={hrefClass}
            activeClassName={styles.homeActive}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li className={linkClass}>
          <NavLink
            className={hrefClass}
            activeClassName={styles.active}
            to='/search'
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

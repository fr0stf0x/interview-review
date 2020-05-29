import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '~/src/assets/images/logo.png';

import Drawer from '~/src/components/Drawer';
import MenuToggler from './components/MenuToggler';

import { navLinks } from './config';
import { useTheme } from '~/src/hooks/useTheme';
import Button from '~/src/components/Button';

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const { theme, changeTheme } = useTheme();
  const { pathname } = useLocation();

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  // Hard code as we having two themes right now
  const randomTheme = () => changeTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="flex items-center justify-between">
      <div className="hidden sm:flex">
        {navLinks.map((link, key) => (
          <Link className={`text-primary btn hover:bg-default-soft mr-4 ${pathname === link.to ? 'active' : ''}`} key={key} to={link.to} title={link.text}>{link.text}</Link>
        ))}
      </div>
      <MenuToggler onClick={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} toggle={toggleDrawer} placement='right' className="bg-default text-default">
        <div>
          <div className="sm:hidden">
            {navLinks.map((link, key) => (
              <Link className={`text-primary mb-4 block w-2/3 btn hover:bg-default-soft sm:mt-3 ${pathname === link.to ? 'active' : ''}`} key={key} to={link.to} title={link.text}>{link.text}</Link>
            ))}
          </div>
          <Button className="hover:bg-primary-soft sm:mt-4 lg:m-0" onClick={randomTheme}>
            Random theme
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

const Header = () => (
  <header className="flex items-center flex-no-wrap justify-between bg-primary px-4 py-2">
    <Link className="btn bg-transparent w-72 shadow-none h-12 py-1 rounded-lg hover:bg-opacity-25 hover:bg-default-soft" to='/'>
      <img
        className="object-cover w-full h-full"
        src={Logo}
        alt="Logo"
      />
    </Link>
    <NavBar />
  </header>
);

export default Header;

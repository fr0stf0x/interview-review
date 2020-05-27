import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from './config';

const Footer = () => (
  <footer className="bg-primary text-center py-2">
    <div className="py-4">
      <div className="flex px-80 items-center">
        <h5 className="flex-1 tracking-wide text-xl">Extend human potential </h5>
        <p className="flex-1 text-sm tracking-widest text-justify">At Cinnamon we are working to make a world where human creativity can flourish by using our AI technology to replace all the repititive, mind-numbing tasks that take place today.</p>
      </div>
      {/* <div className="mt-4">
        {footerLinks.map((link, key) => (
          <Link className="text-gray-300 mr-4" key={key} to={link.to} title={link.text}>{link.text}</Link>
        ))}
      </div>
      <div className="mt-2">
        {new Date().getFullYear()} - Cinnamon
      </div> */}
    </div>
  </footer>
);

export default Footer;

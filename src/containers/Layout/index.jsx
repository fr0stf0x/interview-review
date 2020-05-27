import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <>
    <Header />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </>
);

const Main = (props) => (
  <main className="flex-1 px-4 py-10 overflow-y-auto">
    {props.children}
  </main>
);

export default Layout;

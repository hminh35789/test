// import React from 'react'
// import Head from 'next/head'
import Announ from '../pages/announ'
// function Layout({ children }) {
//   return (
//     <div>
//         <Head>
//         <title>IKIGUY</title>
//         <meta name="description" content="A small brand with a big dream!" />
//         <link rel="icon" href="/favicon.ico" />
//         <Announ></Announ>
//       </Head>

//       {children }
//     </div>
//   )
// }

// export default Layout
import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core';
import NextLink from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
        <Announ></Announ>
      </Head>
      <AppBar position="static">
        <Toolbar>
       
        <NextLink href="/" passHref>
            <Link>
            
             <Typography className='brand'>amazona</Typography>
              
            </Link>
          </NextLink>
          <div className='grow'></div>
          <div>
          <NextLink href="/cart" passHref>
              <Link className='brand'>Cart</Link>
            </NextLink>
            <span></span>
            <NextLink href="/login" passHref>
              <Link className='brand'>Login</Link>
            </NextLink>
          </div>
            
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      {/* <footer>
        <Typography>All rights reserved. Next Amazona.</Typography>
      </footer> */}
    </div>
  );
}
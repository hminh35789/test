// import React from 'react'
// import Head from 'next/head'
import Announ from '../pages/announ'
import Image from 'next/image'
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
import { AppBar, Toolbar, Typography, Container, Link, Grid } from '@material-ui/core';
import NextLink from 'next/link';

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
       <title>{title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
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
         <footer className='footer'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         All right reserved. Design by Mynz{' '}
          <span className='s'>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
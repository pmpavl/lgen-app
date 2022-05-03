import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import NavBar from '../layout/NavBar';

function AppLayout({ children }) {
  return (
    <>
      <NavBar />
      <Box as="main" sx={{ mt: 10 }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Генератор Листочков</title>
        </Head>

        {children}
      </Box>
    </>
  );
}

export default AppLayout;

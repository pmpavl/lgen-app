import React from 'react';
import { Container, Typography, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

export default function PageIndex() {
  return (
    <Container>
      <Typography
        alignItems="center"
        justifyContent="center"
        variant="h4"
        fontWeight="700"
      >
        Конструктор листочков с задачами для преподавателей математических кружков.
        <NextLink href="/generate" passHref>
          <MuiLink
            underline="none"
            color="green"
          >
            Сгенерировать листочек.
          </MuiLink>
        </NextLink>
      </Typography>
    </Container>
  );
}

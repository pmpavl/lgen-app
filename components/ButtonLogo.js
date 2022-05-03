import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

function ButtonLogo() {
  return (
    <NextLink href="/" passHref>
      <MuiLink
        variant="h6"
        underline="none"
        fontWeight="700"
        color="inherit"
      >
        Lgen
      </MuiLink>
    </NextLink>
  );
}

export default ButtonLogo;

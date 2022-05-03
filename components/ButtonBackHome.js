import { Tooltip, IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NextLink from 'next/link';

function ButtonBackHome({ size }) {
  return (
    <NextLink href="/" passHref>
      <Tooltip title="Вернуться на домашнюю страницу">
        <IconButton
          color="inherit"
          size={size}
        >
          <HomeOutlinedIcon fontSize={size} />
        </IconButton>
      </Tooltip>
    </NextLink>
  );
}

export default ButtonBackHome;

import { Container, Typography } from '@mui/material';

export default function Page404() {
  return (
    <Container maxWidth="sm">
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        variant="h4"
        sx={{ fontWeight: '700' }}
      >
        404 - Страница не найдена
      </Typography>
    </Container>
  );
}

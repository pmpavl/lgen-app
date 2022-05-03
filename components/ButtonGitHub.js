import React from 'react';
import { Link, Tooltip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function ButtonGitHub() {
  return (
    <Link
      href="https://github.com/pmpavl/lgen-app"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    >
      <Tooltip title="GitHub">
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </Link>
  );
}

export default ButtonGitHub;

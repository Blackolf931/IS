import React from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { PaperContainer } from './styled/PaperContainer';
import { GridContainer } from './styled/GridContainer';

export const Login: React.FC = () => {
  // const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const btnstyle = { margin: '8px 0' };
  return (
    <GridContainer>
      <PaperContainer>
        <Grid>
          <h2>Sign In</h2>
        </Grid>
        <TextField label="Username" placeholder="Enter username" required />
        <TextField label="Password" placeholder="Enter password" type="password" required />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
          Sign in
        </Button>
        <Typography>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {' '}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          Do you have an account ? <Link href="#">Sign Up</Link>
        </Typography>
      </PaperContainer>
    </GridContainer>
  );
};

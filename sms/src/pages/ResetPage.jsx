import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../assets/img/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// eslint-disable-next-line react/prop-types
export default function ResetPage({ doSmth }) {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div>
      <Grid container component="main" sx={{ height: '100vh', width: "100vw", }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // borderRadius: "0 2em 2em 0"
          }}
        />
        <Grid item xs={12} sm={8} md={6} square sx={{ borderRadius: "0", }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h1" sx={{ m: "4em 0 0 0", p: ".5em 0 15px 0" }}>
              Reset Password
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "end"
              }}
            >
              <Grid>
                <Typography sx={{
                  color: "gray",
                  position: 'relative',
                  top: '0',
                  left: '-12.5em',
                  m: '1em'
                }}>
                  Let Us Help You
                </Typography>
              </Grid>
            </Grid>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <FormControl sx={{ mt: 1, }} margin="normal"
                required
                fullWidth
                id="email"
                label="Enter your registered email address"
                name="email"
                autoComplete="email"
                variant="outlined"
                autoFocus>
                <InputLabel htmlFor="outlined-adornment-password">Enter your registered email address</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'text'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Enter your registered email address"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='primary'
                sx={{ mt: 5, mb: 3, }}
              >
                Reset My Passwword
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2, }}
                onClick={() => { doSmth() }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
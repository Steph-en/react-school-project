import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';// import { Link } from 'react-router-dom';
import image from '../assets/img/childimage.jpg';
// import GoogleLogo from '../assets/img/googlelogo.png';
// import GoogleLogoSVG from '../assets/img/7123025_logo_google_g_icon.svg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

// eslint-disable-next-line react/prop-types
export default function SignIn({ doSmth }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", width: "100vw", borderRadius: "0" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            // borderRadius: "0 5em 4em 0"
          }}
        />
        <Grid item xs={13} sm={8} md={6} square sx={{ borderRadius: "0" }}>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                justifySelf: "center",
                alignSelf: "center",
                m: "3em 0 0 0",
                p: "0 0 20px 0",
              }}
            >
              Welcome to Preskool
            </Typography>
            <Grid>
              <Typography
                variant="h2"
                sx={{
                  p: "1em 0 1em 0",
                  color: "GrayText",
                  position: "relative",
                  top: "0",
                  left: "-6.5em",
                }}
              >
                Sign in
              </Typography>
            </Grid>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <FormControl
                sx={{ mt: 0 }}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Password"
                name="username"
                autoComplete="email"
                variant="outlined"
                autoFocus
              >
                <InputLabel htmlFor="outlined-adornment-username">
                  Username
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-username"
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountCircleRoundedIcon />
                    </InputAdornment>
                  }
                  label="Username"
                />
              </FormControl>
              <FormControl
                sx={{ mt: 2 }}
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
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
                  label="Password"
                />
              </FormControl>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  mt: "1em",
                }}
              >
                <Grid sx={{ color: "gray" }}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="secondary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid sx={{ p: "10px 0 0 0" }}>
                  <Button
                    variant="body2"
                    sx={{ textDecoration: "none", color: "#0A9CD5" }}
                    onClick={() => {
                      doSmth();
                    }}
                  >
                    Forgot password?
                  </Button>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 5, mb: 3 }}
              >
                Sign In
              </Button>
              <Grid sx={{ my: "1em" }}>
                <Divider>OR</Divider>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  my: "2em",
                }}
              >
                <Button
                  type="button"
                  variant="contained"
                  color="other"
                  sx={{ mt: 2, mb: 2 }}
                >
                  {/* <GoogleLogoSVG /> */}
                  {/* <GoogleLogo /> */}
                  <GoogleIcon color="gl"/>
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="other"
                  sx={{ mt: 2, mb: 2 }}
                >
                  <FacebookIcon color="fb" />
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="other"
                  sx={{ mt: 2, mb: 2 }}
                >
                  <TwitterIcon color="twiter" />
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="other"
                  sx={{ mt: 2, mb: 2 }}
                >
                  <LinkedInIcon color='linkedin'/>
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
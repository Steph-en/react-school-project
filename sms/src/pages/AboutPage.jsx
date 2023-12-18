// import * as React from 'react';
import UserDetails from '../components/UserDetails';
import { Grid } from '@mui/material';

export default function AboutPage() {
   return (
      <div>
         <Grid sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>
            <UserDetails />
         </Grid>
      </div>
   )
}
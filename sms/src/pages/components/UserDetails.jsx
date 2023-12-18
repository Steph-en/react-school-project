// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import image from '../assets/img/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg'
// import TableHead from '@mui/material/TableHead';
// import Paper from '@mui/material/Paper';

export default function UserDetails() {
   return (
      <div>
         <Card sx={{ maxWidth: 1000, height: 600, m: '160px' }}>
            <CardMedia
               sx={{
                  backgroundImage: `url(${image})`,
                  borderRadius: '20px 10px 20px 10px',
                  width: 200,
                  height: 140,
                  position: 'relative',
                  left: '240px',
                  m: '20px',
                  p: '20px',
               }}
               title="user details"
            />
            <CardContent>
               
            </CardContent>
         </Card>
      </div>
   )
}


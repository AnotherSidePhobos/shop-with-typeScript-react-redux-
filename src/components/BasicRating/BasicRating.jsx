import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  const [estimate, setEstimate] = React.useState(false)


  React.useEffect(() => {
    setTimeout(() => {
      setEstimate(false)
    }, 4000)
  }, [estimate])

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Estimate Product</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setEstimate(true);
        }}
      />
      {
        estimate ?
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">{`Thank you you rated it ${value}`}</Alert>
          </Stack>
          :
          ''
      }
    </Box>
  );
}
import { Box, Typography } from '@mui/material';

const AudioBible = () => {
  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        AudioBible Feature
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary">
        Coming Soon!
      </Typography>
    </Box>
  );
};

export default AudioBible;

// This is the main component of the application. It contains the NavBar component and the main content of the application.
import NavBar from './components/NavBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="md">
      <Box
        mt={4}
        mb={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src="/icons/sow-bible-icon-circle-120x120.png" 
          alt="Stream Of Wisdom Bible Logo"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
      <Box mt={2}>
        <NavBar />
      </Box>
    </Container>
  );
}

export default App;
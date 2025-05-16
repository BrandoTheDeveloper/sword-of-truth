// This is the main component of the application. It contains the NavBar component and the main content of the application.
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import LoginScreen from './components/LoginScreen'; 
import TopBar from './components/TopBar'; // Import TopBar
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { auth } from './firebase'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentBook, setCurrentBook] = useState('Genesis'); // State for current book
  const [currentChapter, setCurrentChapter] = useState('1'); // State for current chapter

  // Check authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is not logged in
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Container maxWidth="md">
      {isAuthenticated ? (
        // Render the main app content if authenticated
        <>
          <TopBar book={currentBook} chapter={currentChapter} /> {/* Pass props */}
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
        </>
      ) : (
        // Render the LoginScreen if not authenticated
        <LoginScreen />
      )}
    </Container>
  );
}

export default App;
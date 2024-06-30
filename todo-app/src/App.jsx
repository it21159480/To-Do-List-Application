// import React from 'react';
// import './App.css';
// import AddTask from './components/AddTask.jsx';
// import { Provider } from 'react-redux';
// import { store } from './store/store.jsx';
// import TaskList from './components/TaskList.jsx';
// import logo from './assets/logo.png';
// import { Container, Grid, Box } from '@mui/material';

// function App() {
//   return (
//     <Provider store={store}>
//       <Box className="bgcolor" sx={{  padding: 0 }}>
//         <Container>
//           <Box display="flex" justifyContent="center" mb={4}>
//             <img src={logo} alt="image not found" height="200px" />
//           </Box>
//           <Grid container spacing={3} justifyContent="center">
//             <Grid item xs={12} md={12}>
//               <AddTask />
//             </Grid>
//             {/* <Grid item xs={12} md={6}>
//               <Box sx={{ height: '100vh', overflow: 'auto' }}>
//                 <TaskList />
//               </Box>
//             </Grid> */}
//           </Grid>
//         </Container>
//       </Box>
//     </Provider>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';
import HamburgerMenu from './components/HamburgerMenu.jsx';  // Import HamburgerMenu component
import LoadingScreen from './components/LoadingScreen.jsx'; 
import logo from './assets/logo.png';
import { Container, Box } from '@mui/material';

function App() {

  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
      setLoading(false);
  };
  return (
    <Provider store={store}>
        {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Box className="bgcolor" sx={{  padding: 2 }}>
        <Container>
          <Box display="flex" justifyContent="center">
            <img src={logo} alt="image not found" height="180px" />
          </Box>
          <HamburgerMenu /> {/* Add the HamburgerMenu component */}
        </Container>
      </Box>
    </Provider>
  );
}

export default App;

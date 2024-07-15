import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Articles from './pages/Articles/Articles';
import CloudOffice from './pages/CloudOffice/CloudOffice';
import Community from './pages/Community/Community';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Store from './pages/Store/Store';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app-container">
          <Header />
          <div className="content-wrap">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/profile/cloudoffice" element={<CloudOffice />} />
              <Route path="/store" element={<Store />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

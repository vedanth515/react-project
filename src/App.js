
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { author } from './components/firebaseCogFig'; 
import { SelectionProvider } from './Context/SelectionContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Login/Login';
import DashBoardPage from './components/DashBoard/DashBoard';
import SignUpPage from './components/SignUp/SignUp';
import LunchPage from './components/LunchPage/LunchPage';
import Shirts from './components/Shirts/Shirts';
import Pants from './components/Pants/Pants';
import Shoes from './components/Shoes/Shoes';
import Brand from './components/Brand/Brand';
import Summary from './components/Summary/Summary'; 
import Pair from './components/Pair/Pair';

function App() {
  const [user, setUser] = useState(null);
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    const userLoggnedIn = onAuthStateChanged(author, (CurrentUser) => {
      setUser(CurrentUser);
      Setloading(false);
      return () => userLoggnedIn();
    });
  }, []);

  if (loading) {
    return <h2>Loading, please wait a moment...</h2>;
  }

  return (
    <SelectionProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LunchPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/dashboardPage" element={user ? <DashBoardPage /> : <Navigate to="/loginPage" />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/Pants" element={<Pants />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Summary" element={<Summary />} /> {/* NEW */}
        <Route path="/pair" element={<Pair />} />
      </Routes>
      <Footer />
    </SelectionProvider>
  );
}

export default App;


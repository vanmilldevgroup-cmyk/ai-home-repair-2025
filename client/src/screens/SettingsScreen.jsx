import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const SettingsScreen = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const { data } = await axios.get('/api/users/profile', config);
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };

    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <header className="flex h-20 items-center justify-between px-4">
        <Link to="/dashboard" className="flex h-10 w-10 items-center justify-center">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h1 className="text-xl font-bold">Settings & Profile</h1>
        <div className="h-10 w-10"></div>
      </header>
      <main className="flex-1 overflow-y-auto px-4 pb-8">
        <div className="flex flex-col gap-8">
          <section className="flex items-center gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm">
            <img alt="User profile" className="h-16 w-16 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ1gKUcaxqDNppHlhmKd7jhsuuTT-heALURJFruYdD8GeqfuUqvPc7gBMlHmbvEvKSfdKHbtSVIDxbvdTaifDX63d4g5hsCqS7e-EJ7HXEoiEeLYmDFLZ3gBpBhEqd1JbWSgTdTYoEpvONqphAjO-uIjeI_CFKL843GFzxaTejq1Jc3Qh20_0IDDEa23WLmLwaZOSJqtGj9p6lHuOZxYe1w3pDN_iVZMTb3HdU4xp14BetPXQ8Gze1X_PTkX9Du3PQdE4WiU1761S2" />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{email}</p>
            </div>
            <button className="flex h-10 w-10 items-center justify-center text-text-muted-light dark:text-text-muted-dark">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </section>
          {/* ... other settings sections ... */}
          <div className="mt-4">
            <button onClick={handleLogout} className="flex h-14 w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl bg-card-light dark:bg-card-dark px-5 text-lg font-bold leading-normal text-danger shadow-sm transition-colors hover:bg-red-50 dark:hover:bg-red-900/20">
              <span className="material-symbols-outlined">logout</span>
              <span className="truncate">Logout</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsScreen;

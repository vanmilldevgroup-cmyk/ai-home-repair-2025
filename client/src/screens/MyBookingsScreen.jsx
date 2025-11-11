import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const MyBookingsScreen = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('Upcoming');

  useEffect(() => {
    const fetchBookings = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      try {
        const { data } = await axios.get('/api/requests', config);
        setBookings(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch bookings. Please try again later.');
        setLoading(false);
        console.error(err);
      }
    };

    if (user) {
      fetchBookings();
    }
  }, [user]);

  const upcomingBookings = bookings.filter(b => b.status !== 'Completed');
  const pastBookings = bookings.filter(b => b.status === 'Completed');

  const activeBookings = activeTab === 'Upcoming' ? upcomingBookings : pastBookings;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-border-light bg-background-light/80 px-4 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
        <h1 className="text-2xl font-bold">My Bookings</h1>
        <Link to="/new-request" className="flex h-10 w-10 items-center justify-center rounded-full text-text-light dark:text-text-dark">
          <span className="material-symbols-outlined">add</span>
        </Link>
      </header>
      <main className="flex-1 flex-col px-4 pt-6 pb-20">
        <div className="mb-6 flex rounded-lg bg-slate-200/60 p-1 dark:bg-gray-700/60">
          <button onClick={() => setActiveTab('Upcoming')} className={`flex-1 rounded-md py-2.5 text-sm font-semibold ${activeTab === 'Upcoming' ? 'bg-white text-primary shadow-sm dark:bg-gray-600 dark:text-white' : 'text-text-muted-light dark:text-text-muted-dark'}`}>Upcoming</button>
          <button onClick={() => setActiveTab('History')} className={`flex-1 py-2.5 text-sm font-semibold ${activeTab === 'History' ? 'bg-white text-primary shadow-sm dark:bg-gray-600 dark:text-white' : 'text-text-muted-light dark:text-text-muted-dark'}`}>History</button>
        </div>
        <div className="flex flex-col gap-4">
          {activeBookings.map(booking => (
            <div key={booking._id} className="rounded-xl border border-border-light bg-white p-4 shadow-sm dark:border-border-dark dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">{new Date(booking.createdAt).toDateString()}</p>
                <div className={`rounded-full px-3 py-1 text-xs font-semibold ${booking.status === 'Completed' ? 'bg-info/10 text-info' : 'bg-success/10 text-success'}`}>{booking.status}</div>
              </div>
              <h2 className="mt-2 text-lg font-bold">{booking.title}</h2>
              {/* Add contractor info here when available */}
            </div>
          ))}
        </div>
      </main>
      {/* Footer Nav */}
    </div>
  );
};

export default MyBookingsScreen;

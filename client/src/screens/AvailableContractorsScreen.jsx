import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AvailableContractorsScreen = () => {
  const [contractors, setContractors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContractors = async () => {
      try {
        const { data } = await axios.get('/api/contractors');
        setContractors(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch contractors. Please try again later.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchContractors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative w-full min-h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 bg-background-light dark:bg-background-dark pt-4">
        <div className="flex items-center px-4 pb-2 justify-between">
          <Link to="/dashboard" className="flex size-12 shrink-0 items-center justify-start text-slate-800 dark:text-white">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight flex-1 text-center">Available Plumbers</h1>
          <button className="flex size-12 shrink-0 items-center justify-end text-slate-800 dark:text-white">
            <span className="material-symbols-outlined text-2xl">map</span>
          </button>
        </div>
        {/* Search Bar and Filters */}
        {/* ... */}
      </header>

      {/* Main Content: Contractor List */}
      <main className="flex flex-col gap-4 p-4 pt-0">
        {contractors.map((contractor) => (
          <div key={contractor._id} className="flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-800/50 p-4 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-1 flex-col gap-2">
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{contractor.name}</p>
                <div className="flex items-center gap-1 text-sm text-yellow-500 dark:text-yellow-400">
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <p className="font-bold">{contractor.rating}</p>
                  <p className="text-slate-500 dark:text-slate-400">({contractor.reviews} reviews)</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-normal">Starts at {contractor.price || '$75/hr'}</p> {/* Placeholder for price */}
              </div>
              <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${contractor.profilePicture}")` }}></div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {contractor.skills.map((tag, i) => (
                <span key={i} className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">{tag}</span>
              ))}
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-base font-bold">
              <span>Book Now</span>
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AvailableContractorsScreen;

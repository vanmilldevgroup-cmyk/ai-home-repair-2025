import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const NewRepairRequestScreen = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Plumbing');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };

    try {
      const { data } = await axios.post('/api/requests', { title, category, description }, config);
      console.log('Repair request created:', data);
      navigate('/dashboard'); // Or to a confirmation screen
    } catch (error) {
      console.error('Error creating repair request:', error);
    }
  };

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-lg flex-col bg-background-light dark:bg-background-dark font-display">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/10 bg-background-light/80 p-4 pb-3 dark:bg-background-dark/80 backdrop-blur-sm">
        <Link to="/dashboard" className="flex size-10 items-center justify-center text-slate-700 dark:text-slate-300">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold text-slate-900 dark:text-white">New Repair Request</h1>
        <Link to="/dashboard" className="w-10 text-sm font-bold text-primary">Cancel</Link>
      </header>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="flex-1 space-y-4 p-4">
        {/* What's the issue? */}
        <div className="flex w-full flex-col">
          <label className="flex flex-col">
            <p className="pb-2 text-base font-medium text-slate-800 dark:text-white">What's the issue?</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white p-4 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-primary" placeholder="e.g., Leaky Kitchen Faucet" />
          </label>
        </div>
        {/* Select a category */}
        <div className="flex w-full flex-col">
          <label className="flex flex-col">
            <p className="pb-2 text-base font-medium text-slate-800 dark:text-white">Select a category</p>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select h-14 w-full min-w-0 flex-1 appearance-none resize-none overflow-hidden rounded-lg border border-slate-300 bg-white p-4 pr-10 text-base font-normal leading-normal text-slate-900 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-primary">
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>HVAC</option>
              <option>Appliances</option>
              <option>Other</option>
            </select>
          </label>
        </div>
        {/* Describe the problem */}
        <div className="flex w-full flex-col">
          <label className="flex flex-col">
            <p className="pb-2 text-base font-medium text-slate-800 dark:text-white">Describe the problem in detail</p>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-input min-h-36 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white p-4 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-primary" placeholder="Provide as much information as possible to help us understand the issue."></textarea>
          </label>
        </div>
        {/* Add Photos or Videos */}
        <div className="flex w-full flex-col">
          <p className="pb-2 text-base font-medium text-slate-800 dark:text-white">Add photos or videos</p>
          <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-slate-300 px-6 py-10 text-center dark:border-slate-700">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">add_a_photo</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-base font-bold text-slate-900 dark:text-white">Upload Media</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">A picture is worth a thousand words!</p>
            </div>
          </div>
        </div>
        {/* Footer / Submit Button */}
        <footer className="sticky bottom-0 bg-background-light p-4 dark:bg-background-dark">
          <button type="submit" className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary text-base font-bold text-white shadow-lg shadow-primary/20">
            <span className="truncate">Submit Request</span>
          </button>
        </footer>
      </form>
    </div>
  );
};

export default NewRepairRequestScreen;

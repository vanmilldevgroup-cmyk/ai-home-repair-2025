import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardScreen = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const { data } = await axios.get('/api/dashboard');
        setDashboardData(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch dashboard data. Please try again later.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { userName, userProfilePicture, stats, recentActivity } = dashboardData;

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-lg flex-col group/design-root overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display">
      {/* ProfileHeader */}
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
          <div className="flex gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 min-h-16" style={{ backgroundImage: `url("${userProfilePicture}")` }}></div>
            <div className="flex flex-col justify-center">
              <p className="text-text-light-primary dark:text-text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em]">Welcome back, {userName}!</p>
              <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">Let's manage your home.</p>
            </div>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-card-light dark:bg-card-dark text-text-light-primary dark:text-text-dark-primary text-sm font-bold leading-normal tracking-[0.015em] @[480px]:w-auto border border-border-light dark:border-border-dark self-end">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>

      {/* Stats (KPI Cards) */}
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-medium leading-normal">Open Requests</p>
          <p className="text-text-light-primary dark:text-text-dark-primary tracking-light text-2xl font-bold leading-tight">{stats.openRequests}</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-medium leading-normal">Completed Jobs</p>
          <p className="text-text-light-primary dark:text-text-dark-primary tracking-light text-2xl font-bold leading-tight">{stats.completedJobs}</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-medium leading-normal">Total Spent</p>
          <p className="text-text-light-primary dark:text-text-dark-primary tracking-light text-2xl font-bold leading-tight">{stats.totalSpent}</p>
        </div>
      </div>

      {/* TextGrid (Quick Actions) */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 flex-col gap-3 rounded-xl border border-primary/20 bg-primary/10 dark:bg-primary/20 p-4 items-center justify-center h-28 cursor-pointer">
          <span className="material-symbols-outlined text-primary text-3xl">add_circle</span>
          <h2 className="text-primary text-base font-bold leading-tight">New Request</h2>
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 items-center justify-center h-28 cursor-pointer">
          <span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary text-3xl">calendar_month</span>
          <h2 className="text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-tight">Schedule</h2>
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 items-center justify-center h-28 cursor-pointer">
          <span className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary text-3xl">support_agent</span>
          <h2 className="text-text-light-primary dark:text-text-dark-primary text-base font-bold leading-tight">Support</h2>
        </div>
      </div>

      {/* SectionHeader */}
      <h2 className="text-text-light-primary dark:text-text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Activity</h2>

      {/* ListItems */}
      {recentActivity.map((item, index) => (
        <div key={index} className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div className={`text-text-light-primary dark:text-text-dark-primary flex items-center justify-center rounded-lg bg-card-light dark:bg-card-dark shrink-0 size-12 border border-border-light dark:border-border-dark`}>
              <span className={`material-symbols-outlined`}>{item.category === 'Plumbing' ? 'plumbing' : 'task_alt'}</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal line-clamp-1">{item.title}</p>
              <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal line-clamp-2">{item.description}</p>
            </div>
          </div>
          <div className="shrink-0">
            <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">{new Date(item.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      ))}

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-lg">
        <div className="flex h-16 w-full items-center justify-around border-t border-border-light bg-background-light/80 backdrop-blur-md dark:border-border-dark dark:bg-background-dark/80">
          <div className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-xs font-bold">Dashboard</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined">grid_view</span>
            <p className="text-xs">Projects</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined">mail</span>
            <p className="text-xs">Messages</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-text-light-secondary dark:text-text-dark-secondary">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-xs">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;

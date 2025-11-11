import React from 'react';
import { Link } from 'react-router-dom';

const NotificationsScreen = () => {
  // Placeholder data
  const notifications = {
    today: [
      {
        icon: 'calendar_month',
        title: 'Appointment Reminder',
        description: 'Your plumbing appointment with "Pipe Masters" is confirmed for 2:00 PM today.',
        time: 'Just now',
        unread: true,
      },
    ],
    yesterday: [
      {
        icon: 'chat',
        title: 'New Message',
        description: 'Electrician John D. sent you a message regarding your upcoming project.',
        time: 'Yesterday, 4:30 PM',
      },
    ],
  };

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-border-light bg-background-light/80 px-4 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
        <Link to="/dashboard" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </Link>
        <h1 className="text-xl font-bold">Notifications</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-4 pt-6 pb-2">
            <h2 className="text-sm font-semibold uppercase text-text-muted-light dark:text-text-muted-dark">New Today</h2>
          </div>
          {notifications.today.map((item, index) => (
            <div key={index} className={`relative overflow-hidden ${item.unread ? 'bg-unread-light dark:bg-unread-dark' : 'bg-background-light dark:bg-background-dark'}`}>
              <div className="relative z-10 flex w-full transform cursor-pointer items-start gap-4 border-b border-border-light p-4 transition-transform duration-300 ease-in-out hover:bg-slate-100 dark:border-border-dark dark:hover:bg-slate-800">
                <div className="relative mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{item.description}</p>
                  <p className="mt-1 text-xs text-secondary dark:text-secondary/90">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="px-4 pt-6 pb-2">
            <h2 className="text-sm font-semibold uppercase text-text-muted-light dark:text-text-muted-dark">Yesterday</h2>
          </div>
          {notifications.yesterday.map((item, index) => (
            <div key={index} className={`relative overflow-hidden bg-background-light dark:bg-background-dark`}>
              <div className="relative z-10 flex w-full transform cursor-pointer items-start gap-4 border-b border-border-light p-4 transition-transform duration-300 ease-in-out hover:bg-slate-100 dark:border-border-dark dark:hover:bg-slate-800">
                <div className="relative mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{item.description}</p>
                  <p className="mt-1 text-xs text-text-muted-light dark:text-text-muted-dark">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NotificationsScreen;

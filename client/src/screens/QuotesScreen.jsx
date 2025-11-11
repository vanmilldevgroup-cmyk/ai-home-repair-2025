import React from 'react';
import { Link } from 'react-router-dom';

const QuotesScreen = () => {
  // Placeholder data
  const request = {
    title: 'Leaky Faucet',
    category: 'Plumbing',
    requestedOn: 'May 15, 2024',
  };

  const quotes = [
    {
      contractor: 'FixIt-Right Plumbers',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOnLOY6N4RetUx8HyEsny6mZCNhWe5hlAi79cwm96cjJBd1pkKtBAUWzLzg9rWiVINSCiCs9JU7l7WbuKkMwqiNoI-4DPW_iQDk81eSx9iPUKKBqGhXByDp_2jQyG9duc22dxRZ7csLuWaeIQMK7OiR-IIXzsNzwXIqr1IIIK9dhNLVisdjDmyZYqG0qiFZA_Ur7crtxDYTgw-ZtZBhlr7omfFfZD3lkFDNsuR5hOUNRgwROr52Kr9g7VeemprUDm1QzXloh21HRM7',
      rating: 4.8,
      price: '$250',
      feedback: ['Great Communicator', 'Punctual', 'Slightly Pricy'],
    },
    {
      contractor: "Jane's Handyman",
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs3X1nyAjfTw2rCzLtRyXCK5pMebwqY2hVVG_I_EDUXGYmn2Po4bUVdZtpOY4B-gWfin7v9B3nHC7KuvTAA0r80agnhjZAmFWI41cLBxrYRQKSBBSxcmlHTTrtiGNd1JvVvi6Smjl0EBU_2n7DfQXoTDKF82JJgU2kvjYmbKAeGimXwhNvz1WXuIk42my_qJwvNV3pbs1syKTflzzlq1wmZZ7WTDgeE5GOafFP-pEPqI7igkj8ZRHBNHvIpu77uv9hBMz6DQhR2oGb',
      rating: 4.9,
      price: '$220',
      feedback: ['High-quality work', 'Good value'],
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background-light dark:bg-background-dark p-4 pb-3 shadow-sm">
        <Link to="/requests" className="flex size-10 shrink-0 items-center justify-center text-slate-800 dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Quotes for {request.title}</h1>
        <div className="flex size-10 shrink-0 items-center justify-center"></div>
      </header>
      <main className="flex-1 space-y-4 p-4 pb-24">
        <div className="flex items-center gap-4 rounded-xl bg-white dark:bg-slate-800/50 p-4 shadow-sm">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-2xl">{request.category === 'Plumbing' ? 'plumbing' : 'construction'}</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base font-medium leading-normal text-slate-900 dark:text-white">Kitchen Sink - {request.title}</p>
            <p className="text-sm font-normal leading-normal text-slate-500 dark:text-slate-400">Requested on {request.requestedOn}</p>
          </div>
        </div>
        {quotes.map((quote, index) => (
          <div key={index} className="flex flex-col items-stretch justify-start rounded-xl bg-white dark:bg-slate-800/50 shadow-sm">
            <div className="flex w-full grow flex-col items-stretch justify-center gap-4 p-4">
              <div className="flex items-center gap-4">
                <img className="size-12 shrink-0 rounded-full" src={quote.avatar} alt="Contractor avatar" />
                <div className="flex flex-col">
                  <p className="text-base font-bold text-slate-900 dark:text-white">{quote.contractor}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base text-yellow-500">star</span>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{quote.rating}</p>
                  </div>
                </div>
                <p className="ml-auto text-xl font-bold text-slate-900 dark:text-white">{quote.price}</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">AI Feedback</p>
                <div className="flex flex-wrap gap-2">
                  {quote.feedback.map((fb, i) => (
                    <div key={i} className="flex h-7 items-center justify-center gap-x-2 rounded-full bg-green-100 px-3 dark:bg-green-500/20">
                      <p className="text-sm font-medium leading-normal text-green-800 dark:text-green-300">{fb}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 p-4 dark:border-slate-700">
              <button className="flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-base font-medium leading-normal text-white">
                <span className="truncate">View Details</span>
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default QuotesScreen;

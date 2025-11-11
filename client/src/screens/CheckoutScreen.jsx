import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutScreen = () => {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <header className="flex h-16 items-center border-b border-border-light dark:border-border-dark px-4">
        <Link to="/dashboard" className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5">
          <span className="material-symbols-outlined text-text-light dark:text-text-dark">arrow_back</span>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold text-text-light dark:text-text-dark">Checkout</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-1 space-y-6 overflow-y-auto px-6 pb-28 pt-6">
        <section className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 p-4">
          <h2 className="text-base font-semibold text-text-light dark:text-text-dark">Leaky Faucet Repair</h2>
          <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">Scheduled for Tue, Dec 5, 2:00 PM</p>
        </section>
        <section>
          <h3 className="text-base font-semibold text-text-light dark:text-text-dark">Price Details</h3>
          <div className="mt-4 space-y-3 border-t border-border-light dark:border-border-dark pt-4">
            <div className="flex justify-between text-sm text-text-muted-light dark:text-text-muted-dark">
              <span>Service Fee</span>
              <span>$85.00</span>
            </div>
            <div className="flex justify-between text-sm text-text-muted-light dark:text-text-muted-dark">
              <span>Discount</span>
              <span>-$10.00</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-border-light dark:border-border-dark pt-4 font-bold text-text-light dark:text-text-dark">
            <span>Total</span>
            <span>$75.00</span>
          </div>
        </section>
        <section>
          <h3 className="text-base font-semibold text-text-light dark:text-text-dark">Payment Method</h3>
          {/* ... payment methods ... */}
        </section>
      </main>
      <footer className="fixed bottom-0 z-10 w-full max-w-md border-t border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 px-6 pb-8 pt-4 backdrop-blur-sm sm:pb-12">
        <button className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-5 text-lg font-bold leading-normal text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90">
          <span className="truncate">Confirm and Pay $75.00</span>
        </button>
      </footer>
    </div>
  );
};

export default CheckoutScreen;

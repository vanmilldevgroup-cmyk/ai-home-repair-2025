import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OnboardingScreen = () => {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsBHvK9srFIrDRAXBP3Zv-1k7MpGFK24OvpjTjWBXuw1AES_jpnW6A_qS8HYZlFfPhym1m7YyxlsdtJR9F9SJAhlHAPZyP9W4kQTm8zPEvkLXzg4X7Yrs-a4VrkUZAF1syTc1Q9bc_kOcHvScEsUoPyEe834BCRY0HG9mWaRL0K1H46H7DmwlldUvEpAL048Hsw4Dg4N_4Ex0WWkK4n1vpsQrCoKZiXTZdzAmjAXQGAsvL92WeR8Ucwi_tgbyGNO8-oeUkKQFUX1KC",
      title: "Home Repairs, Simplified",
      description: "Find and book vetted professionals for any job around the house in just a few taps.",
    },
    {
      imgSrc: "https://storage.googleapis.com/prod-chamaeleon-prod-assets/images/onboarding_2_182f4b4f-80ac-4b07-92e1-432fa07b22f6.svg",
      title: "Stay in the Loop",
      description: "Get real-time tracking, status updates, and direct communication with your service provider.",
    },
    {
      imgSrc: "https://storage.googleapis.com/prod-chamaeleon-prod-assets/images/onboarding_3_22c3065d-5310-44e2-9a3d-a417fd9c0490.svg",
      title: "Your Home's Command Center",
      description: "Manage all repair history, payments, and schedules from one organized hub.",
    }
  ];

  const handleNext = () => {
    if (slide < slides.length - 1) {
      setSlide(slide + 1);
    } else {
      // Navigate to login screen
      window.location.href = '/login';
    }
  };

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <header className="flex h-16 items-center justify-between px-6 pt-4">
        <div className="w-12"></div>
        <Link to="/login" className="shrink-0 text-base font-medium leading-normal text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark">Skip for now</Link>
      </header>
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
          <div className="flex w-full items-center">
            <div className="flex w-full shrink-0 flex-col items-center justify-between gap-8 px-6 text-center">
              <div className="flex w-full max-w-xs flex-col items-center gap-8">
                <img className="h-64 w-64 object-contain" src={slides[slide].imgSrc} alt="Onboarding illustration" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">{slides[slide].title}</h1>
                  <p className="text-base font-normal leading-relaxed text-text-muted-light dark:text-text-muted-dark">{slides[slide].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center gap-8 px-6 pb-8 pt-4 sm:pb-12">
        <div className="flex w-full flex-row items-center justify-center gap-3">
          {slides.map((_, i) => (
            <div key={i} className={`h-2.5 rounded-full ${i === slide ? 'w-6 bg-primary' : 'w-2.5 bg-text-muted-light/40 dark:bg-text-muted-dark/40'}`}></div>
          ))}
        </div>
        <div className="flex w-full px-0 py-0">
          <button onClick={handleNext} className="flex h-14 min-w-[84px] max-w-[480px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-5 text-lg font-bold leading-normal text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90">
            <span className="truncate">{slide === slides.length - 1 ? "Get Started" : "Next"}</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingScreen;

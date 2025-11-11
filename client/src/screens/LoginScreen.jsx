import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (isLogin) {
      try {
        const { data } = await axios.post('/api/users/login', { email, password }, config);
        dispatch({ type: 'LOGIN', payload: data });
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const { data } = await axios.post('/api/users', { name, email, password }, config);
        dispatch({ type: 'LOGIN', payload: data });
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="flex flex-col items-center justify-center pb-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-4xl">home_repair_service</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome to PrimeHome</h1>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-400">Your trusted partner in home repair management.</p>
          </div>
          {/* Toggle */}
          <div className="flex px-0 py-3">
            <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-200/80 p-1 dark:bg-slate-800">
              <label className={`flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-2 text-sm font-semibold leading-normal ${isLogin ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`} >
                <span className="truncate">Login</span>
                <input checked={isLogin} onChange={() => setIsLogin(true)} className="invisible w-0" name="auth-toggle" type="radio" value="Login" />
              </label>
              <label className={`flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-2 text-sm font-semibold leading-normal ${!isLogin ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                <span className="truncate">Sign Up</span>
                <input checked={!isLogin} onChange={() => setIsLogin(false)} className="invisible w-0" name="auth-toggle" type="radio" value="Sign Up" />
              </label>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-3">
            {!isLogin && (
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Full Name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} className="form-input h-14 w-full flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-slate-50 p-[15px] text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-primary" placeholder="Enter your full name" />
              </label>
            )}
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Email Address</p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-input h-14 w-full flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-slate-50 p-[15px] text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-primary" placeholder="Enter your email" />
            </label>
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium text-slate-700 dark:text-slate-200">Password</p>
              <div className="flex w-full flex-1 items-stretch">
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-input h-14 w-full flex-1 resize-none overflow-hidden rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 p-[15px] pr-2 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-primary" placeholder="Enter your password" type="password" />
                <div className="flex items-center justify-center rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 pr-[15px] text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
                  <span className="material-symbols-outlined text-2xl">visibility_off</span>
                </div>
              </div>
            </label>
            {isLogin && <Link to="#" className="text-right text-sm font-medium text-primary hover:underline">Forgot Password?</Link>}
            <div className="pt-4">
              <button type="submit" className="flex h-14 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
            </div>
          </form>
          {/* Social Logins and Terms */}
          <div className="flex items-center gap-4 py-6">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">OR</p>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-6 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300/50 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700/50 dark:focus:ring-offset-background-dark">
              <img alt="Google logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBZ98OdB28qulekydL_cgSR0AeS1CC-Z9qN0thui5tN7T5Ktto7jw8sqYwd6JmQl_WzQ3PzxiFn5fRalGCgZhzlsxJAQlK_5tgmznWmg_cIVM0vow0VqfdZthjhq9xJUQrN2RBGH4jU55b9B9aM9O3olREl3HX0ra5RW9VzvTVgci-Ztc0btb91YY186r6inQsLKIaAmU1SUG25ret1DR59A1KwtMKiCRL6ciUjzikYneISQKWxXsOJARv3iufJsK_YKEuyYfVeTZ1" />
              Continue with Google
            </button>
            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-transparent bg-black px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus:ring-white/50 dark:focus:ring-offset-background-dark">
              <img alt="Apple logo" className="h-6 w-6 dark:hidden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfIMIUfu8dlb1qGMmXGk5yHsPA3-bgmBmJCYZuyQGhBC2fJHuvxh_QNlrsb36uiQkoU4Huo1ZjG4kbc55xyNpWaOuk6bgCnnylr05Bn_GPE3unxRxOMx35rO2koD4YkZZUu_AaqjheslntVB9mBjxLJHDA7nMEoOw50_TC0IVCq1KFgzU7eA4M-qGJ0cMH-o3M1S1Kkkr03uani3jO1KtMs-RvW_TGxOu3QHkdF8FMt1ViiHAxHrjlmbv3ANAhpEo9TreIVOXcfShw" />
              <img alt="Apple logo" className="hidden h-6 w-6 dark:inline-block" src="https..."/>
              Continue with Apple
            </button>
          </div>
          <div className="pt-6">
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">
              By continuing, you agree to our <Link to="#" className="font-medium text-primary hover:underline">Terms of Service</Link> and <Link to="#" className="font-medium text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

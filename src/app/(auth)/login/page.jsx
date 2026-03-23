'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempt:', { email, password, rememberMe });
      // Handle login logic here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-md px-6 sm:px-8">
        {/* Header animation */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 font-heading">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Sign in to access your dashboard</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-5 animate-slide-up">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 transition-all duration-300">
              Email Address
            </label>
            <div className="relative group">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full px-4 py-3 bg-slate-700/50 border-2 rounded-xl text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-400 focus:bg-slate-600/50' 
                    : 'border-slate-600 focus:border-primary focus:bg-slate-600/50'
                } group-hover:border-slate-500`}
                placeholder="you@example.com"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-2 animate-fade-in">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2 transition-all duration-300">
              Password
            </label>
            <div className="relative group">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                className={`w-full px-4 py-3 bg-slate-700/50 border-2 rounded-xl text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                  errors.password 
                    ? 'border-red-500 focus:border-red-400 focus:bg-slate-600/50' 
                    : 'border-slate-600 focus:border-primary focus:bg-slate-600/50'
                } group-hover:border-slate-500`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary transition-colors duration-300"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m7.75 7.75l3.536 3.536m0-5.303a7.5 7.5 0 10-10.606 10.606" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-2 animate-fade-in">{errors.password}</p>
            )}
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 bg-slate-700 border-slate-600 rounded text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer transition-all duration-300"
              />
              <span className="ml-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Remember me
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:text-secondary transition-colors duration-300 font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform disabled:scale-100 active:scale-95 mt-8 relative overflow-hidden group"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            
            <div className="relative flex items-center justify-center">
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </div>
          </button>

          {/* Social login */}
          <div className="mt-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-slate-800 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-300 hover:bg-slate-600 hover:border-slate-500 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.889-2.126 5.413-5.033 5.813-.122.065-.231.164-.319.271-.288.295-.666.406-1.029.407-.393 0-.774-.104-1.059-.271-.408-.308-.546-.735-.546-1.201 0-.288.082-.603.187-.89.114-.295.258-.589.401-.879.144-.29.273-.579.313-.879A5.98 5.98 0 0 0 13.437 1.8c-2.458.308-4.564 2.064-5.192 4.583a4.997 4.997 0 0 0-.141.661.98.98 0 0 0-.765.935c0 .88.635 1.655 1.53 1.915-.071.165-.13.342-.137.531-.007.159 0 .314.007.47.007.156.023.312.052.463.118.772.792 1.373 1.920 1.373.89 0 1.646-.504 1.929-1.158.31-.779.407-1.967.407-3.696 0-.526-.021-1.251-.066-2.174-.045-.923-.11-1.856-.2-2.752.313.026.66.045 1.025.045 2.89 0 5.534-1.291 7.301-3.354z" />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-300 hover:bg-slate-600 hover:border-slate-500 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.707 8.707a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </form>

        {/* Sign up link */}
        <div className="mt-8 text-center animate-fade-in animation-delay-300">
          <p className="text-slate-400 text-sm">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-primary font-semibold hover:text-secondary transition-colors duration-300"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

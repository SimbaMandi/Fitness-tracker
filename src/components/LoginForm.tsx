import React, { useState } from 'react';
const VALID_EMAIL = 'fitness@gmail.com';
const VALID_PASSWORD = 'fitness';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setStatus({ type: 'success', message: 'Login successful!' });
      console.log('Logged in with:', { email, password });
    } else {
      setStatus({ type: 'error', message: 'Invalid email or password.' });
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-green-500">
            Welcome to your Fitness Tracker
          </h1>
          <p className="mt-1.5 text-base font-bold text-black-500">
            Login to your account
          </p>
        </div>
        {status && (
          <div
            className={`mb-4 rounded-xl p-3 text-center text-sm font-medium ${
              status.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="h-5 w-5 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="w-full rounded-xl border border-gray-300 py-3.5 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="h-5 w-5 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full rounded-xl border border-gray-300 py-3.5 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-colors focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#187A2B] py-3.5 text-lg font-bold text-white transition-colors hover:bg-[#136322] focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

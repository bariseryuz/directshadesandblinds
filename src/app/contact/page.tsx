"use client";

import { FormEvent, useState, useEffect } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // Add padding for fixed header
  useEffect(() => {
    document.body.style.paddingTop = 'var(--header-height)';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile(null);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Send to API route; echo response for now
    fetch('/api/contact', { method: 'POST', body: form })
      .then(async (res) => {
        const data = await res.json();
        console.log('Bid Request Response:', data);
        setStatus('Submitted — we will reach out shortly.');
        setSelectedFile(null);
      })
      .catch(() => setStatus('Submission failed. Please try again.'));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-3 sm:px-6 py-10 sm:py-20 md:py-24 bg-black">
        <h1 className="text-xl sm:text-3xl font-semibold">Request a Bid</h1>
        <p className="mt-2 sm:mt-4 text-xs sm:text-base text-white/80">Share project details and upload plans.</p>
        <form onSubmit={onSubmit} className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm text-white/70 mb-1">Company</label>
            <input name="company" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-600" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm text-white/70 mb-1">Contact Name</label>
              <input name="name" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-600" required />
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-white/70 mb-1">Email</label>
              <input type="email" name="email" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-600" required />
            </div>
          </div>
          <div>
            <label className="block text-xs sm:text-sm text-white/70 mb-1">Project Name & Location</label>
            <input name="project" className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-600" />
          </div>
          <div>
            <label className="block text-xs sm:text-sm text-white/70 mb-1">Scope</label>
            <textarea name="scope" rows={4} className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-600" />
          </div>
          <div>
            <label className="block text-xs sm:text-sm text-white/70 mb-1">Upload Plans (PDF)</label>
            <div className="relative">
              <input 
                type="file" 
                name="plans" 
                id="file-upload"
                accept=".pdf" 
                onChange={handleFileChange}
                className="hidden" 
              />
              <label 
                htmlFor="file-upload"
                className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-white/5 border-2 border-dashed border-white/20 hover:border-white/40 cursor-pointer transition-colors"
              >
                <svg className="w-5 h-5 mr-2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-white/70">
                  {selectedFile ? selectedFile : 'Choose PDF file'}
                </span>
              </label>
            </div>
            {selectedFile && (
              <p className="mt-1 text-xs text-green-400">✓ File selected: {selectedFile}</p>
            )}
          </div>
          <button 
            type="submit"
            className="w-full px-4 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg sm:rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Submit Request</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
        {status && <div className="mt-4 text-brand-300 text-sm">{status}</div>}
      </div>

      {/* Animated lines background - placed after content so it renders behind */}
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

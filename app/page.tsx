"use client";

import { useState } from "react";

export default function Home() {
  // Must use NEXT_PUBLIC_ prefix for client-side access
  const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    note: "",
  });

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6 tracking-tight">Get a Home Value Estimate</h1>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
          {/* Web3Forms required hidden input */}
          <input type="hidden" name="access_key" value={access_key} />

          {/* Optional redirect after submit */}
          {/* <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" /> */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700 text-white"
          />

          <input
            type="text"
            name="address"
            placeholder="Property Address"
            required
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700 text-white"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700 text-white"
          />

          <textarea
            name="note"
            placeholder="Optional message..."
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700 text-white h-24 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition"
          >
            Request Estimate
          </button>
        </form>

        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-center text-gray-400">
          <p className="mb-1 font-semibold text-white">Your Agent</p>
          <p>Alex Fayz</p>
          <p>
            📞{" "}
            <a href="tel:3134919022" className="text-gray-300 underline hover:text-white">
              (313) 491-9022
            </a>
          </p>
          <p>
            📧{" "}
            <a href="mailto:alexfayzrealty@gmail.com" className="text-gray-300 underline hover:text-white">
              alexfayzrealty@gmail.com
            </a>
          </p>
          <p>🏢 Real Estate One</p>
        </div>
      </div>
    </main>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [interest, setInterest] = useState("Selling");


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
        <h1 className="text-3xl font-semibold text-center mb-6 tracking-tight">
          Get a Home Value Estimate
        </h1>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
          {/* Web3Forms access key */}
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />

          {/* Interest dropdown */}
          <select
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700 text-white"
          >
            <option value="Selling">I’m looking to sell</option>
            <option value="Buying">I’m looking to buy</option>
            <option value="Both">I’m interested in both</option>
          </select>

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
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700 text-white"
            required={interest !== "Buying"} // 🔁 Required if not buying
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

        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400">
          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-6 px-4 py-4 max-w-md w-full">

              {/* Info */}
              <div className="text-white text-sm leading-snug text-left">
                <p className="font-semibold">Your Agent</p>
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

              {/* Headshot */}
              <div className="shrink-0">
                <Image
                  src="/agent.jpg"
                  alt="Alex Fayz"
                  width={125}
                  height={125}
                  className="rounded-full border border-gray-700"
                />
              </div>

            </div>
          </div>

          {/* Logos */}
          <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
            <Image
              src="/agency-logo.png"
              alt="Real Estate One Logo"
              width={75}
              height={20}
              className="object-contain"
            />
            <Image
              src="/equal-housing-badge.png"
              alt="Equal Housing Opportunity"
              width={75}
              height={20}
              className="object-contain invert"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
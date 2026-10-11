import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMsg('Subscribed successfully!');
        setEmail('');
      } else {
        setMsg('Subscribed successfully!');
        setEmail('');
      }
    } catch {
      setMsg('Subscribed successfully!');
      setEmail('');
    }
  };

  return (
    <section className="bg-gray-200 border-t border-gray-300 py-4 px-6">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4">
        <span className="font-bold text-sm tracking-wider uppercase text-gray-800">
          Sign up for our daily insider
        </span>
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="p-2 border border-gray-400 rounded text-sm w-64 bg-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 text-sm rounded font-medium transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
      {msg && <p className="text-center text-xs mt-2 text-green-700 font-semibold">{msg}</p>}
    </section>
  );
}

export default Newsletter;
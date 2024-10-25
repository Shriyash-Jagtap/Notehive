// app/pages/callback.tsx

"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const url = new URL(window.location.href);
      const error = url.searchParams.get('error');
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');

      if (error) {
        // Handle authentication errors
        console.error('Authentication error:', error);
        router.push('/register'); // Redirect to register or an error page
      } else if (code) {
        // Exchange the code for tokens by communicating with the auth server
        try {
          const response = await fetch('https://notehive-auth-server.vercel.app/api/auth/callback/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code, state })
          });

          if (response.ok) {
            // Handle successful authentication (e.g., store tokens)
            router.push('/protected');
          } else {
            // Handle server errors
            console.error('Failed to authenticate');
            router.push('/register');
          }
        } catch (err) {
          console.error('Error during authentication:', err);
          router.push('/register');
        }
      } else {
        // Handle unexpected scenarios
        router.push('/register');
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1c1c1c]">
      <p className="text-white">Processing authentication...</p>
    </div>
  );
}

// ./app/pages/callback.tsx

"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    // Extract query parameters from the URL
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token'); // Adjust based on your auth server's response
    const error = url.searchParams.get('error'); // Handle any errors

    if (error) {
      // Handle authentication errors
      console.error('Authentication error:', error);
      router.push('/register'); // Redirect to register or an error page
    } else if (token) {
      // Store the token securely
      // For security, use HTTP-only cookies via an API route
      fetch('/api/store-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })
      .then(response => {
        if (response.ok) {
          // Redirect to the protected page after successful token storage
          router.push('/protected');
        } else {
          // Handle errors during token storage
          console.error('Failed to store token');
          router.push('/register');
        }
      })
      .catch(err => {
        console.error('Error during token storage:', err);
        router.push('/register');
      });
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1c1c1c]">
      <p className="text-white">Processing authentication...</p>
    </div>
  );
}

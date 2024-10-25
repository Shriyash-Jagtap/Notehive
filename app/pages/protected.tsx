// app/pages/protected.tsx

import { GetServerSideProps } from 'next';
import cookie from 'cookie';

export default function ProtectedPage() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white flex items-center justify-center">
      <h1 className="text-3xl">Welcome to the Protected Page!</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const cookies = req.headers.cookie;

  if (!cookies) {
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      },
    };
  }

  const parsedCookies = cookie.parse(cookies);
  const token = parsedCookies.auth_token;

  if (!token) {
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      },
    };
  }

  // Optionally, verify the token's validity here by communicating with the auth server
  // For example, send the token to the auth server's verification endpoint

  const response = await fetch('https://notehive-auth-server.vercel.app/api/auth/verify-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      },
    };
  }

  // Optionally, pass user data to the page
  const data = await response.json();

  return {
    props: { user: data.user }, // Adjust based on your response structure
  };
};

// ./app/pages/protected.tsx

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

  // Optionally, verify the token's validity here

  return {
    props: {}, // Pass any necessary props to the page component
  };
};

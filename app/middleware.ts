// ./middleware.ts or ./app/middleware.ts

import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/register', // Redirect to register page if not signed in
  },
});

// Specify the matcher if needed
export const config = { matcher: ['/protected-route/:path*'] };

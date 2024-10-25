import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/register', // Redirect to register page if not signed in
  },
})

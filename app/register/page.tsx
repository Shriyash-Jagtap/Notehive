import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function Register() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))] opacity-10">
        {[...Array(3000)].map((_, i) => (
          <div key={i} className="w-[1px] h-[1px] bg-white rounded-full"></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header with Logo */}
        <header className="flex justify-start p-4">
          <div className="flex items-center space-x-2">
            {/* NoteHive Logo */}
            <Image 
              src="/images/notehive.png" 
              alt="NoteHive Logo" 
              width={40} 
              height={40} 
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white">NoteHive</span>
          </div>
        </header>

        <div className="flex flex-col justify-center items-center py-16">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-yellow-400">Create an Account</h1>
          </header>

          {/* Continue with Google Button */}
          <button
          onClick={() => signIn('google')}
          className="bg-[#1c1c1c] text-white px-5 py-2 rounded-lg border border-gray-600 shadow-md hover:bg-[#2c2c2c] transition duration-300 ease-in-out mb-8 flex items-center space-x-2"
        >
            {/* Google Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="20"
              height="20"
            >
              <path d="M19.9996 10.2297C19.9996 9.54995 19.9434 8.8665 19.8234 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9996 13.2722 19.9996 10.2297Z" fill="#4285F4"></path>
              <path d="M10.2002 20.0003C12.9518 20.0003 15.2723 19.1147 16.963 17.5862L13.6753 15.0875C12.7606 15.6975 11.5797 16.0429 10.2039 16.0429C7.54224 16.0429 5.28544 14.2828 4.4757 11.9165H1.08301V14.4923C2.81497 17.8691 6.34261 20.0003 10.2002 20.0003Z" fill="#34A853"></path>
              <path d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z" fill="#FBBC04"></path>
              <path d="M10.2002 3.95756C11.6547 3.93552 13.0605 4.47198 14.1139 5.45674L17.0268 2.60169C15.1824 0.904099 12.7344 -0.0292099 10.2002 0.000185607C6.34261 0.000185607 2.81497 2.13136 1.08301 5.51185L4.47195 8.08764C5.27795 5.71762 7.53849 3.95756 10.2002 3.95756Z" fill="#EA4335"></path>
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="w-full max-w-md bg-[#2c2c2c] p-8 rounded-lg shadow-lg">
            <form>
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-md border border-gray-600 focus:border-yellow-400 focus:ring-yellow-400 transition duration-300 ease-in-out"
                  placeholder="Enter your email"
                />
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300 ease-in-out"
              >
                Continue
              </button>
            </form>
          </div>

          <footer className="mt-8">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-yellow-400 hover:underline">
                Login
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

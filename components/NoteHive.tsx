import Image from 'next/image'
import Link from 'next/link'

export default function NoteHive() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))] opacity-10">
        {[...Array(3000)].map((_, i) => (
          <div key={i} className="w-[1px] h-[1px] bg-white rounded-full"></div>
        ))}
      </div>

      <div className="relative z-10">
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <div className="relative p-2">
              {/* Logo Container with Free-Flowing Light Spread */}
              <div
                className="absolute inset-0 opacity-60 transition-all duration-500 ease-in-out group-hover:opacity-80"
                style={{
                  background: `
                    radial-gradient(circle at 20% 20%, rgba(248, 211, 72, 0.4) 0%, transparent 60%),
                    radial-gradient(circle at 80% 30%, rgba(247, 201, 65, 0.3) 0%, transparent 60%),
                    radial-gradient(circle at 40% 80%, rgba(245, 184, 37, 0.4) 0%, transparent 60%),
                    radial-gradient(circle at 70% 70%, rgba(247, 201, 65, 0.3) 0%, transparent 60%),
                    radial-gradient(circle at 50% 50%, rgba(248, 211, 72, 0.2) 0%, transparent 60%),
                    radial-gradient(circle at 30% 60%, rgba(245, 184, 37, 0.3) 0%, transparent 60%)
                  `,
                  backgroundSize: '200% 200%',
                  filter: 'blur(60px)',
                  transform: 'scale(1)',
                }}
              ></div>
              <Image 
                src="/images/notehive.png" 
                alt="NoteHive Logo" 
                width={40} 
                height={40} 
                className="relative z-10 rounded-lg"
              />
            </div>
            <span className="text-xl font-bold">NoteHive</span>
          </div>
          <nav>
            <ul className="flex space-x-5">
              {/* Register and Login Buttons */}
              
              <li>
                <Link href="#" className="text-white px-4 py-1 rounded-md font-semibold hover:bg-white/[.01]">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="bg-yellow-400 text-black px-4 py-1 rounded font-semibold hover:bg-yellow-500">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-5xl font-bold text-yellow-400">NoteHive</h1>
              <h2 className="text-4xl font-bold">Powerful open-source note taking app</h2>
              <p className="text-xl text-gray-400">
              Write. Plan. Collaborate.
              </p>
              <div className="space-x-4">
                <Link href="#" className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500">
                  Get Started
                </Link>
                <Link href="#" className="bg-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-600">
                  View on GitHub
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
              <div className="relative w-80 h-80 mx-auto group">
                {/* Free-Flowing Organic Light Spread */}
                <div 
                  className="absolute inset-0 opacity-60 blur-3xl transition-all duration-500 ease-in-out group-hover:opacity-80"
                  style={{
                    background: `
                      radial-gradient(circle at 25% 25%, rgba(248, 211, 72, 0.3) 0%, transparent 60%),
                      radial-gradient(circle at 75% 35%, rgba(247, 201, 65, 0.3) 0%, transparent 60%),
                      radial-gradient(circle at 50% 50%, rgba(245, 184, 37, 0.3) 0%, transparent 60%),
                      radial-gradient(circle at 65% 75%, rgba(247, 201, 65, 0.2) 0%, transparent 60%),
                      radial-gradient(circle at 35% 65%, rgba(248, 211, 72, 0.2) 0%, transparent 60%)
                    `,
                    backgroundSize: '200% 200%',
                    filter: 'blur(80px)',
                    transform: 'scale(1)',
                  }}
                ></div>
                <Image
                  src="/images/notehive.png"
                  alt="NoteHive Logo"
                  width={1000}
                  height={1000}
                  className="relative z-10 rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-90"
                />
                {/* Additional Light Spread on Hover */}
                <div 
                  className="absolute inset-0 opacity-80 blur-4xl group-hover:blur-5xl transition-all duration-500 ease-in-out"
                  style={{
                    background: `
                      radial-gradient(circle at 15% 15%, rgba(248, 211, 72, 0.5) 0%, transparent 10%),
                      radial-gradient(circle at 85% 30%, rgba(247, 201, 65, 0.6) 0%, transparent 90%),
                      radial-gradient(circle at 40% 60%, rgba(245, 184, 37, 0.7) 0%, transparent 90%),
                      radial-gradient(circle at 70% 80%, rgba(247, 201, 65, 0.6) 0%, transparent 70%),
                      radial-gradient(circle at 30% 70%, rgba(248, 211, 72, 0.1) 0%, transparent 70%)
                    `,
                    backgroundSize: '400% 400%',
                    filter: 'blur(150px)',
                    transform: 'scale(1.1)',
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* <div className="mt-16">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Latest from the blog</h3>
            <ul className="space-y-2 text-gray-400">
              <li>2024-09-06: NoteHive 2.0 Release</li>
              <li>2024-02-24: NoteHive 1.5 Update</li>
              <li>2023-06-30: NoteHive 1.0 Launch</li>
            </ul>
          </div> */}
        </main>
      </div>
    </div>
  )
}

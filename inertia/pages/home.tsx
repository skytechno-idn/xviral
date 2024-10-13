import { Head } from '@inertiajs/react'
import { Input, ScrollShadow } from '@nextui-org/react'
import Navbar from '~/components/global/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col h-screen">
      <Navbar/>

      <div className="flex-1 flex flex-row overflow-y-hidden max-w-7xl w-full mx-auto px-6">
       
        <main className="flex-1 bg-indigo-100 overflow-y-auto relative ">
        <div className='sticky top-0 bg-black text-white'>
          <div className="flex justify-between items-center px-10 py-3">
            <div>
home
            </div>
            <div>
Rencently
            </div>
            <div>
Top
            </div>
            <div>
VIral
            </div>

          </div>
        </div>
         <div className='space-y-5 p-5'>
         {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <div className="font-bold">Post Title {index + 1}</div>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          ))}
         </div>
        </main>

        <nav className="order-first sm:w-56 overflow-y-auto">
          <div className='p-5'>
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <div className="font-bold">Post Title {index + 1}</div>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          ))}
          </div>
        </nav>

        <aside className="sm:w-72 bg-yellow-100 overflow-y-auto">
        <div className='p-5'>
        {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <div className="font-bold">Post Title {index + 1}</div>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

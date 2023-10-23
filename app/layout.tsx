import './globals.css'
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Image src="/logo.png" width={40} height={40} className="mx-auto" />
        <a href="/">
          <h1 className='text-2xl text-white font-bold mt-4'>Oli's Blog</h1>
        </a>
        <p className='text-slate-300'>Welcome to my tech blog.</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className='border-t border-slate-500 mt-12 py-6 text-center text-slate-400'>
        <br />
        <p>Developed by Oli</p>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <head>
      <body>
        <div className='mx-auto border max-w-2xl px-6'>
          {header}
          {children}
          {footer}
        </div>
      </body>
      </head>
    </html>
  )
}

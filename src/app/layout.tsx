import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="en" className='dark bg-gradient-to-r from-red-500 to-orange-500'>
      <head>
      <title>Luis' Site!</title>
      </head>
    <body>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  )
}

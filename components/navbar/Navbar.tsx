'use client'
import Home from '@/app/page'
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton, useUser  } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'

export const Navbar = () => {
  const {user, isSignedIn} = useUser()
  const path = usePathname()
  useEffect(()=>{}, [])
  return (
    <div>
        <header className=" shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Villas</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ">
            <Link href="/" className={`text-sm font-medium  cursor-pointer ${path =='/' && 'text-blue-600'}`}>
              For Sell
            </Link>
            <Link href="/" className={`text-sm font-medium  cursor-pointer ${path =='/listing' && 'text-blue-600'}`}>
            For Rent
            </Link>
            <Link href="/" className={`text-sm font-medium  cursor-pointer ${path =='/listing' && 'text-blue-600'}`}>
              Contact
            </Link>
          </nav>


         
          <div className="flex items-center justify-center space-x-4 ">
            <Button>
              Add Your Ad
            </Button>

            {
              isSignedIn? (
                <div>
                  <UserButton />
                </div>
              ) : (
                <Link href="/sign-in">
                  <Button variant={'outline'}>
                    Login
                  </Button>
                  </Link>
                
                
              )
            }
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          </div>
          {/* <button  className="md:hidden">
            <menu className="h-6 w-6" />
          </button> */}
        </div>
      </header>
    </div>
  )
}

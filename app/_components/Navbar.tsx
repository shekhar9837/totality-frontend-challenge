'use client'
import {  UserButton, useUser  } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'
import {  Menu, Plus, ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/context/CartContext'

export const Navbar = () => {
  const {user, isSignedIn} = useUser()
  const [isOpen, setIsOpen]= useState(false)
  const path = usePathname()
  const { cartItems } =
  useContext(CartContext);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
        <header className=" shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Villas</span>
          </Link>

          <div>


          <nav className="hidden md:flex space-x-6 ">
          
            <Link href="/filter-property" className={`text-sm font-medium  cursor-pointer ${path =='/listing' && 'text-blue-600'}`}>
            Filter Property
            </Link>
            <Link href="/" className={`text-sm font-medium  cursor-pointer ${path =='/' && 'text-blue-600'}`}>
              Property
            </Link>
            <Link href="/" className={`text-sm font-medium  cursor-pointer ${path =='/listing' && 'text-blue-600'}`}>
              Contact
            </Link>
          </nav>

         

          </div>
         
          <div className="flex flex-row items-center justify-center space-x-4 ">

            <Link href={'/add-new-listing'}>
            <Button className='hidden md:flex'>
             <Plus className='w-4 h-4 '/> Add Your Ad
            </Button>
            </Link>

          <Link href={'/cart'}>
            <div className=' relative flex w-12 h-12 p-2 items-center justify-center rounded-full border'>
            <ShoppingCart className='w-5 h-5' /> 
            <p className='absolute top-0 right-0 p-1 text-sm' >
             {cartItems.length}
              </p>   
            </div>
          </Link>

          <div  className='block md:hidden z-20'>
            <button onClick={toggleMenu}>
              { isOpen ?      <X />: <Menu /> }
            </button>
          </div>

          {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-4 z-50">
              <button 
            onClick={toggleMenu} 
            className="absolute top-6 right-6 text-black focus:outline-none"
          >
            <X size={30} />
          </button>

             <Link  onClick={toggleMenu} href="/filter-property" className={`text-2xl font-medium  cursor-pointer ${path =='/listing' && 'text-blue-600'}`}>
             Filter Property
             </Link>
             <Link  onClick={toggleMenu} href="/" className={`text-2xl font-medium  cursor-pointer ${path =='/' && 'text-blue-600'}`}>
               Property
             </Link>
             <Link  onClick={toggleMenu} href="/" className={`text-2xl font-medium  cursor-pointer ${path =='/listing' && 'text-blue-600'}`}>
               Contact
             </Link>
             </div>

          )}

            {
              isSignedIn? (
                <div>
                  <UserButton  />
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

'use client'

import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'

interface CartItem {
  id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  stock: number;
  images: string[];
}

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const increaseQty = (cartItem: CartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem.stock)) return;

    addToCart(item);
  };

  const decreaseQty = (cartItem: CartItem) => {
    if (cartItem?.quantity <= 1) {
      clearCart(cartItem);
      return;
    }

    removeFromCart(cartItem);
  };

  const amountWithoutTax = cartItems?.reduce(
    (acc: number, item: CartItem) => acc + item.quantity * item.price,
    0
  );

  const totalUnits = cartItems?.reduce(
    (acc: number, item: CartItem) => acc + item.quantity,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

  const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);

  if (cartItems.length === 0)
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <p>Oops! you added nothing.</p>
      </div>
    );

  return (
    <div>
      {cartItems?.length > 0 && (
        <section className="py-10">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <main className="md:w-3/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  {cartItems?.map((cartItem: CartItem) => (
                    <div key={cartItem.id}>
                      <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                        <div className="w-full lg:w-2/5 xl:w-2/4">
                          <figure className="flex leading-5">
                            <div>
                              <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                <Image src={cartItem.images[0]} alt={cartItem.name} className="w-full h-full object-cover" width={1000} height={1000} />
                              </div>
                            </div>
                            <figcaption className="ml-3">
                              <p>
                                <a href="#" className="hover:text-blue-600">
                                  {cartItem.name}
                                </a>
                              </p>
                              <p className="mt-1 text-gray-600"> {cartItem.title}</p>
                              <p className="mt-1 text-gray-600 line-clamp-1"> {cartItem.description}</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="w-24">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              data-action="decrement"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              onClick={() => decreaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input
                              type="number"
                              className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-900 outline-none custom-input-number"
                              name="custom-input-number"
                              value={cartItem.quantity}
                              readOnly
                            ></input>
                            <button
                              data-action="increment"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => increaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="leading-5">
                            <p className="font-semibold not-italic">${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                            <small className="text-gray-400"> ${cartItem.price} / per item </small>
                          </div>
                        </div>
                        <div className="flex-auto">
                          <div className="float-right">
                            <a
                              className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                              onClick={() => clearCart(cartItem)}
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />
                    </div>
                  ))}
                </article>
              </main>
              <aside className="md:w-1/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  <ul className="mb-5">
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Amount before Tax:</span>
                      <span>${amountWithoutTax}</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Total Units:</span>
                      <span className="text-green-500">{totalUnits} (Units)</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>TAX:</span>
                      <span>${taxAmount}</span>
                    </li>
                    <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                      <span>Total price:</span>
                      <span>${totalAmount}</span>
                    </li>
                  </ul>

                  <Link
                    href="/payment"
                    className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                  >
                    Checkout
                  </Link>
                </article>
              </aside>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CartPage;

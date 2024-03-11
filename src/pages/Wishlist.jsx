import React from 'react'
import { useSelector } from 'react-redux';
import Wish from '../components/Wish';
export default function Wishlist() {
  const {wishlistItems}=useSelector((state)=> state?.wishlists)
  console.log(wishlistItems)
  return (
    <>
          <div className='p-5 sm:pl-24'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>My Wishlist</h2>
              {/* <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link> */}
            </div>
            <div className='flex flex-wrap gap-4'>
            {
      wishlistItems?.map((Wishlist)=>{
        return <Wish Wishlist={Wishlist} key={Wishlist?._id} />
      })
    }
            </div>
          </div>
    </>
  )
}

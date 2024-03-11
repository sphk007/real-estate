import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaShare, FaParking, FaChair, FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { FaHouse, FaP } from "react-icons/fa6";
// import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/wishlists/wishSlice';
// import { list } from 'firebase/storage';

export default function Wish({ Wishlist }) {

  console.log(Wishlist)
  const dispatch=useDispatch();
  const addtowishHAndler=(Wishlist)=>{
    dispatch(addToWishList(Wishlist));
  }
  return (
    <div className='relative bg-white shadow-[0_3px_10px_rgb(0,0,0,0.5)] hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${Wishlist._id}`}>
      <button className='absolute top-[16px] right-[18px]  bg-white rounded-full p-2 z-10' onClick={()=>addtowishHAndler(Wishlist)}><CiHeart /></button>
        <img
          src={
            Wishlist.imageURL[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='Wishlist cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {Wishlist.name}
          </p>
          <div className='flex gap-x-2 text-sm mt-3'>
                    <div className='flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg'><FaHouse />{Wishlist.property_type}</div>
                    <p className="flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg">
                      {Wishlist.type === "rent" ? "For Rent" : "For Sale"}
                    </p>
                    {Wishlist.offer && (
                      <p className="flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg">
                        ${+Wishlist.regularPrice - +Wishlist.discountPrice} OFF
                      </p>
                    )}
                    {/* <div className='bg-violet-500 text-white px-3 rounded-full'>house country</div> */}
                  </div>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {Wishlist.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {Wishlist.description}
          </p>
          <p className='text-slate-500 mt-1 font-semibold '>
            $
            {Wishlist.offer
              ? Wishlist.discountPrice.toLocaleString('en-US')
              : Wishlist.regularPrice.toLocaleString('en-US')}
            {Wishlist.type === 'rent' && ' / month'}
          </p>
          {/* <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {Wishlist.bedrooms > 1
                ? `${Wishlist.bedrooms} beds `
                : `${Wishlist.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
              {Wishlist.bathrooms > 1
                ? `${Wishlist.bathrooms} baths `
                : `${Wishlist.bathrooms} bath `}
            </div>
          </div> */}
          <div className='flex gap-2 text-violet-700 mt-1'>
                    <div className='  flex gap-1 items-center'>
                      <FaBed className='text-xs' />
                      <div className='text-xs'>{Wishlist.bedrooms > 1
                        ? `${Wishlist.bedrooms} beds `
                        : `${Wishlist.bedrooms} bed `}</div>
                    </div>
                    <div className='  flex gap-1 items-center'>
                      <FaBath className='text-xs' />
                      <div className='text-xs'>{Wishlist.bathrooms > 1
                        ? `${Wishlist.bathrooms} baths `
                        : `${Wishlist.bathrooms} bath `}</div>
                    </div>
                    <div className='  flex gap-1 items-center'>
                      <FaParking className='text-xs' />
                      <div className='text-xs'> {Wishlist.parking ? "Parking spot" : "No Parking"}</div>
                    </div>
                    <div className='  flex gap-1 items-center'>
                      <FaChair className='text-xs' />
                      <div className='text-xs'>{Wishlist.furnished ? "Furnished" : "Unfurnished"}</div>
                    </div>
                  </div>
        </div>
      </Link>
    </div>
  );
}
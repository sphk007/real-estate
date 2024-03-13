import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import {
  FaShare,
  FaParking,
  FaChair,
  FaBed,
  FaBath,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaHouse, FaP } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../redux/wishlists/wishSlice";
import { list } from "firebase/storage";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Pano from "./Pano";

export default function ListingItem({ listing }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlists.wishlistItems);

  // Check if the current listing is in the wishlist
  useState(() => {
    if (wishlist.find((item) => item._id === listing._id)) {
      setIsInWishlist(true);
    }
  }, [wishlist, listing]);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(addToWishList(listing));
    } else {
      dispatch(addToWishList(listing));
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="relative bg-white shadow-[0_3px_10px_rgb(0,0,0,0.3)] hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <button
        className={`absolute top-[16px] right-[18px] bg-white rounded-full p-2 z-10 text-md`}
        onClick={toggleWishlist}
      >
        {isInWishlist ? <FaHeart fill="#e53e3e" /> : <CiHeart />}
      </button>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageURL[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex gap-x-2 text-sm mt-3">
            <div className="flex gap-2 items-center bg-blue-600 text-white py-2 px-3 rounded-lg">
              <FaHouse />
              {listing.property_type}
            </div>
            <p className="flex gap-2 items-center bg-blue-600 text-white py-2 px-3 rounded-lg">
              {listing.type === "rent" ? "For Rent" : "For Sale"}
            </p>
            {listing.offer && (
              <p className="flex gap-2 items-center bg-blue-600 text-white py-2 px-3 rounded-lg">
                ${+listing.regularPrice - +listing.discountPrice} OFF
              </p>
            )}
            {/* <div className='bg-violet-500 text-white px-3 rounded-full'>house country</div> */}
          </div>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-1 font-semibold ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          {/* <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div> */}
          <div className="flex gap-2 text-blue-600 mt-1">
            <div className="  flex gap-1 items-center">
              <FaBed className="text-xs" />
              <div className="text-xs">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </div>
            </div>
            <div className="  flex gap-1 items-center">
              <FaBath className="text-xs" />
              <div className="text-xs">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </div>
            </div>
            <div className="  flex gap-1 items-center">
              <FaParking className="text-xs" />
              <div className="text-xs">
                {" "}
                {listing.parking ? "Parking spot" : "No Parking"}
              </div>
            </div>
            <div className="  flex gap-1 items-center">
              <FaChair className="text-xs" />
              <div className="text-xs">
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

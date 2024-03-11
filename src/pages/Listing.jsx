// import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { FaShare, FaParking, FaChair, FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
// import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import { FaHouse, FaP } from "react-icons/fa6";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  // const [contact, setContact] = useState(false);
  const [username,setUsername]=useState("");
  const [message,setMessage]=useState("");
  const [phone,setPhone]=useState("");
  console.log(listing);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.id}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.id]);

  const handleuser=(e)=>{
    setUsername(e.target.value);
  }
  const handlephone=(e)=>{
    setPhone(e.target.value);
  }
  const handlemessage=(e)=>{
    setMessage(e.target.value);
  }

  return (
    <>
      <main>
        {/* {loading && (
          <p className="flex justify-center my-[10rem]">
            <div className="w-10 h-10 border-4 border-slate-500 rounded-full animate-spin border-t-transparent"></div>
          </p>
        )}
        {error && (
          <p className="text-center my-7 text-2xl">
            Oops..Something went wrong
          </p>
        )}
        {listing && !loading && !error && (
          <div>
            <Swiper navigation>
              {listing.imageURL.map((url) => (
                <SwiperSlide key={url} >
                  <div
                    className="h-[550px]"
                    style={{
                      background: `url(${url}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
              <FaShare
                className="text-slate-500"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              />
            </div>

            {copied && (
              <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
                Link Copied!
              </p>
            )}

            <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
              <p className="text-2xl font-semibold">
                {listing.name} - ${""}
                {listing.offer
                  ? listing.discountPrice.toLocaleString("en-US")
                  : listing.regularPrice.toLocaleString("en-US")}
                {listing.type === "rent" && " / month"}
              </p>
              <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
                <FaMapMarkerAlt className="text-green-700" />
                {listing.address}
              </p>
              <div className="flex gap-4">
                <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  {listing.type === "rent" ? "For Rent" : "For Sale"}
                </p>
                {listing.offer && (
                  <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                    ${+listing.regularPrice - +listing.discountPrice} OFF
                  </p>
                )}
              </div>
              <p className="text-slate-800">
                <span className="font-semibold text-black">Description - </span>
                {listing.description}
              </p>
              <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaBed className="text-lg" />
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} beds `
                    : `${listing.bedrooms} bed `}
                </li>
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaBath className="text-lg" />
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} baths `
                    : `${listing.bathrooms} bath `}
                </li>
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaParking className="text-lg" />
                  {listing.parking ? "Parking spot" : "No Parking"}
                </li>
                <li className="flex items-center gap-1 whitespace-nowrap ">
                  <FaChair className="text-lg" />
                  {listing.furnished ? "Furnished" : "Unfurnished"}
                </li>
              </ul>

              {currentUser &&
                listing.userRef !== currentUser._id &&
                !contact && (
                  <button
                    onClick={() => setContact(true)}
                    className="bg-slate-700 text-white rounded-lg uppercase p-3 hover:opacity-95"
                  >
                    Contact Landlord
                  </button>
                )}

              {contact && <Contact listing={listing} />}
            </div>
          </div>
        )} */}
        <section>
          {loading && (
            <p className="flex justify-center my-[10rem]">
              <div className="w-10 h-10 border-4 border-slate-500 rounded-full animate-spin border-t-transparent"></div>
            </p>
          )}
          {listing && !loading && !error && (

            <div className='container mx-auto min-h-[800px] mb-14'>
              {/* <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
              <div className='text-3xl font-semibold text-violet-600'></div>
            </div> */}
              <div className='flex flex-col items-start gap-8 lg:flex-row'>
                <div className='max-w-[768px]'>
                  <Swiper navigation>
                    {listing.imageURL.map((url) => (
                      <SwiperSlide key={url} >
                        <div
                          className="h-[550px]"
                          style={{
                            background: `url(${url}) center no-repeat`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </SwiperSlide>
                    ))}

                  </Swiper>
                  <div>
                    <h2 className='text-2xl font-semibold mt-5'>{listing.name}- ${""}
                      {listing.offer
                        ? listing.discountPrice.toLocaleString("en-US")
                        : listing.regularPrice.toLocaleString("en-US")}
                      {listing.type === "rent" && " / month"}</h2>
                    <div className="flex gap-2 items-center mt-4">
                      <FaMapMarkerAlt className="text-green-700 self-baseline mt-[0.4rem]" />
                      <h3 className='text-lg'>{listing.address}</h3>
                    </div>
                  </div>
                  <div className='flex gap-x-2 text-md mt-3'>
                    <div className='flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg'><FaHouse />{listing.property_type}</div>
                    <p className="flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg">
                      {listing.type === "rent" ? "For Rent" : "For Sale"}
                    </p>
                    {listing.offer && (
                      <p className="flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg">
                        ${+listing.regularPrice - +listing.discountPrice} OFF
                      </p>
                    )}
                    <div className='flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg'>
                      <p
                        className="flex gap-2 items-center bg-violet-900 text-white py-2 px-3 rounded-lg"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          setCopied(true);
                          setTimeout(() => {
                            setCopied(false);
                          }, 2000);
                        }}
                      >Share</p>
                    </div>

                    {copied && (
                      <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
                        Link Copied!
                      </p>
                    )}
                    {/* <div className='bg-violet-500 text-white px-3 rounded-full'>house country</div> */}
                  </div>
                  <p className="text-slate-800 mt-3">
                    <span className="font-semibold text-black">Description - </span>
                    {listing.description}
                  </p>
                  <div className='flex gap-x-6 text-violet-700 mt-3'>
                    <div className='  flex gap-x-2 items-center'>
                      <FaBed className='text-2xl' />
                      <div>{listing.bedrooms > 1
                        ? `${listing.bedrooms} beds `
                        : `${listing.bedrooms} bed `}</div>
                    </div>
                    <div className='  flex gap-x-2 items-center'>
                      <FaBath className='text-2xl' />
                      <div>{listing.bathrooms > 1
                        ? `${listing.bathrooms} baths `
                        : `${listing.bathrooms} bath `}</div>
                    </div>
                    <div className='  flex gap-x-2 items-center'>
                      <FaParking className='text-2xl' />
                      <div> {listing.parking ? "Parking spot" : "No Parking"}</div>
                    </div>
                    <div className='  flex gap-x-2 items-center'>
                      <FaChair className='text-2xl' />
                      <div>{listing.furnished ? "Furnished" : "Unfurnished"}</div>
                    </div>
                  </div>

                </div>
                <div className='flex-1 bg-white w-dvw sm:w-dvw mb-8 border border-gray-300 rounded-lg px-6 py-8 '>
                  <h1 className="text-violet-800 text-xl text-center uppercase">Contact:</h1>
                  <div className='flex items-center gap-x-4 mb-8 '>

                    <img src={listing.avatar} alt='landlord' className="rounded-full h-20 w-20 object-cover cursor-pointer self-center mt-2" />

                    <div>
                      <div className='font-bold text-lg'>{listing.landlordname}</div>
                      {/* <Link to='' className='text-violet-700 text-sm'>view listings</Link> */}
                    </div>
                  </div>
                  {/*form */}
                  <form className='flex flex-col gap-y-4'>
                    <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*'  onChange={handleuser}></input>
                    {/* <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='email*' defaultValue={currentUser.email} ></input> */}
                    <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone no*'onChange={handlephone}></input>
                    <textarea className='border border-green-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*'onChange={handlemessage}></textarea>
                   
                    <div className='flex gap-x-2 '>
                    <Link
                      to={`mailto:${listing.landlordemail}?subject= Hi I,am ${username} Regarding ${listing.name}.Contact:${phone}&body=${message}`}
                      className='bg-violet-700 text-center  hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'                    >
                      Send Message
                    </Link>
                      {/* <button className='bg-violet-700  hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button> */}
                      {/* <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>call</button> */}
                    </div>

                  </form>
                </div>
              </div>
            </div>
          )}
        </section>;
      </main>

    </>
  );
};

export default Listing;

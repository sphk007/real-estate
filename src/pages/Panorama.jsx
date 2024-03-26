// import React, { useEffect, useState } from 'react';
// import Pano from '../components/Pano';
// import { useParams } from 'react-router-dom';

// export default function Panorama() {
//     const params = useParams();
//     const [loading, setLoading] = useState(true);
//     const [listing, setListing] = useState(null);
//     const [error, setError] = useState(false);

//     useEffect(() => {
//         const fetchListing = async () => {
//             try {
//                 setLoading(true);
//                 const res = await fetch(`/api/listing/get/${params.id}`);
//                 if (!res.ok) {
//                     throw new Error('Failed to fetch');
//                 }
//                 const data = await res.json();
//                 console.log(data);
//                 if (data.success === false) {
//                     setError(true);
//                 } else {
//                     setListing(data);
//                 }
//             } catch (error) {
//                 setError(true);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (params.id) {
//             fetchListing();
//         }
//     }, [params.id]);
//     console.log(listing)

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error || !listing) {
//         return <div>Error: Failed to load listing</div>;
//     }

//     return <Pano imageUrl={listing.panorama} />;
// }

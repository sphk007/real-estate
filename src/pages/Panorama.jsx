import React from 'react';
import Pano from '../components/Pano';
// import Pano from
const Panorama = () => {
    const imageUrl = 'C:/Users/sphk0/OneDrive/Desktop/IIT/client/src/assets/img/pano3.jpg'; // Replace with your image URL
    return (
        <div>
            <h1>Panorama Viewer</h1>
            <Pano imageUrl={imageUrl} />
        </div>
    );
};

export default Panorama;
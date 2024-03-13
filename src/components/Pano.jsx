import { useState } from "react"
import { Pannellum } from "pannellum-react";

import fantasyNight from '../assets/img/image1.jpeg'
// import fantasyCave from '../assets/img/fantasy_cave.jfif'
export default function Pano ({imageUrl}) {
    console.log(imageUrl)
//   const [currentScene, setCurrentScene] = useState(fantasyNight);


  return (
    <>
        <div className="h-screen flex">
            <Pannellum
                width="100%"
                height="100%"
                image={fantasyNight}
                yaw={300}
                hfov={110}
                autoLoad
                autoRotate={-5}
                compass={true}
                showZoomCtrl={false}
                mouseZoom={false}
                onLoad={() => {
                    console.log("panorama loaded");
                }}
            >
                {/* <Pannellum.Hotspot
                    type="custom"
                    pitch={-10}
                    yaw={-120}
                    handleClick={(evt, name) =>
                        setCurrentScene(currentScene !== fantasyNight ? fantasyNight : fantasyCave)
                    }
                /> */}
            </Pannellum>

        </div>
    </>
)
};


// export default Pano;
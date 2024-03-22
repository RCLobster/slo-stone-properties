import { useState, useEffect } from "react";
import Property from "../../components/Property";

function Craig205() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const imgLinks = [
        '/content/properties/craig/Bathroom-large.jpg',
        '/content/properties/craig/bathroom-shower.jpg',
        '/content/properties/craig/bathroom-small.jpg',
        '/content/properties/craig/bedroom-back.jpg',
        '/content/properties/craig/bedroom-closet2.jpg',
        '/content/properties/craig/bedroom2.jpg',
        '/content/properties/craig/bedroom6.jpg',
        '/content/properties/craig/bedroom-back-door.jpg',
        '/content/properties/craig/hall2.jpg',
        '/content/properties/craig/Hall3.jpg',
        '/content/properties/craig/kitchen.jpg',
        '/content/properties/craig/sink-area.jpg',
        '/content/properties/craig/Living-room-to-breakfast-area.jpg',
        '/content/properties/craig/Living-Room.jpg',
        '/content/properties/craig/Outside-back.jpg',
        '/content/properties/craig/outside-side-yard.jpg',
        '/content/properties/craig/outside-yard.jpg',
    ]

    const firstLoad = [
        '/content/properties/craig/street-view.jpg',
        '/content/properties/craig/Bathroom-large.jpg',
        '/content/properties/craig/bathroom-shower.jpg',
    ]

    function preloadFiles(files) {
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(file);
                img.onerror = () => reject(new Error(`Failed to load image ${file}`));
                img.src = file;
            });
        });

        Promise.all(promises)
            .then(() => setImagesLoaded(true))
            .catch((error) => console.error("Failed to load images", error));
    }

    useEffect(() => {
        preloadFiles(firstLoad);
    }, []);


    return (
        <>
            {imagesLoaded ? (
                <Property
                    caroImgs={imgLinks}
                    address="205 Craig, San Luis Obispo, 93405"
                    mainImg={'/content/properties/craig/street-view.jpg'}
                    descTitle={'Lovely Home'}
                    descBody={`A one-story single family home close to Bishop's Peak on a corner lot. The home has a living room with a separate breakfast area. 4 bedrooms/2 bathrooms (one with 2 sinks), central heat, washer/dryer and kitchen appliances included, detached 2 car garage (lots of street parking) and yard with large deck. Unfurnished. Up to 5 occupants.`}
                    floorPlanImg={'/content/properties/craig/craig-floor-plan.jpg'}
                />
            ) : (
                <div className='property-start'></div>
            )}
        </>
    )
};

export default Craig205;
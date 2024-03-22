import { useState, useEffect } from "react";
import Property from "../../components/Property";

function Patricia226() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imgLinks = [
        '/content/properties/226-patricia/house-from-yard.jpg',
        '/content/properties/226-patricia/Bathroom1.jpg',
        '/content/properties/226-patricia/Bathroom2.jpg',
        '/content/properties/226-patricia/Complete-Hallway.jpg',
        '/content/properties/226-patricia/kitchen3.jpg',
        '/content/properties/226-patricia/kitchen4.jpg',
        '/content/properties/226-patricia/Living-kitchen.jpg',
    ]

    const firstLoad = [
        '/content/properties/226-patricia/house-from-street.jpg',
        '/content/properties/226-patricia/house-from-yard.jpg',
        '/content/properties/226-patricia/Bathroom1.jpg',
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
                    address="226 Patricia, San Luis Obispo, 93405"
                    mainImg={'/content/properties/226-patricia/house-from-street.jpg'}
                    descTitle={'Warm and Bright Open Concept Home'}
                    descBody={`A one-story single family home with Bishop's Peak in the background. The home has 4 bedrooms/2 bathrooms, hardwood floors, central heat, washer/dryer and kitchen appliances included, attached 1 car garage (lots of street parking) and yard. Unfurnished. `}
                    floorPlanImg={'/content/properties/226-patricia/226-Floor-Plan.jpg'}
                />
            ) : (
                <div className='property-start'></div>
            )}
        </>
    )
};

export default Patricia226;
import Property from "../../components/Property";

function Patricia214() {
    const imgLinks = [
        '../content/properties/214-patricia/Patio.jpg',
        '../content/properties/214-patricia/Bath2.jpg',
        '../content/properties/214-patricia/Bathroom.jpg',
        '../content/properties/214-patricia/Bedroom1.jpg',
        '../content/properties/214-patricia/Bedroom2.jpg',
        '../content/properties/214-patricia/Bedroom3.jpg',
        '../content/properties/214-patricia/Eating-area.jpg',
        '../content/properties/214-patricia/Hall-big.jpg',
        '../content/properties/214-patricia/Hall-smaller.jpg',
        '../content/properties/214-patricia/Kitchen-from-LR.jpg',
        '../content/properties/214-patricia/Kitchen.jpg',
        '../content/properties/214-patricia/Living-room.jpg',
    ];

    return(
        <Property 
            caroImgs={imgLinks}
            address="214 Patricia, San Luis Obispo, 93405"
            mainImg={'../content/properties/214-patricia/Front-of-house.jpg'}
            descTitle={'Charming Open Concept Home'}
            descBody={`A one-story 1600 sq' single family home with Bishop's Peak in the background. The home has 4 bedrooms/3 bathrooms, hardwood floors, central heat, washer/dryer and kitchen appliances included, detached 1 car garage (lots of street parking) and yard.  Up to 5 occupants`}
            floorPlanImg={'../content/properties/214-patricia/House-Plan.jpg'}
        />
    )
};



export default Patricia214;
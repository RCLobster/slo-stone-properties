import Property from "../../components/Property";

function Patricia226() {
    const imgLinks=[
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
    ]
    
    return(
        <Property 
            caroImgs={imgLinks}
            address="226 Patricia, San Luis Obispo, 93405"
            mainImg={'../content/properties/226-patricia/house-from-street.jpg'}
            descTitle={'Title'}
            descBody={'Words'}
            floorPlanImg={'../content/properties/226-patricia/226-Floor-Plan.jpg'}
        />
    )
};

export default Patricia226;
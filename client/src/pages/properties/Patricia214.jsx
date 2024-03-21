import Carousel from 'react-bootstrap/Carousel';

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


    return (
        <div className='propertyParent'>
            <h2>214 Patricia, San Luis Obispo, 93405</h2>
            <img className="mainPropImg" src="../content/properties/214-patricia/Front-of-house.jpg" />

            <h4 >Charming Open Concept Home</h4>
            <p className='propDesc'>A one-story 1600 sq' single family home with Bishop's Peak in the background. The home has 4 bedrooms/3 bathrooms, hardwood floors, central heat, washer/dryer and kitchen appliances included, detached 1 car garage (lots of street parking) and yard.  Up to 5 occupants</p>

            <Carousel className="carousel">
                {imgLinks.map((image) => {
                    return (
                        <Carousel.Item key={image.index}>
                            <img className='caroImg' src={image} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <img className='mainPropImg' src='../content/properties/214-patricia/House-Plan.jpg' />
        </div>
    )
};

export default Patricia214;
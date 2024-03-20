import Carousel from 'react-bootstrap/Carousel';

function Patricia214() {
    const imgLinks = [
        '../content/properties/214-patricia/Bath2.jpg',
        '../content/properties/214-patricia/Bathroom.jpg',
        '../content/properties/214-patricia/Bedroom1.jpg',
        '../content/properties/214-patricia/Bedroom2.jpg',
        '../content/properties/214-patricia/Bedroom3.jpg'
    ];


    return (
        <div>
            <h2>214 Patricia, San Luis Obispo, 93405</h2>
            <img className="mainImg" src="../content/properties/214-patricia/Front-of-house.jpg" />

            <Carousel className="carousel">

                {imgLinks.map((image) => {
                    return(
                    <Carousel.Item key={image.index}>
                        <img src={image} />
                    </Carousel.Item>
                )})};

                {/* <Carousel.Item>
                    <img src='../content/properties/214-patricia/Bath2.jpg' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='../content/properties/214-patricia/Bedroom1.jpg' />
                </Carousel.Item> */}

            </Carousel>
        </div>
    )
};

export default Patricia214;
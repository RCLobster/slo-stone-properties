import Carousel from 'react-bootstrap/Carousel';

export default function Property({ address, mainImg, caroImgs, floorPlanImg, descTitle, descBody }) {
    return (
        <div className='propertyParent fade-in'>
            <h2>{address}</h2>
            <img className="mainPropImg" src={mainImg} />

            <h4 >{descTitle}</h4>
            <p className='propDesc'>{descBody}</p>

            <Carousel className="carousel">
                {caroImgs.map((image, index) => {
                    return (
                        <Carousel.Item key={index}>
                                <img className='caroImg' src={image} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <img className='mainPropImg' src={floorPlanImg} />
        </div>
    )
}
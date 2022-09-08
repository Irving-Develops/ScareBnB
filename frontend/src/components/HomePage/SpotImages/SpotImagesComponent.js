import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import './SpotImages.css'

export default function SpotImagesComponent({images, spot}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(0)
    // const sessionUser

    const next = () => {
        if (currentIndex < (length - 1)) setCurrentIndex(prevState => prevState + 1)
    }

    const prev = () => {
        if (currentIndex > 0) setCurrentIndex(prevState => prevState - 1);

    }

    const isShown = (e) => {

    }
    
    // Set the length to match current children from props
    useEffect(() => {
        if(images) {
            setLength(images.length)
        }
    }, [images])

    return (
            <div className = "carousel-container" >
                <div className = "carousel-wrapper">
                    <button onClick={prev} className="left-arrow hidden">
                        &lt;
                    </button>
                    <div className = "carousel-content-wrapper">
                        <div className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images && images.map(image => (
                                <NavLink key={image.id} to={`/spots/${image.spotId}`}>
                                    <img className="card-img" src={image.url} alt={image.id}></img>
                                </NavLink>
                            ))} 
                            <NavLink to={`/spots/${spot.id}`}><img className="card-img" src='https://static.wikia.nocookie.net/d9b266f4-c611-4760-a880-e4a7f9fe0883/scale-to-width/755' alt='spooky house'></img></NavLink>)
                        </div>
                    </div>
                    <button onClick={next} className="right-arrow hidden">
                        &gt;
                    </button>
                </div>
            </div>
    )
                            }
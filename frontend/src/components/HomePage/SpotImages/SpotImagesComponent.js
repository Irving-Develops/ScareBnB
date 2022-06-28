import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import './SpotImages.css'

export default function SpotImagesComponent({images}) {
    // console.log('images prop ====> ', images.length)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(images.length)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    
    // Set the length to match current children from props
    useEffect(() => {
        setLength(images.length)
    }, [images])


    return (
            <div className = "carousel-container" >
                <div className = "carousel-wrapper">
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                    <div className = "carousel-content-wrapper">
                        <div className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images && images.map(image => (
                                <NavLink key={image.id} to={`/api/spots/${image.spotId}`}>
                                    <img className="card-img" src={image.url} alt={image.id}></img>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                </div>
            </div>
    )
}
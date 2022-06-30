import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
// import {thunkGetAllSpots} from '../../../store/spots';
import './SpotImages.css'

export default function SpotImagesComponent({images , spot}) {
    console.log(images)
    const selectorSpots = useSelector(state => state.spotReducer);
    console.log("state x", selectorSpots)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(0)

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
                                <NavLink key={image.id} to={`/spots/${image.spotId}`}>
                                    <img className="card-img" src={image.url} alt={image.id}></img>
                                </NavLink>
                            ))} <NavLink to={`/spots/${spot.id}`}><img className="card-img" src='https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt=''></img></NavLink>)
                        </div>
                    </div>
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                </div>
            </div>
    )
}
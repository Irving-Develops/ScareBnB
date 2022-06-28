import {useState, useEffect} from 'react';
// import {csrfFetch} from '../../store/csrf';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';
import SpotImagesComponent from './SpotImages/SpotImagesComponent'
import DetailsComponent from './SpotDetails/DetailsComponent';
import EditFormComponent from '../SpotPage/CreateSpot/EditFormComponent'
import './homePage.css';

export default function HomePageSpots() {
    const dispatch = useDispatch();
    const selectorSpots = useSelector(state => state.spotReducer);
    const [spots, setSpots] = useState([])
    console.log("selector in home page", selectorSpots)

    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch])

    useEffect(() => {
    }, [spots])

    useEffect(() => {
        if (selectorSpots) {
            setSpots(Object.values(selectorSpots));
        }
    }, [selectorSpots])


    

    return (
        <>
            <div className="card-wrapper"> 
                {spots && spots.map(spot =>(
                    <div key={spot.id} className="card">
                        <div className="img-carousel">
                            <SpotImagesComponent images={spot.Images} /> 
                        </div>
                        <div className = 'card-details' >
                            <DetailsComponent details={spot} />
                        </div>
                    </div>
                ))}
            </div>
            <EditFormComponent />

        </>
    )
}
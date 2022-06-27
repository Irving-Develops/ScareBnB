import {useState, useEffect} from 'react';
// import {csrfFetch} from '../../store/csrf';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';
import SpotImagesComponent from './SpotImages/SpotImagesComponent'
import DetailsComponent from './SpotDetails/DetailsComponent';
// import spotReducer from '../../store/spots';
import './homePage.css';

export default function HomePageSpots() {
    const dispatch = useDispatch();
    const selectorSpots = useSelector(state => state.spotReducer);
    console.log("selector spots====>", selectorSpots)
    const [title, setTitle] = useState('')
    const [spots, setSpots] = useState([])

    useEffect(() => {
        dispatch(thunkGetAllSpots())
        // console.log('sent dispatch')
    }, [dispatch])

    useEffect(() => {
        // console.log('spots ====>', spots)
    }, [spots])

    useEffect(() => {
        if (selectorSpots) {
            setSpots(Object.values(selectorSpots));
        }
    }, [selectorSpots])


    

    return (
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
    )
}
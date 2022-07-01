import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';
import {useHistory} from 'react-router-dom';

//components
import EditFormComponent from './EditSpot/EditFormComponent';
import DeleteComponent from './DeletePage/DeleteComponent';
import BookingComponent from '../Bookings/BookingComponent';

import './SpotPage.css';



export default function SpotComponent(){
    let {spotId} = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spotReducer[spotId]);
    const [upToDate, setUpToDate] = useState(false)

    useEffect(() => {
        dispatch(thunkGetAllSpots())
        setUpToDate(true)
    }, [dispatch])


    async function onSubmit(e) {
        e.preventDefault()
        setUpToDate(false)
    }

    if(!spot) return null;

    return (

        <>
        {spot && (
            <>
                <h2 id='spot-name'>{spot?.name}</h2>
                <p>{spot?.address}</p>
                <div className="img-container">
                    {spot.Images && spot.Images.map((image, index) => (
                        <div key={image.id} id={`img-${index}`}> 
                            <img src={image.url} alt="" ></img>
                        </div>
                    ))} 
                    {spot?.Images?.length < 1 && (
                        <>
                            <div id={`img-0`}> 
                                <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                            </div>
                            <div id={`img-1`}> 
                                <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                            </div>
                            <div id={`img-2`}> 
                                <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                            </div>
                            <div id={`img-3`}> 
                                <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                            </div>
                            <div id={`img-4`}> 
                                <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                            </div>
                        </>
                        
                    )}
                </div>
                <div className="details-container">
                    <div className="details">
                        <h3>Hosted by {spot?.User?.username}</h3>
                        <p>{spot?.history}</p>
                    </div>
                    <div className="booking-container">
                        <BookingComponent spotId={spot?.id}/>
                    </div>
                </div>
                    <>
                        <EditFormComponent spot={spot} onSubmit={onSubmit}/>
                        <DeleteComponent spot={spot} />
                    </>
            </>
        )}
        </>
    )
}

import {useParams, useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSpotThunk} from '../../store/spots';

//components
import EditFormComponent from './EditSpot/EditFormComponent';
import DeleteComponent from './DeletePage/DeleteComponent';
import BookingComponent from '../Bookings/BookingComponent';

import './SpotPage.css';



export default function SpotComponent(){
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    if(!sessionUser) history.push('/');
    let {spotId} = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spotReducer[spotId]);


    useEffect(() => {
        dispatch(getSpotThunk(spotId))
    }, [dispatch])

    if(sessionUser === undefined) history.push('/');
    if(!spot) return null;
    console.log("in spot component")
    console.log(spot, "spot")

    return (

        <>
        {spot && (
            <>
                <div id="header">
                    <div id="spot-name">
                        <h2 id='spot-name'>{spot?.name}</h2>
                        <p>{spot?.address}</p> 
                    </div>
                    <DeleteComponent spot={spot} />
                </div>
                <div className="img-container">
                    {/* <div className="main-img">
                        <img src={spot?.Images[0]?.url} alt="" ></img>
                    </div>
                    <div className="middle-imgs">
                        <img src={spot?.Images[1]?.url} alt="" ></img>
                        <img src={spot?.Images[2]?.url} alt="" ></img>
                    </div>
                    <div className="end-imgs">
                        <img src={spot?.Images[3]?.url} alt="" ></img>
                        <img src={spot?.Images[4]?.url} alt="" ></img>
                    </div> */}

                    {/* {spot.Images && spot.Images.map((image, index) => (
                        <div key={image?.id} id={`img-${index}`}> 
                            <img src={image?.url} alt="" ></img>
                        </div>
                        
                    ))}  */}
                    {(spot.Images === undefined || spot.Images.length === 0) ? (
                        <div className="img-container">
                            <div className="main" id={`img-0`}> 
                                <img src='https://static.wikia.nocookie.net/d9b266f4-c611-4760-a880-e4a7f9fe0883/scale-to-width/755' alt="Creel House" ></img>
                            </div>
                            <div id={`img-1`}> 
                                <img src='https://static.wikia.nocookie.net/d9b266f4-c611-4760-a880-e4a7f9fe0883/scale-to-width/755' alt="Creel House" ></img>
                            </div>
                            <div id={`img-2`}> 
                                <img src='https://static.wikia.nocookie.net/d9b266f4-c611-4760-a880-e4a7f9fe0883/scale-to-width/755' alt="Creel House" ></img>
                            </div>
                            <div id={`img-3`}> 
                                <img src='https://static.wikia.nocookie.net/d9b266f4-c611-4760-a880-e4a7f9fe0883/scale-to-width/755' alt="Creel House" ></img>
                            </div>
                            <div id={`img-4`}> 
                                <img src='https://static.wikia.nocookie.net/d9b266f4-c611-4760-a880-e4a7f9fe0883/scale-to-width/755' alt="Creel House" ></img>
                            </div>
                        </div>
                        
                    )
                        :
                    <>
                        <div className="main-img">
                            <img src={spot?.Images[0]?.url} alt="" ></img>
                        </div>
                        <div className="middle-imgs">
                            <img src={spot?.Images[1]?.url} alt="" ></img>
                            <img src={spot?.Images[2]?.url} alt="" ></img>
                        </div>
                        <div className="end-imgs">
                            <img src={spot?.Images[3]?.url} alt="" ></img>
                            <img src={spot?.Images[4]?.url} alt="" ></img>
                        </div>
                    </>
                }
                </div>
                <div className="details-container">
                    <div className="details">
                        <h3>Hosted by {spot?.User?.username}</h3>
                        <p>{spot?.history}</p>
                    </div>
                    
                    <div className="booking">
                        <BookingComponent spotId={spot?.id} price={spot?.price} />
                    </div>
                </div>
                    <>
                        <EditFormComponent spot={spot}/>
                    </>
            </>
        )}
        </>
    )
}

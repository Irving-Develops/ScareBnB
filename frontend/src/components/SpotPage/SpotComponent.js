import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';
import {useHistory} from 'react-router-dom';
import EditFormComponent from './EditSpot/EditFormComponent';
import DeleteComponent from './DeletePage/DeleteComponent';
import './SpotPage.css';



export default function SpotComponent(){
    let {spotId} = useParams();
    const dispatch = useDispatch();
    const selectorSpot = useSelector(state => state.spotReducer[spotId]);
    const [spot, setSpot] = useState([])
    console.log(spot.Images)

    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch, spotId])

    useEffect(() => {
    }, [spot])


    useEffect(() => {
        if (selectorSpot) {
            setSpot(selectorSpot);
        }
    }, [selectorSpot])
    

    return (
        <>
            <h2 id='spot-name'>{spot.name}</h2>
            <p>{spot.address}</p>
            <div className="img-container">
                    <div id={`img-${0}`}> 
                        <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                    </div>
                    <div id={`img-${1}`}> 
                        <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                    </div>
                    <div id={`img-${2}`}> 
                        <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                    </div>
                    <div id={`img-${3}`}> 
                        <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                    </div>
                    <div id={`img-${4}`}> 
                        <img src='	https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607' alt="" ></img>
                    </div>
                {spot.Images && spot.Images.map((image, index) => (
                    <div key={image.id} id={`img-${index}`}> 
                        <img src={image.url} alt="" ></img>
                    </div>
                ))} 
            </div>
            <div className="details-container">
                <div className="details">
                    {spot && spot.User && <h3>Hosted by {spot.User.username}</h3>}
                    {/* <hr /> */}
                    <p>{spot.history}</p>
                    {/* <hr /> */}
                </div>
                <div className="booking-container">
                    Booking placeholder
                </div>
            </div>
                {/* <li>{spot.price}</li> */}

            <h3>Edit Spot</h3>
            <EditFormComponent spot={spot.id}/>
            <DeleteComponent spot={spot.id} />
        </>
    )
}

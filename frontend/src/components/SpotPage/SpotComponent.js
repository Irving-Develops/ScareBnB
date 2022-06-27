import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';




export default function SpotComponent(){
    let {spotId} = useParams();
    const dispatch = useDispatch();
    const selectorSpot = useSelector(state => state.spotReducer[spotId]);
    const [spot, setSpot] = useState([])
    // const [user, setUser] = useState([]);
    console.log("selector ==> ", spot.User)

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
            {spot.Images && spot.Images.map(image => (
                <img key={image.id} src={image.url} alt=""></img>
            ))}
            <ul>
                <li>{spot.name}</li>
                <li>{spot.address}</li>
                <li>{spot.price}</li>
                <li>{spot.history}</li>
            </ul>
            {spot && spot.User && <h1>{spot.User.username}</h1>}

            <form></form>
        </>
    )
}

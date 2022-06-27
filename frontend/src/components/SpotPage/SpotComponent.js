import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';




export default function SpotComponent(){
    let {spotId} = useParams();
    const dispatch = useDispatch();
    const selectorSpot = useSelector(state => state.spotReducer[spotId]);
    const [spot, setSpot] = useState([])
    console.log("selector ==> ", selectorSpot)


    useEffect(() => {
        dispatch(thunkGetAllSpots())
        // console.log("sent dispatch")
    }, [dispatch])

    useEffect(() => {
        // console.log('spots ====>', spot)
    }, [spot])

    useEffect(() => {
        if (selectorSpot) {
            setSpot(selectorSpot);
        }
    }, [selectorSpot])


    return (
        <h1>Hello</h1>
    )
}

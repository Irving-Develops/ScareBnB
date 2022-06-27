import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';
import EditFormComponent from './EditForm/EditFormComponent';




export default function SpotComponent(){
    let {spotId} = useParams();
    const dispatch = useDispatch();
    const selectorSpot = useSelector(state => state.spotReducer[spotId]);
    const [spot, setSpot] = useState([])
    // const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [country, setCountry] = useState('');
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState(0);
    // const [history, setHistory] = useState('');
    // const [images, setImages] = useState([]);
    // const [user, setUser] = useState([]);
    // console.log("selector ==> ", spot.User)

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
            <EditFormComponent spot={spot}/>
            {/* <form>
                <div>
                    <label  htmlFor="address">Address</label>
                    <input type="text" id="address" value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div>
                    <label  htmlFor="city">city</label>
                    <input type="text" id="city" value={city}
                    onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div>
                    <label  htmlFor="state">state</label>
                    <input type="text" id="state" value={state}
                    onChange={(e) => setState(e.target.value)}/>
                </div>
                <div>
                    <label  htmlFor="country">country</label>
                    <input type="text" id="country" value={country}
                    onChange={(e) => setCountry(e.target.value)}/>
                </div>
                <div>
                    <label  htmlFor="name">name</label>
                    <input type="text" id="name" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label  htmlFor="price">price</label>
                    <input type="text" id="price" value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label  htmlFor="history">history</label>
                    <input type="text" id="history" value={history}
                    onChange={(e) => setHistory(e.target.value)}/>
                </div>
                <div>
                    <label  htmlFor="images">images</label>
                    <input type="text" id="images" value={images}
                    onChange={(e) => setImages(e.target.value)}/>
                </div>

            </form> */}
        </>
    )
}

import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkUpdateSpot, thunkGetAllSpots} from '../../store/spots';
import './EditSpot.css'


export default function EditSpot({spot,setShowModal}) {
        console.log(spot, "------")
        const user = useSelector(state => state.session.user);
        const [address, setAddress] = useState(spot.address);
        const [city, setCity] = useState(spot.city);
        const [state, setState] = useState(spot.state);
        const [country, setCountry] = useState(spot.country);
        const [name, setName] = useState(spot.name);
        const [price, setPrice] = useState(spot.price);
        const [history, setHistory] = useState(spot.history);
        const [url, setUrl] = useState([]);
        const dispatch = useDispatch();
        const [errors, setErrors] = useState([])
        const [hasSubmitted, setHasSubmitted] = useState(false);

        useEffect(() => {
            const err = [];

            if(!address.length) err.push("Please provide an address");
            if(!city.length) err.push("Please provide a city");
            if(!state.length) err.push("Please provide a state")
            if(!country.length) err.push("Please provide a country")
            if(!name.length) err.push("Please provide a name");
            if(price <= 0) err.push("Please set a valid price");
            if(!history.length) err.push("Please provide a history");

            return setErrors(err);

        }, [address,city,state,country,name,price,history])




        async function onSubmit(e){
            e.preventDefault();

            setHasSubmitted(true);
            if(errors.length) return alert('cannot submit')

            const payload = {
                address,
                city,
                state,
                country,
                name,
                price,
                history
            }


              await dispatch(thunkUpdateSpot(payload,spot.id));
              setShowModal(false)
            // if(updatedSpot) {
            //     hist.push(`/api/spots/${spot}`)
            // }
        }

    // if(!user) return null;
    if(user.id === spot.userId) {
        return (
                <div id="container">
                    <div className="form-header">
                        <h2>Edit Your Spot</h2>
                    </div>
                    <form onSubmit={onSubmit} id="form-container">
                        {hasSubmitted && errors.length > 0 && (
                            <div>
                            The following errors were found:
                            <ul>
                                {errors.map(error => (
                                <li key={error}>{error}</li>
                                ))}
                            </ul>
                            </div>
                        )}
                        <div id="input-container">

                            <input className="form-input" type="text" id="address" value={address}
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}/>
                            <hr />

                            <input className="form-input" type="text" id="city" value={city}
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}/>
                            <hr />

                            <input className="form-input" type="text" id="state" value={state}
                            placeholder="State"
                            onChange={(e) => setState(e.target.value)}/>
                            <hr />

                            <input className="form-input" type="text" id="country" value={country}
                            placeholder="Country"
                            onChange={(e) => setCountry(e.target.value)}/>
                            <hr />

                            <input className="form-input" type="text" id="name" value={name}
                            placeholder="Your haunted spot's name"
                            onChange={(e) => setName(e.target.value)}/>
                            <hr />

                            <input className="form-input" type="text" id="price" value={price}
                            placeholder="Price per night"
                            onChange={(e) => setPrice(e.target.value)}/>
                            <hr />
                            <textarea className="form-input" type="text" id="history" value={history}
                            placeholder="Tell us about your haunted spot..."
                            onChange={(e) => setHistory(e.target.value)}/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
        )
    }
}
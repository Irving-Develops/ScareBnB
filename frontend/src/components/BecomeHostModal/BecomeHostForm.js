import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkCreateSpot} from '../../store/spots';
import {useHistory} from 'react-router-dom';
import './BecomeHost.css';


export default function BecomeHostForm(props) {
        const hist = useHistory();
        const user = useSelector(state => state.session.user);
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [country, setCountry] = useState('');
        const [name, setName] = useState('');
        const [price, setPrice] = useState(0);
        const [history, setHistory] = useState('');
        const [errors, setErrors] = useState([])
        const dispatch = useDispatch();
        const [hasSubmitted, setHasSubmitted] = useState(false);


        useEffect(() => {
            const err = [];

            console.log("DATATYPE+++++++++++", parseInt(price, 10))
            
            if(!address.length) err.push("Please provide an address");
            if(!city.length) err.push("Please provide a city");
            if(!state.length) err.push("Please provide a state")
            if(!country.length) err.push("Please provide a country")
            if(!name.length) err.push("Please provide a name");
            if(price <= 0) err.push("Price must be more than $0.00");
            if (typeof (parseInt(price, 10)) !== 'number') err.push('Please enter a valid price')
            if(!history.length) err.push("Please provide a history");

            return setErrors(err);

        }, [address,city,state,country,name,price,history])


        const onSubmit = async(e) => {
            e.preventDefault();

            setHasSubmitted(true);
            if(errors.length > 0){
               return alert("cannot submit")
            }
            const payload = {
                userId: user.id,
                address,
                city,
                state,
                country,
                name,
                price,
                history
            }

            await dispatch(thunkCreateSpot(payload, hist));
            setHasSubmitted(false)
            setAddress("")
            setCity("")
            setState("")
            setCountry("")
            setName("")
            setPrice(0)
            setHistory("")
            setErrors([]);
            props.setShowModal(false)

        }

        // console.log(errors)
        if(!user ) return null;


    return (

        <div id="form-wrapper">
            <div id="form-header">
                <p>Host your haunted spot!</p>
            </div>
            <form onSubmit={onSubmit} id='form-content'>
                {hasSubmitted && errors.length > 0 && (
                    <div id='errors'>
                    <ul>
                        The following errors were found:
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

                    <input className="form-input" type="text" id="history" value={history}
                    placeholder="Tell us about your haunted spot..."
                    onChange={(e) => setHistory(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}
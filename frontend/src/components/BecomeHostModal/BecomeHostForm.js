import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkCreateSpot} from '../../store/spots';
import {useHistory} from 'react-router-dom';

export default function BecomeHostForm() {
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
        const [showModal, setModal] = useState(false);


        useEffect(() => {
            const err = [];

            console.log("DATATYPE+++++++++++", typeof(price))
            if(!address.length) err.push("Please provide an address");
            if(!city.length) err.push("Please provide a city");
            if(!state.length) err.push("Please provide a state")
            if(!country.length) err.push("Please provide a country")
            if(!name.length) err.push("Please provide a name");
            if(price <= 0) err.push("Price must be more than $0.00");
            if(typeof(+price) !== 'number') err.push('Please enter a valid price')
            if(!history.length) err.push("Please provide a history");

            return setErrors(err);

        }, [address,city,state,country,name,price,history])



        async function onSubmit(e){
            e.preventDefault();

            setHasSubmitted(true);
            if(errors.length) return alert('cannot submit')

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

              await dispatch(thunkCreateSpot(payload));
              setHasSubmitted(false)
              alert("Spot created")
              setAddress("")
              setCity("")
              setState("")
              setCountry("")
              setName("")
              setPrice(0)
              setHistory("")
              setErrors([]);
                //  hist.push('/spots/1');
        }


        if(!user ) return null;


    return (

        <div id="form-wrapper">
            <div id="form-header">
                <p>Host your haunted spot!</p>
            </div>
            <form onSubmit={onSubmit} id='form-content'>
                {hasSubmitted && errors.length > 0 && (
                    <div id='errors'>
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
                    placeholder="Your Haunted Spot's Name"
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
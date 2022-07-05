import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkCreateSpot} from '../../../store/spots';

export default function CreateFormComponent() {
        const user = useSelector(state => state.session.user);
        const hist = useHistory();
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [country, setCountry] = useState('');
        const [name, setName] = useState('');
        const [price, setPrice] = useState(0);
        const [history, setHistory] = useState('');
        const [url, setUrl] = useState([]);
        const [errors, setErrors] = useState([])
        const dispatch = useDispatch();
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
            //  return history.push('/');
        }


        if(!user) return null;


    return (
            <form onSubmit={onSubmit}>
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
                    <label htmlFor = "history" > history </label>
                    <input type="text" id="history" value={history}
                    onChange={(e) => setHistory(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>

    )
}
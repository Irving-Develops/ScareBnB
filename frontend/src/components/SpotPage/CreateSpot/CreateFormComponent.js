import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkCreateSpot} from '../../../store/spots';

export default function CreateFormComponent() {
        const user = useSelector(state => state.session.user);
        // const spot = useSelector(state => state.spotReducer);
        // let x = Object.values(spot);
        // console.log('spot' , x)
        // let spotId = Object.values(spot).length - 1
        // console.log(x[spotId].id)
        const hist = useHistory();
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [country, setCountry] = useState('');
        const [name, setName] = useState('');
        const [price, setPrice] = useState(0);
        const [history, setHistory] = useState('');
        const [url, setUrl] = useState([]);
        const dispatch = useDispatch();
        // hist.push(`/api/spots/66`)
        //     console.log("history", hist )

        async function onSubmit(e){
            e.preventDefault();

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

            const imagePayload = { 
                url
            }

            console.log("data", payload, imagePayload);

            let createdSpot = await dispatch(thunkCreateSpot(payload, imagePayload));
            console.log(createdSpot)
            // if(createdSpot) {
            //     hist.push(`/api/spots/66`)
            // }
        }
        if(!user) return null;
    return (
            <form onSubmit={onSubmit}>
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
                <div>
                    <label  htmlFor="url">images</label>
                    <input type="text" id="url" value={url}
                    onChange={(e) => setUrl(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>

    )
}
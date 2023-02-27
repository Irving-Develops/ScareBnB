import {useDispatch} from 'react-redux';
// import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom';

import {thunkDeleteSpot} from '../../store/spots';
import { useSelector } from 'react-redux';

export default function DeleteSpot({spot}) {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

        async function onDelete(spot) {
            console.log("inside delete")
         dispatch(thunkDeleteSpot(spot,history))
        
    }

    if(user.id === spot.userId){
        return (
            <button style={{width: '100px', height: '36px', backgroundColor: 'var(--main)', border: 'none', borderRadius: ' 8px', marginTop: '45px', color: 'white'}}  type="button" onClick={() => onDelete(spot.id)}> Delete Spot</button>
        )
    }
}
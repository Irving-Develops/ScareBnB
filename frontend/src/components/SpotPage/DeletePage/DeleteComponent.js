import {useDispatch} from 'react-redux';
// import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom';

import {thunkDeleteSpot} from '../../../store/spots';
import { useSelector } from 'react-redux';

export default function DeleteComponent({spot}) {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

        async function onDelete(spot) {
            console.log("inside delete")
         dispatch(thunkDeleteSpot(spot,history))
        
    }

    if(user.id === spot.userId){
        return (
            <button type="button" onClick={() => onDelete(spot.id)}> Delete Spot</button>
        )
    }
}
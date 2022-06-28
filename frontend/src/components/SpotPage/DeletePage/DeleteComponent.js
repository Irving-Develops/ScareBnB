import {useDispatch} from 'react-redux';
// import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom';

import {thunkDeleteSpot} from '../../../store/spots';


export default function DeleteComponent({spot}) {
    const history = useHistory();
    const dispatch = useDispatch();

    console.log("spot in delete component", spot)
        async function onDelete(spot) {
        dispatch(thunkDeleteSpot(spot,history))
        
    }
    return (
        <button type="button" onClick={() => onDelete(spot)}> Delete Spot</button>
    )
}
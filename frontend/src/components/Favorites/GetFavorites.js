import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react'
import {getFavoritesThunk} from '../../store/favorites'

export default function GetFavorites (){
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getFavoritesThunk(user?.id))
    })
    return (
        <h1>Testing favorites component</h1>
    )
}
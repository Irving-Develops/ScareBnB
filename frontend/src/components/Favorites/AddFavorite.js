import {useDispatch, useSelector} from 'react-redux'

import { addFavoriteThunk, deleteFavoriteThunk } from '../../store/favorites'
import './Favorite.css'


export default function AddFavorite ({spotId}){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user.id)
    const favorite = useSelector(state => state.favorites)
    console.log(favorite, "favorite")
    const handleFavorite = async(e) => {
        let newFavorite = {
            userId: sessionUser,
            spotId
        }

        await dispatch(addFavoriteThunk(newFavorite))

        console.log(e.target, "e")
        e.target.classList.toggle('favorited')

    }

    const handleUnfavorite = async(e) => {

        await dispatch(deleteFavoriteThunk(favorite))
        e.target.classList.toggle('favorited')
    }
    return (
        <svg id="favorite" onClick={favorite ? handleFavorite : handleUnfavorite} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
    )
}
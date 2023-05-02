import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { addFavoriteThunk, deleteFavoriteThunk, getFavoritesThunk } from '../../store/favorites'
import './Favorite.css'


export default function AddFavorite ({spotId}){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user.id)
    const favorite = Object.values(useSelector(state => state.favorites))

    useEffect(() => {
        dispatch(getFavoritesThunk(sessionUser))

    }, [dispatch, sessionUser])
    
    const handleFavorite = async(e) => {
        let isFavorite;
        if(favorite.length) {
            favorite.forEach(fav => {
                console.log("in for each")
                if(fav.spotId === spotId){
                    isFavorite = true
                }else {
                    isFavorite = false
                }
            })
            return
        }

        console.log(isFavorite, "test")
        let newFavorite = {
            userId: sessionUser,
            spotId
        }
        // await dispatch(addFavoriteThunk(newFavorite))
        e.target.classList.toggle('favorited')

    }

    const handleUnfavorite = async(e) => {

        await dispatch(deleteFavoriteThunk(favorite))
        console.log('firing delete')
        e.target.classList.toggle('favorited')
    }
    return (
        <svg id="favorite" onClick={handleFavorite} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
    )
}
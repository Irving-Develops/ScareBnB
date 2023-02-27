import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react'
import {getFavoritesThunk} from '../../store/favorites'

export default function GetFavorites (){
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const favorites =  Object.values(useSelector(state => state.favorites))
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        dispatch(getFavoritesThunk(user?.id))

    }, [dispatch, user])

    console.log(favorites.length, "favs")
    // if(!isLoaded) return null
    // return (
    //     <div>
    //         {favorites?.map(fav => (
    //             <div>
    //                 {fav.Spot?.name}
    //             </div>
    //             ))}
    //     </div>
    // )
}
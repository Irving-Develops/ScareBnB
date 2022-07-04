import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkGetAllSpots} from '../../store/spots';
import SpotImagesComponent from './SpotImages/SpotImagesComponent'
import DetailsComponent from './SpotDetails/DetailsComponent';
import './homePage.css';
import {useHistory} from 'react-router-dom';

export default function HomePageSpots() {
    const dispatch = useDispatch();
    const selectorSpots = useSelector(state => state.spotReducer);
    const spotArr = Object.values(selectorSpots)


    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch])

    if(spotArr.length < 1) return null;
    return (
        <>
            <div className="card-wrapper"> 
                {spotArr && spotArr.map(spot =>(
                    <div key={spot?.id} className="card">
                        <div className="img-carousel">
                            <SpotImagesComponent images={spot?.Images} spot={spot}/> 
                        </div>
                        <div className = 'card-details' >
                            <DetailsComponent details={spot} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
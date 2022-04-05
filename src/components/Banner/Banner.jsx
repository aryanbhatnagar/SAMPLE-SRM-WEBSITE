import React from 'react'
import './Banner.css'
import airbnb from '../../assets/logos/airbnb.png'
import linkedin from '../../assets/logos/linkedin.png'
import amazon from '../../assets/logos/amazon.png'
import facebook from '../../assets/logos/facebook.png'
import angellist from '../../assets/logos/angellist.png'
import ebay from '../../assets/logos/ebay.png'
import maps from '../../assets/logos/maps.png'
import quora from '../../assets/logos/quora.png'
import flipkart from '../../assets/logos/flipkart.png'
import youtube from '../../assets/logos/youtube.png'
import ig from '../../assets/logos/ig.png'
import pintrest from '../../assets/logos/pintrest.png'
import twitter from '../../assets/logos/twitter.png'
import github from '../../assets/logos/github.png'
import reddit from '../../assets/logos/reddit.png'
import upwork from '../../assets/logos/upwork.png'

function Banner() {
    return (
        <div className='banner'>
            <h2>Companies in collaboration with SRM: </h2>
        <div className='container'>
            <div className='photobanner'>
                <img className="first" src={airbnb} alt='airbnb'/>
                <img src={linkedin} alt='linkedin'/>
                <img src={amazon} alt='amazon'/>
                <img src={facebook} alt='facebook'/>
                <img src={angellist} alt='angellist'/>
                <img src={ebay} alt='ebay'/>
                <img src={reddit} alt='reddit'/>
                <img src={upwork} alt='upwork'/>

            </div>
        </div>
        
        </div>
    )
}

export default Banner

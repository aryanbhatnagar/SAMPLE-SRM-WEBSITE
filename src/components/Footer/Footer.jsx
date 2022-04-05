import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import activator from '../../assets/footer/activator.png'
import startup from '../../assets/footer/startup.png'
import ibm from '../../assets/footer/ibm.png'
import blockchain from '../../assets/footer/blockchain.png'




function Footer() {
    return (
        <div className='div__footer'>
            <div className='footer__details'>
            <div className='footer__comp'>
                <img src={logo} alt='logo'/>
                <h4>LEARN. LEAP. LEAD.</h4>
            </div>
            <div className='footer__lis'>
            <div className='footer__li'>
                <h3> Privacy Policy</h3>
                <h3> Terms & Conditions</h3>
                <h3> Campus Mail</h3>
                <h3> Student Portal</h3>
            </div>
            <div className='footer__li'>
                <h3><i class="fas fa-hand-point-right"></i> Newsletter</h3>
                <h3><i class="fas fa-hand-point-right"></i> Scholarship</h3>
                <h3><i class="fas fa-hand-point-right"></i> Student community</h3>
                <h3><i class="fas fa-hand-point-right"></i> Student Portal</h3>
            </div>
            <div className='footer__li'>
                <h3><i class="fas fa-hand-point-right"></i> Virtual Tour</h3>
                <h3><i class="fas fa-hand-point-right"></i> Spectrum</h3>
                <h3><i class="fas fa-hand-point-right"></i> Innovation and Incubation center</h3>
                <h3><i class="fas fa-hand-point-right"></i> Student Clubs</h3>
            </div>
            </div>


            </div>
            <div className='soc'>
            <div className='footer__socials'>
                <SocialIcon url="https://angel.co/" bgColor='#ffde49'/>
                <SocialIcon url="https://instagram.com/" bgColor='#ffde49'/>
                <SocialIcon url="https://facebook.com/" bgColor='#ffde49'/>
                <SocialIcon url="https://linkedin.com/" bgColor='#ffde49'/>
                <SocialIcon url="https://twitter.com/" bgColor='#ffde49'/>
            </div>
            </div>
            <div className='footer__bottom'>
                <p>2022 Copyright, SRM Institute of Science and Technology (formerly known as SRM University),All Rights Reserved</p>
               
            </div>
        </div>
    )
}

export default Footer


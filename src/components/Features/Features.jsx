import React from 'react'
import './Features.css'
import security from '../../assets/vectors/security.svg'
import trust from '../../assets/vectors/trust.svg'
import anonymous from '../../assets/vectors/anonymous.svg'
import website from '../../assets/vectors/website.svg'
import group from '../../assets/vectors/group.svg'
import business from '../../assets/vectors/business.svg'
import key from '../../assets/vectors/key.svg'


function Features() {
    return (
        <>
        <div className='div__features'>
            <div className='feature'>
                <img src={security} alt='feature' />
                <h2>Secure your Future with SRM's 100% placement guarantee</h2>
                <p>Secure, own and control your future with SRM</p>
            </div>
            <div className='feature'>
                <img className='trust' src={trust} alt='feature' />
                <h2>Choose from a diverse domain of Courses available</h2>
                <p>Courses from different streams are offered here at SRM and variety of different career options are available.</p>
            </div>
            <div className='feature'>
                <img src={anonymous} alt='feature' />
                <h2 className='anony'>Diverse student community</h2>
                <p>Meet new people from various cultures and broaden your learning horizon</p>
            </div>
        </div>

    <div className='div__features div__orange div__2'>
    <div className='feature'>
                <img src={business} alt='feature' />
                <h2>Performance Analysis</h2>
                <p>View your grades and statistics to improve</p>
            </div>
            <div className='feature'>
                <img src={key} alt='feature' />
                <h2>Student Login</h2>
                <p>One place for your data!</p>
            </div>
    </div>

    <div className='div__features div__orange div__2'>
    <div className='feature'>
                <img src={website} alt='feature' />
                <h2>Curriculum and Syllabus</h2>
                <p>One place for all the study materail</p>
            </div>
            <div className='feature'>
                <img src={group} alt='feature' />
                <h2 className='anony'>Student Community</h2>
                <p>Socialize and interact with your fellow stuents</p>
            </div>
        </div>
</>
    )
}

export default Features

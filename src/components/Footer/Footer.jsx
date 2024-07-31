import React from 'react'
import LogoFooter from '../../assets/logo-footer.png'
import '../../components/Footer/Footer.scss'


 
function Footer() {
    return (

        <footer className='footer'>
            <img className='footer__logo' src={LogoFooter} alt='Logo Kasa '/>
            <p className='footer__p'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
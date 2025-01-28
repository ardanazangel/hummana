import '@/app/components/Footer.css'

export default function Footer(){
    return(
        <section className='footer-section light-section'>
            <div className='footer-grid'>
                <div className='footer-info'>
                    <div className='footer-contacto'>
                        <div className='footer-tag'>Contacto</div>
                        <ul className='footer-list'>
                            <li className='footer-contact-item'>
                                Bali, Indonesia
                            </li>
                            <li className='footer-contact-item'>
                            +51 965 292 537
                            </li>
                            <li className='footer-contact-item'>
                            hello@lauravelaflorensa.com
                            </li>
                            <li className='footer-contact-item'>
                            @lauravelaflorensa
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}
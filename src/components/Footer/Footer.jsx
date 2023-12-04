import './Footer.scss'

import Logo from '../../assets/images/Logo-fotor-bg-remover-20231124132637.png'
import Mail from '../../assets/images/envelope-regular (1).svg'
import Facebook from '../../assets/images/facebook (1).svg'

export const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <section className="info">
                    <article>
                        <p>Troensevej 19H</p>
                        <p>9220 Aalborg Øst</p>
                        <p>E-mail: info@no-fo.dk</p>
                        <p>Telefon: 24 80 62 15 / 52 30 51 15</p>
                        <p>CVR 36167742</p>
                    </article>
                </section>
                <section className="logo">
                    <img src={Logo} alt="Logo in footer"/>
                </section>
                <section className="socials">
                    <img src={Facebook} alt="Facebook logo in footer link to facebook page" />
                    <img src={Mail} alt="E-mail logo in footer link to mail" />
                </section>
            </div>
        </footer>
    )
}
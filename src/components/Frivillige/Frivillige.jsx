import './Frivillige.scss'
import Joan from '../../assets/images/Joan.jpg'
import Clark from '../../assets/images/Clark.jpg'
import Jfrokost from '../../assets/images/jul.jpg'
import Gocart from '../../assets/images/gocart.jpg'
export const Frivillige = () => {
    return (
        <section className='frivillige'>
            <article className='Harticle'>
             <h2>Frivillige</h2>
             <div className='container'>
                    <p>Vi bygger på frivillighed og kan altid bruge friske frivillige.  </p>
                    <p>Vi har brug for dig, der vil hjælpe med:</p>
                <ul>
                    <li>At hente varer enten som chauffør eller hjælper </li>
                    <li>At sortere og registrere varer, når de kommer til lageret </li>
                    <li>At pakke varer til uddeling. Vi pakker 35 kasser om dagen </li>
                    <li>At uddele varer fra lageret. Vi uddeler overskudsmad kl. 16  </li>
                    <li>At gøre rent både i bilerne og på lageret. </li>
                </ul>
                </div>
            </article>
            <section className='infoFrivillige'>
                <figure>
                    <img src={Joan} alt="Joan protræt foto" />
                    <figcaption>
                        <h3>Joan</h3>
                        <p>Jeg har altid haft lyst til at arbejde som frivillig, når jeg fik tid.</p>
                        <p>Nu er jeg på efterløn og har tiden. Jeg har valgt Nordjysk Fødevareoverskud,</p>
                        <p>da jeg dér mener at kunne gøre en dobbelt forskel.</p>
                        <p>For det første redder vi en masse mad, som ellers vil blive kasseret og for det andet deler vi det ud til familier, som er økonomisk trængte.</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Clark} alt="Clark protræt foto" />
                    <figcaption>
                        <h3>Clark</h3>
                        <p>Det at være frivillig giver mig nogle forpligtelser og noget at stå op til.</p>
                        <p>jeg er førtidspensionist, så det at kunne give noget tilbage til andre og tanken om at kunne bekæmpe madspild og sørge for at andre får glæde af det, betyder rigtig meget for mig.</p>
                        <p>Samtidig holder jeg meget af det sociale, det giver mig.</p>
                    </figcaption>
                </figure>
            </section>
        </section>
    )
}
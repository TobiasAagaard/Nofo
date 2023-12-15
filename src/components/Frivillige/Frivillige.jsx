import './Frivillige.scss'
import Joan from '../../assets/images/Joan.jpg'
import Clark from '../../assets/images/Clark.png'
import Jfrokost from '../../assets/images/jul.png'
import Gocart from '../../assets/images/gocart.png'
export const Frivillige = () => {
    return (
        <section className='frivillige' id='Frivillige'>
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
                    <img src={Clark} className='haighlight' alt="Clark protræt foto" />
                    <figcaption className='blue'>
                        <h3>Clark</h3>
                        <p>Det at være frivillig giver mig nogle forpligtelser og noget at stå op til.</p>
                        <p>jeg er førtidspensionist, så det at kunne give noget tilbage til andre og tanken om at kunne bekæmpe madspild og sørge for at andre får glæde af det, betyder rigtig meget for mig.</p>
                        <p>Samtidig holder jeg meget af det sociale, det giver mig.</p>
                    </figcaption>
                </figure>
            </section>
           
            <section className='aktiviteter'>
            <h2>Tideligere begivenheder for vores frivillige</h2>
                <div className="grid">
                <div className='cardContainer'>
                    <div className="card">
                        <img className='front' src={Jfrokost} alt="" />
                        <div className="back blue">
                            <h3>Julefrokosten før det går løs med pakkespil</h3>
                        </div>
                    </div>
                </div>

               
                <div className='cardContainer'>
                    <div className="card">
                        <img className='front' src={Gocart} alt="" />
                        <div className="back">
                            <h3>På gokartbanen ved Mou</h3>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            

        </section>
    )
}
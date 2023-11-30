import './About.scss'

import outside from '../../assets/images/udenfor.jpg'
export const About = () => {
    return (
        <section id="about">
            <article>
            <h2 className='about'>Om os</h2>
            <div className='underline'></div>
                <figure>
                
                    <figcaption>
                    <h2>Vi er en lokal social miljøorganisation, der fokuserer på bæredygtighed og social ansvarlighed. Vi er også en socialøkonomisk non-profit virksomhed.</h2>
                    <p>Alle ugens dage kører Nordjysk Fødevareoverskud vareture, hvor vi henter overskudsmad hos producenter, grossister og detailhandlende. Vi indsamler gode spiselige fødevarer.</p>
                    <p>De fordeles til økonomisk trængte familier, unge på lave sociale ydelser, pensionister og andre, hvor en kasse med mad er en betydelig hjælp i den daglige husholdning.</p>
                    <p> Derudover samarbejder vi med varmestuer og herberger i Aalborg Kommune. Andre sociale initiativer henter også overskudsmad efter behov.  </p>
                    <p>Vi står ikke på gaden mere. I januar 2016 flyttede vi til egne lokaler på Troensevej 19H i Aalborg Øst.</p>
                    </figcaption>
                    <img src={outside} alt="" />
                </figure>
            </article>
        </section>
    )
}
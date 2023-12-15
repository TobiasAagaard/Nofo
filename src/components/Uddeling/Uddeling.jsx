import style from "./uddeling.module.scss";

export const Uddeling = () => {
  return (
    <>
      <div className={style.uHeader} id="Uddeling">
        <h2>Uddeling af overskudsmad </h2>
      </div>

      <div className={style.uContainer}>
        <article>
          <h4>For organisationer: </h4>
          <p>
            Organisationer, der modtager overskudsmad fra os, skal være
            almennyttige og målgruppen skal være socialt udsatte mennesker. Det
            koster kr. 2.000 i gebyr pr. halve år at blive tilknyttet vores
            madspildsprojekt. Vi har udlevering for organisationer tirsdag og
            onsdag kl. 8.15 – 9.00.
          </p>
        </article>
        <article>
          <h4>For børnefamilier og andre, der har brug for hjælp:</h4>
          Vi er et madspildsprojekt og alle, der henter mad hos os, bliver en
          del af projektet. Det betyder, at holdningen til overskudsmaden skal
          være positiv. Det kan kræve ekstra arbejde at sortere og tilberede
          maden. Vi henter maden, modtagerne skal gøre sin del af arbejdet ved
          at bruge maden.
        </article>
        <article>
          Vi prioriterer børnefamilier. Andre er også velkomne, men er du enlig
          bør du søge andre tilbud. Vi uddeler færdigpakkede kasser og det er
          vældig meget mad til enkeltpersoner.
        </article>
        <article>
          <p>Vi har få regler for modtagelse af overskudsmad:</p>
          <li>
            Vi uddeler overskudsmad til økonomisk trængte familier eller andre
            med behov for hjælp.
          </li>
          <li>
            Det er kun tilladt at hente mad én gang om ugen pr. husstand, uanset
            om maden hentes ved vores lager eller fra et andet tilbud.
          </li>
          <li>
            Pr. dag udleverer vi maksimalt 35 kasser med mad. Du kan derfor
            blive afvist.
          </li>
          <li>
            Er du afvist én dag, kan du med garanti modtage mad den næste dag.
          </li>
        </article>
        <article>
          <h3>Åbningstider</h3>
          <p>Mandag, tirsdag, torsdag og fredag kl. 16. </p>
          <p>Mødetid er kl. 16.</p>
          <p> Vi har lukket på helligdage.</p>
          <p> Betaling kr. 30 via Mobilepay til mobil 52 30 51 15. </p>
          <p>Adressen er Troensevej 19H, 9220 Aalborg Øst </p>
          <p>
            For at sikre en god oplevelse for alle, har vi udarbejdet nogle
            retningslinjer for maduddeling til private. Du kan læse dem
            <a href="https://no-fo.dk/wp-content/uploads/2020/Information2-til-d%C3%B8ren.pdf">
              her.
            </a>
          </p>
        </article>
        <div className={style.iframeContainer}>
        <iframe
          width="420"
          height="320"
          src="https://www.no-fo.dk/wp-content/uploads/2020/NOFO%20-%20Arbejdsdagen%20under%20Covid-19.mp4"
        ></iframe></div>
        <article>
          <h4>Onsdag kører vi ud med overskudsmad til ukrainske flygtninge ved tre
          hotspots: Lollandsgade, Gundorfslund og Lions Park.</h4> <h4>Socialøkonomisk
          virksomhed</h4> <img src="./src/assets/images/rsv.png"></img><p>Vi vil gerne være et sted, hvor personer med løs eller
          ingen tilknytning til arbejdsmarkedet kan få tilbud om praktik,
          mentorordning eller bare et job, der nytter. Kontakt os, hvis du leder
          efter en praktikplads. Er du sagsbehandler, må du også meget gerne
          kontakte os ved at sende en mail til <a href="mailto:info@no-fo.dk">info@no-fo.dk.</a></p>
        </article>
      </div>
    </>
  );
};

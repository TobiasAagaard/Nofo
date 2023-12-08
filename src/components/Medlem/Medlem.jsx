import style from "./medlem.module.scss";
export const Medlem = () => {
  return (
    <>
      <div className={style.medlemContainer}>
      <div className={style.imageContainer}>
        <img src="./src/assets/images/pexels-angele-j-128402.jpg"></img>
        <div>Video</div>
        </div>
        <div className={style.medlemHeader}>
          <h2>Bliv Medlem</h2>
          <article>
          <p>Vi er en medlemsorganisation og vi vil gerne have flere <b>medlemmer.</b></p>
          <p>Medlemskontingentet er <b>200 kr. pr. år.</b></p><p>Medlemsskabet gælder i et
          kalenderår. Kontingent kan indbetales til konto i Spar Nord Bank
          <b>9236-4584104843.</b></p><p>Slip for bøvlet, opret en årlig betaling via netbank.
          Eller MobilePay til <b>52 30 51 15,</b> det er også nemt. Husk at angive navn
          og e-mailadresse ved indbetaling.</p>
        </article>
        </div>
        
      </div>
      
    </>
  );
};

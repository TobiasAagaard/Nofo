import style from "./medlem.module.scss";
export const Medlem = () => {
  return (
    <>
      <div className={style.medlemContainer}>
        <div className={style.medlemHeader} id="medlem">
          <h2>Bliv Medlem</h2>
          </div>
          <article className={style.medlemContent}>
            <p>
              Vi er en medlemsorganisation og vi vil gerne have flere medlemmer.
            </p>
            <p>
              Medlemskontingentet er <b>200 kr. pr. år.</b>
            </p>
            <p>
              Medlemsskabet gælder i et kalenderår. Kontingent kan indbetales
              til konto i Spar Nord Bank 9236-4584104843.
            </p>
            <p>
              Slip for bøvlet, opret en årlig betaling via netbank. Eller
              MobilePay til 52 30 51 15, det er også nemt. <p>Husk at angive navn og
              e-mailadresse ved indbetaling.</p>
            </p>
          </article>
        
      </div>
    </>
  );
};

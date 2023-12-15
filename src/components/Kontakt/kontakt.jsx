import style from "./kontakt.module.scss";

export const Kontakt = () => {
  return (
    <>
      <div className={style.kontaktHeader}>
        <h2> Kontakt </h2>
      </div>
      <div className={style.kontaktContainer}>
        <div className={style.kontaktContent}>
          <p>Troensevej 19H 9220 Aalborg Øst</p>
          <p>Kontaktperson: Bente Schjødt, mobil: 52 30 51 15 </p>Daglig leder:
          Frederik Boje, mobil: 24 80 62 15<p> e-mail: info@no-fo.dk</p>
        </div>

        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2171.5898488493785!2d10.008856076661353!3d57.024327493345254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ecd1be7fbb24d%3A0xc4a80cdf0d72f7a2!2sNordjysk%20F%C3%B8devareoverskud!5e0!3m2!1sda!2sdk!4v1701956577211!5m2!1sda!2sdk"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      </div>

      
    </>
  );
};

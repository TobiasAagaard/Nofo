import style from "./bestyrelsen.module.scss";
export const Bestyrelsen = () => {
  return (
    <>
      <div className={style.bHeader} id="bestyrelsen">
        <h2>Bestyrelsen</h2>
      </div>
      <div className={style.b_Container}></div>
      <div className={style.b_gridContainer}>
        <div className={style.medlem}>
          <img src="./src/assets/images/Bente.jpg"></img>
          <p className={style.medlemInfo}>
            <div>Bente Schjødt</div><span>Kontakt Person</span>
            <div className={style.bSocials}> 
            
            <a href="https://www.facebook.com/bente.schjoedt"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              target="_blank"
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                fill="#888888"
              />
            </svg></a>
            
            
             <a href="info@no-fo.dk"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              target="_blank"
            >
              <path
                fill="#888888"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
              />
            </svg></a>
            
            
            
            </div>
          
          </p>
        </div>
        <div className={style.medlem}>
          <img src="./src/assets/images/Peter.jpg"></img>
          <p className={style.medlemInfo}>
            <div>Peter Als</div>
            <span>Bestyrelsesmedlem</span>
            <div className={style.bSocials}> <a href="https://www.facebook.com/alspeter"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              target="_blank"
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592c.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                fill="#888888"
              />
            </svg></a></div>
           
          </p>
        </div>
        <div className={style.medlem}>
          <img src="./src/assets/images/Ann-bestyrelse.jpg"></img>
          <p className={style.medlemInfo}>
            <div>Ann Lange</div>
            <span>Bestyrelsesmedlem</span>
            
            
          </p>
        </div>
      </div>
      <div className={style.b_gridContainerRow}>
        <div className={style.medlem}>
          <img src="./src/assets/images/Frederik.jpg"></img>
          <p className={style.medlemInfo}>
            <div>Frederik Boje</div>
            <span>Bestyrelsesmedlem</span>
          </p>
        </div>
        <div className={style.medlem}>
          <img src="./src/assets/images/Preben-bestyrelse.jpg"></img>
          <p className={style.medlemInfo}>
            <div>Preben Jakobsen</div>
            <span>Bestyrelsesmedlem</span>
          </p>
        </div>
      </div>

      <div className={style.b_cardContainer}>
        <div className={style.gCard}>
          <div className={style.cardHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              
            >
              <path
                fill="#ffffff"
                d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
              />
            </svg>
            <a
              target="_blank"
              href="https://no-fo.dk/wp-content/uploads/2023/%C3%85rsrapport-godkendt.pdf"
            >
              Årsrapport for 2022
            </a>
          </div>
          <li>
            <a
              target="_blank"
              href="https://no-fo.dk/wp-content/uploads/2023/20231116-bestyrelsesm%C3%B8de-referat.pdf"
            >
              Seneste referat
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://no-fo.dk/wp-content/uploads/Vedtaegter_for_Nordjysk_Foedevareoverskud.pdf"
            >
              Find vedtægterne her
            </a>
          </li>
        </div>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
              />
            </svg>
            <a
              target="_blank"
              href="https://no-fo.dk/wp-content/uploads/2022/2021-%C3%A5rsberetning.pdf"
            >
              {" "}
              Årsrapport for 2021
            </a>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
              />
            </svg>
            <a
              target="_blank"
              href="https://no-fo.dk/wp-content/uploads/2020/2020-%C3%A5rsberetning.pdf"
            >
              {" "}
              Årsrapport for 2020
            </a>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
              />
            </svg>
            <a
              target="_blank"
              href="https://no-fo.dk/wp-content/uploads/2020/2019-%C3%A5rsberetning.pdf"
            >
              {" "}
              Årsrapport for 2019
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

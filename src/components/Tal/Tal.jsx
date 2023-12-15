
import style from "./tal.module.scss";



export const Tal = () => {
  return (
    <>
      <div className={style.tHeader}>
        <h2>Nofo i tal</h2>
      </div>
      <div className={style.tContainer}>
        <div className={style.Statistik}>
          
          <img
            src="./src/assets/images/total.png"
            className={style.statItem}
          ></img>
          <img
            src="./src/assets/images/modtagere_per_dag.png"
            className={style.statItem}
          ></img>
          <img
            src="./src/assets/images/varegrupper.png"
            className={style.statItem}
          ></img>
        </div>
      </div>
    </>
  );
};

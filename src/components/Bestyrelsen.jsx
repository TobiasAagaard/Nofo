import style from "./bestyrelsen.module.scss"
export const Bestyrelsen = () => {
return(
    <>
    <div className={style. b_Container}></div>
    <div className={style.b_gridContainer}>
    <div className={style.medlem}><img src="./src/assets/images/Bente.jpg"></img>Bente Schjødt</div>
    <div className={style.medlem}><img src="./src/assets/images/Peter.jpg"></img>Peter Als</div>
    <div className={style.medlem}><img src="./src/assets/images/Ann-bestyrelse.jpg"></img>Ann Lange</div>
    </div>
    <div className={style.b_gridContainerRow}>
    <div className={style.medlem}><img src="./src/assets/images/Frederik.jpg"></img>Frederik Boje</div>
    <div className={style.medlem}><img src="./src/assets/images/Preben-bestyrelse.jpg"></img>Preben Jakobsen</div>
    
    </div>
   
    

    
    
    </>
)

}
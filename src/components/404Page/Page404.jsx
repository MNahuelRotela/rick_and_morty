import image from"../../multimedia/Page404.png" ;
import style from "../404Page/Page404.module.css"
const Page404 = () => {
    return ( 
        <div className={style.Blur}>
            <img className={style.imagen} src={image} alt="ERROR 404"></img>
        </div>

    )
    }
    export default Page404
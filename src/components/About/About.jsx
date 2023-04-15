import styles from "./About.module.css"
import logo from "./../../multimedia/logo.png"

const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles.titulodiv}>
            <h1>La Rick & Morty Wiki App</h1>
            <img src={logo} alt="Logo" className={styles.logo}/>
            </div>
            <div className={styles.divparrafo}>
            <h2>Rick & Morty es una popular serie animada que sigue las aventuras interdimensionales del científico alcohólico Rick y su nieto Morty,
                 un joven tímido e inseguro. Además de estos dos personajes principales, la serie cuenta con una amplia gama de personajes coloridos 
                 y únicos, desde la familia de Morty, incluyendo a su hermana Summer y sus padres Jerry y Beth, hasta una variedad de personajes extraterrestres y de diferentes dimensiones que se encuentran en los viajes de Rick y Morty. 
                 Cada personaje tiene su propia personalidad distintiva y agrega una capa adicional de diversión y complejidad a la serie, lo que la convierte en una de las más queridas y populares de la televisión actual.</h2>
            </div>
        </div>
    )
}

export default About;
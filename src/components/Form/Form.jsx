import { useState } from "react"
import validation from "./validation"
import styles from "./Form.module.css"
import logo from "./../../multimedia/logo.png"

const Form = ({login,loginguest}) => {
    
    const[userData,setUserData] = useState({
        email:"",
        password:""
    })

    const[errors,setErrors] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value

        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }
   

    return(
        <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
            <img src={logo} alt="Logo" className={styles.logo}/>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Form
const validation = (userData) => {
    let errors = {};

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)){
        errors.email ="El email es invalido";
    }
    if(!userData.email){
        errors.email = "Este campo no puede estar vacío"
    }
    if(userData.email.length > 35){
        errors.email = "El email no puede superar los 35 caracteres"
    }
    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(userData.password)){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres y contener un numero y una letra como minimo";
    }
    return errors;
}

export default validation;
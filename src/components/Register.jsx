/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const Register = (props) => {
    const{handleChange}=props;


    return (
        <>
            <input type="text" name="ad soyad" onChange={handleChange} />
            <button>Kayıt ol</button>
        </>)
}
export default Register;
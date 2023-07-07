import "./login.css"

export default function Login() {

    return (
      <div className="container">
        <h1>Iniciar sesión</h1>
        <label  for="">Correo </label>
        <input placeholder="1234ejemplo@gmail.com" type="text"></input>
        <label  for="">Password </label>
        <input placeholder="1234ejemplo@" type="password"></input>
        <button  type="Submit">Iniciar sesión</button>
      </div>
    )
       
    }
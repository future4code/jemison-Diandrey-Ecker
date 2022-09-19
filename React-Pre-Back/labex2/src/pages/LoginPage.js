import React from 'react'
import axios from 'axios';
import { useForm } from '../hook/useForm'
import { BASE_URL } from './../constants/constants';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  const [body, onChange, clear] = useForm({ email: "", password: "" })

  const fazerLogin = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}login`,body)
      .then((response) => {
        localStorage.setItem("token", response.data.token); //o nome "token" é como ele vai indentificar no locanStorage
        navigate("admin/trips/list") //alterar para a pagina certa

      }).catch((error) => {
        console.log(error.message)
      })
    clear();
  }

  return (
    <div className='main-container'>
      <h1>Página de Login</h1>
      <form onSubmit={fazerLogin}>
        <label htmlFor="email">E-mail: </label>
        <input
          email="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={body.email}
          onChange={onChange}
          required
        // pattern=''
        />

        <label htmlFor="password">Senha: </label>
        <input
          email="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={body.password}
          onChange={onChange}
          required
          pattern="^.{3,}"
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage







// <div className='main-container'>
//       <h1>Página de Login</h1>
//       <form id='login-page'>
//         <div className='fullbox'>
//           <label htmlFor="email">E-mail</label>
//           <input type="email" name="email" id="email" placeholder='Digite seu e-mail' />
//         </div>
//         <div className='fullbox'>
//           <label htmlFor="password">Senha</label>
//           <input type="password" name="password" id="password" placeholder='Digite sua senha' />
//         </div>
//         <div className='fullbox'>
//           <input type="submit" id='btn-submit' value='Entrar' />
//           <input type="submit" id='btn-submit' value='Voltar' />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default LoginPage
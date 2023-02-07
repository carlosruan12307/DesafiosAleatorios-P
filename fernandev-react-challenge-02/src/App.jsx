import { login } from './utils';
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [formdata,setformdata] = useState({
    email: 'ab',
    password: 'password123'
  })
  const [error,seterror] = useState();
  const [isDisable,setisDisable] = useState(false)
  const handlesubmit =() => {
    buttonDisable();
    loginF();

  }

  const loginF = () =>{
    seterror();
    login({email: formdata.email, password: formdata.password}).then((e) => {
      setisDisable(() => false);
      alert("Sucesso bro")
    }).catch((err) => seterror((prev) => err.message)).finally((e) => setisDisable(() => false))    
  }
  const buttonDisable = () =>{
    setisDisable(() => true);
  }
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error?  <div className='errorMessage'>
          {error}
        </div> : ""}
        
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} />
        </div>
      {formdata.email && formdata.password.length >= 6 && isDisable === false?
        <div className='button'>
          
          <button onClick={handlesubmit} >Login</button>
        </div>
        :
        ""

      }
      </div>
    </div>
  );
}

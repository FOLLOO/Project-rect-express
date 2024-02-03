import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import Navigation from "../../components/Navigation/navigation";
// import TextBox from "../../components/TextBox/textBox";
import ButtonLogInDark from "../../components/buttons/ButtonLoginDark/buttonLogInDark";
import ButtonSinIn from "../../components/buttons/ButtonSignIn/buttonSignIn"
import TextAnimation from "../../components/Animations/animation.jsx";
import Time from "../../components/Date/Time/time.jsx";
import Week from "../../components/Date/Week/week.jsx";


import { useForm } from "react-hook-form";
import '../../components/TextBox/textBox.css';
import { SelectIsAuth, fetchAuth } from "../../redux/slice/auth.js";
import { Cookie } from "@mui/icons-material";


function LoginPage(){
  const isAuth = useSelector(SelectIsAuth);
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid } 
  } = useForm({
    defaultValues: {
      email: 'test@mail.ru',
      password: 'testtest'
    },
    mode: 'onChange',
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload){
      return alert('Не удалось авторизоваться')
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
    
  }



    if (isAuth) {
      return <Navigate to="/"/>
    }

  // console.log('isAyth', isAuth)

  return(
    <div className="page">
      {/* должна быть кнопка НАЗАД при регистарции */}
      <Navigation/> 
      <Week styles={{ marginLeft: "55%", marginTop: "35%" }}/>
      <Time styles={{ marginLeft: "8%", marginTop: "3%" }}/>
      <TextAnimation text="Sorry <date> not found"/>
      <div className="content df-center">
        <h4 style={{color: "white", "font-size": "52px", margin: 10}}>Авторизоваться</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="df-center">
            <input 
            className='text-box'
            type={"email"} 
            placeholder={'Email'}
            isValid= {Boolean(errors.email?.message)}
            // value={errors.email?.message}
            {...register('email', {required: 'Укажите Почту'})}
            ></input>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            <input 
            // value={errors.password?.message}
            className='text-box'
            type={"password"} 
            placeholder={'password'}
            isValid= {Boolean(errors.password?.message)}
            {...register('password', {required: 'Укажите Пароль'})}
            ></input>
            {errors.password && <p className="error-message">{errors.password.message}</p>}
        <ButtonLogInDark />
        </form>
        <ButtonSinIn/>
      </div>
    </div>
  )
}

export default LoginPage;
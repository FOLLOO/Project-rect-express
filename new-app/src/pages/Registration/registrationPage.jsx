import React from "react";
import { useSelector, useDispatch } from "react-redux";


import Navigation from "../../components/Navigation/navigation.jsx";
import ButtonSinIn from "../../components/buttons/ButtonSignIn copy/buttonSignIn.jsx"
import Time from "../../components/Date/Time/time.jsx";
import ButtonAlsoSign from "../../components/buttons/BottonAlsoSign/buttonAlsoSign.jsx";
import Week from "../../components/Date/Week/week.jsx";

import { SelectIsAuth, fechRegister } from "../../redux/slice/auth.js";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";



function RegistrationPage(){

  const isAuth = useSelector(SelectIsAuth);
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange',
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fechRegister(values));

    if (!data.payload){
      return alert('Не удалось зарегестрироваться')
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
    
  }

    if (isAuth) {
      return <Navigate to="/"/>
    }


  return(
    <div className="page">
      {/* должна быть кнопка НАЗАД при регистарции */}
      <Navigation/> 
      <Week styles={{ marginLeft: "55%", marginTop: "35%" }}/>
      <Time styles={{ marginLeft: "8%", marginTop: "3%" }}/>
      <div className="content df-center">
        <h4 style={{color: "white", "font-size": "52px", margin: 10}}>Регистрация</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="df-center">
            <input 
            className='text-box'
            type={"text"} 
            placeholder={'Полное Имя'}
            isValid= {Boolean(errors.fullName?.message)}
            {...register('fullName', {required: 'Укажите Имя'})}
            ></input>
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}


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
            className='text-box'
            type={"password"} 
            placeholder={'password'}
            isValid= {Boolean(errors.email?.message)}
            // value={errors.email?.message}
            {...register('password', {required: 'Укажите пароль'})}
            ></input>
            {errors.password && <p className="error-message">{errors.password.message}</p>}

        <ButtonSinIn />
          </form>

        <ButtonAlsoSign/>
      </div>
    </div>
  )
}

export default RegistrationPage;
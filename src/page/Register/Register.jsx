import React from 'react'
import { useTranslation } from 'react-i18next';
import GeneralDataIcon from '../../assets/icons/GeneralDataIcon.svg';

const Register = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full p-8 flex ">
      <div className='h-full w-4/6'>
        <img src={GeneralDataIcon}/>
      </div>
      <div className='h-full  w-2/6'>
      
      <h1 className='bg-gray-500 text-red-600'>{t("generalData")}</h1>
      </div>
  
    </div>
  )
}

export default Register

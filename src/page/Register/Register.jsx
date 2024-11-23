import React from 'react'
import { useTranslation } from 'react-i18next';
import NavigationMenu from './components/NavigationMenu';
import RegistrationOptions from './components/RegistrationOptions';
import GeneralInformationForm from './components/GeneralInformationForm';


const Register = () => {
  const { t } = useTranslation();
  return (
    <div className='h-screen w-full p-8 flex '>
      <div className='flex flex-col align-middle h-full w-4/6  mx-10'>
        <NavigationMenu/>
        <RegistrationOptions/>
        <GeneralInformationForm/>
      </div>

      <div className='h-full  w-2/6'>
      
      <h1 className='bg-gray-500 text-red-600'>{t("generalData")}</h1>
      </div>
  
    </div>
  )
}

export default Register

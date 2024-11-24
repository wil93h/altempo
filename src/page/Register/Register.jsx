import React from 'react'
import { useTranslation } from 'react-i18next';
import NavigationMenu from './components/NavigationMenu';
import RegistrationOptions from './components/RegistrationOptions';
import GeneralInformationForm from './components/GeneralInformationForm';

const Register = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear()
  return (
      <div className='h-screen w-full p-8 flex '>
        <div className='flex flex-col align-middle h-full w-4/6  mx-10'>
          <NavigationMenu/>
          <RegistrationOptions/>
          <GeneralInformationForm/>
          <footer class="text-center p-4">
            <small>{t('rightsReserved', { year })}</small>
          </footer>
        </div>

        <div className='h-full  w-2/6  bg-cover bg-center bg-no-repeat rounded-2xl'  style={{ backgroundImage: 'url("/src/assets/ef0a8a3dc7bd12aae8b9c6df6710d892.jpg"), radial-gradient(circle, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.5) 100%)'}}>
        
        
        </div>
      </div>
      
  )
}

export default Register

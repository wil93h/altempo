import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { TfiBackLeft } from "react-icons/tfi";
import PlayCircle from '../../assets/icons/play-circle-02.svg';
import { useState } from 'react';

import { lazy } from 'react';
import { Suspense } from 'react';

const NavigationMenu = lazy(()=>import( './components/NavigationMenu'));
const RegistrationOptions = lazy(()=>import( './components/RegistrationOptions'));
const GeneralInformationForm = lazy(()=>import( './components/GeneralInformationForm'));
const MenuBarRegister = lazy(()=>import( '../../components/MenuBarRegister'));
const NavigationMenuStep = lazy(()=> import('./components/NavigationMenuStep'))
const StepOptions = lazy(()=> import('./components/StepOptions'));

const Register = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear()
  const [changeStep, setChangeStep] = useState(false)

  const changeToStep = () => {
    if(!changeStep){
      return [
        <NavigationMenu/>,
        <RegistrationOptions/>,
        <GeneralInformationForm setChangeStep={setChangeStep}/>
      ]
    }else{
      return [
        <NavigationMenuStep/>,
        <StepOptions/>
      ]
    }
  }

  return (
      <div className='h-screen w-full p-8 flex '>
        <div className='flex flex-col align-middle h-full lg:w-4/6 sm:w-full md:w-full mx-10 '>
          <MenuBarRegister/>
            {...changeToStep()}
          <footer className="text-center p-4">
            <small>{t('rightsReserved', { year })}</small>
          </footer>
        </div>

        <div className='h-full sm:hidden md:hidden lg:grid lg:w-2/6 bg-cover bg-center bg-no-repeat rounded-2xl'  style={{ backgroundImage: 'url("/src/assets/ef0a8a3dc7bd12aae8b9c6df6710d892.jpg"), radial-gradient(circle, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.5) 100%)'}}>
          <div className='flex flex-col h-full !justify-between '>
            <div className='w-full flex justify-end p-5'>
              <Button rounded type="submit" 
                className=' h-8 bg-transparent p-2 border-2 border-[#FFFFFF33] text-white focus:ring-2 hover:bg-gray-600' 
                icon={      
                  <img 
                    className='p-1'
                    src={PlayCircle}
                  />
                }
                iconPos={"right"}
                label={t('view_video')} 
              />
            </div>
            
            <div className='w-full col-span-3 text-right p-5'>
              <p className='text-white font-medium'>{t("profile_selected")}</p>
              <p className='text-white font-black text-5xl'>{t("talent-hunter")}</p>
              <Button rounded type="submit" 
                className='h-8 bg-transparent p-2 border-0 ring-0 text-[#33CCCC] hover:border-0 hover:ring-0 hover:text-gray-100 text-decoration-line: underline' 
                icon={<TfiBackLeft/>}
                iconPos={"right"}
                label={t('change_selection')} 
              />
            </div>
              
          </div>
        
        </div>
      </div>
      
  )
}

export default Register

import React from 'react'
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from 'primereact/button';
import Altempo from '../assets/icons/Altempo.svg';

const MenuBarRegister = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='flex justify-between'>
      <Button
        label="Submit" 
        icon={<FaArrowLeftLong  style={{ marginRight: '8px' }}/>} 
        className=''
        iconPos="left" 
        // loading={loading} 
        // onClick={load} 
      />
      <img 
        src={Altempo}
      />

      <div>
        <LanguageSelector/>
      </div>
    </div>
  )
}

export default MenuBarRegister
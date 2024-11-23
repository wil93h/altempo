import React from 'react'
import GeneralDataIcon from '../../../assets/icons/GeneralDataIcon.svg';
import ArrowRight from '../../../assets/icons/arrow-right-01.svg';
import Interests from '../../../assets/icons/Interests.svg';
import { useTranslation } from 'react-i18next';

const NavigationMenu = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-gradient-to-l from-[#F6F7F9] to-[#F0E9FF] rounded h-[68px]  flex justify-between align-middle items-center p-5 my-5' >
    <div className='flex gap-3'>
      <img 
        className="!h-8"
        src={GeneralDataIcon}
      />
      <div>
        <p className='text-sm font-semibold text-[#7505E0]'>{t('generalData')}</p>
        <p className='text-sm font-normal text-[#7505E0]'>{t('shareContactData')}</p>
      </div>
    </div>
      <img 
        className="!h-8"
        src={ArrowRight}
      />
    <div className='flex gap-3'>
      <img 
        className="!h-8"
        src={Interests}
      />
      <div>
        <p className='text-sm font-semibold text-[#888FA8]'>{t('interests')}</p>
        <p className='text-sm font-normal text-[#888FA8]'>{t('showInterests')}</p>
      </div>
    </div>
    </div>
  )
}

export default NavigationMenu
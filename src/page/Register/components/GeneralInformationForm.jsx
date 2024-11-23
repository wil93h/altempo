import React from 'react'
import { useTranslation } from 'react-i18next';

const GeneralInformationForm = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col'>
      <p className='text-base font-medium uppercase '>{t("generalInformation")}</p>
      <p className='text-base font-normal text-[#888FA8]'>{t("shareAboutYou")}</p>
      <hr className="flex-grow border-gray-300" />
    </div>
  )
}

export default GeneralInformationForm
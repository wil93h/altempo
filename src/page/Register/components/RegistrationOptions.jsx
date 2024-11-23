import React from 'react'
import { useTranslation } from 'react-i18next';

const RegistrationOptions = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-4 py-4">
    <p className="text-gray-600 text-sm">{t("registerWith")}</p>
    <div className="flex justify-center space-x-4">
      <button
        className="flex items-center justify-center w-32 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
        aria-label="Register with Facebook"
      >
        <i className="pi pi-facebook text-2xl"></i>
      </button>
      <button
        className="flex items-center justify-center w-32 h-12 bg-gray-100 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 transition shadow-md"
        aria-label="Register with Google"
      >
        <i className='pi pi-google text-2xl'></i>
      </button>
      <button
        className="flex items-center justify-center w-32 h-12 bg-black text-white rounded-full hover:bg-gray-700 transition shadow-md"
        aria-label="Register with Apple"
      >
        <i className="pi pi-apple text-2xl"></i>
      </button>
    </div>
    <div className="flex items-center justify-center w-full space-x-4">
      <hr className="flex-grow border-gray-300 max-w-16 " />
      <p className="text-gray-500 text-sm whitespace-nowrap">{t("completeInfo")}</p>
      <hr className="flex-grow border-gray-300 max-w-16" />
    </div>
  </div>
  )
}

export default RegistrationOptions
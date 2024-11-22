import React from 'react'
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-full bg-gray-200">
      <div className="h-full w-full bg-blue-500">
        <h1>{t("generalData")}</h1>
      </div>
    </div>
  )
}

export default Register

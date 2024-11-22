import React from 'react'

const MenuBarRegister = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className=''>
      <div>regresar</div>
      <div>ALTEMPO</div>
      <div>
        <LanguageSelector/>
      </div>
    </div>
  )
}

export default MenuBarRegister
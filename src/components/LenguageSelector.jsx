import { Dropdown } from 'primereact/dropdown';
import { useTranslation } from 'react-i18next';
import { PiTranslate } from 'react-icons/pi';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
 
  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' }
  ];

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.value);
  };

  return (
    <div className="p-d-flex p-ai-center p-jc-center">
      <Dropdown
        value={i18n.language}
        options={languageOptions}
        onChange={handleChangeLanguage}
        optionLabel="label"
        optionValue="value"
        placeholder={<PiTranslate />} 
        className="p-mr-2"
      />
    </div>
  );
};

export default LanguageSelector;

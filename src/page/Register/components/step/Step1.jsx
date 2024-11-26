import React from 'react'
import { useTranslation } from 'react-i18next';
import { AutoComplete } from "primereact/autocomplete";
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import Musicalization from '../../../../assets/icons/Musicalization.svg';
import Producer from '../../../../assets/icons/Producer.svg';
import Announcer from '../../../../assets/icons/Announcer.svg';
import Composer from '../../../../assets/icons/Composer.svg';
import Singer from '../../../../assets/icons/Singer.svg';
import { Button } from 'primereact/button';
import { useFormContext } from 'react-hook-form';

const Card = ({ icon: Icon, label, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 border rounded-lg text-center cursor-pointer transition-all duration-300 w-48 h-48 flex flex-col justify-center
        ${isSelected ? "border-purple-600 bg-purple-100 shadow-lg" : "border-gray-300 hover:shadow-md"}`}
    >
      <div className="flex justify-center items-center text-purple-600 mb-3">
        <img 
          className='p-1'
          src={Icon}
        />
      </div>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  );
};


const Step1 = () => {
  const { t } = useTranslation();
  const { watch, setValue, formState: { errors } } = useFormContext();
  const changeStep = () => {
    setValue("activeIndex",watch("activeIndex") <= watch("steps").length - 1 ? watch("activeIndex") + 1 : watch("activeIndex")  )
  }

  const [selectedIndex, setSelectedIndex] = useState(null); 
  const cards = [
    {label : t('steps.musicalization'), icon : Musicalization},
    {label : t('steps.producer'), icon : Producer},
    {label : t('steps.announcer'), icon : Announcer},
    {label : t('steps.composer'), icon : Composer},
    {label : t('steps.singer'), icon : Singer},
  ]

  return (
    <div className='h-full'>
      <div className='flex flex-col text-center gap-4 h-full'>
        <p className='font-bold text-2xl w-full'>{t("steps.what_are_you_interested_in_finding")}</p>
        <div className='w-full'>
          <span className="p-input-icon-left w-full" style={{ marginRight: '10px' }}>
            <FaSearch className='text-gray-500 ml-2' />
            <InputText
              className="w-full bg-[#F6F7F9] h-14 pl-7 rounded-2xl !border-[#F6F7F9] !ring-[#F6F7F9] !focus:border-gray-500 !focus:ring-gray-500"
              placeholder={t("steps.search_for_an_instrument")}
            />
          </span>
        </div>

        <div className="flex justify-between gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              label={card.label}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className='w-full h-1/6 flex justify-center gap-5'>
        {/* <Button  rounded type="submit" className='w-32 h-12 bg-white border-2 border-[#B4BAC5] text-[#333] focus:ring-2 focus:ring-[#7505E0] focus:border-[#7505E0] hover:bg-gray-100' label={t('steps.go_back')} /> */}
        <Button onClick={changeStep} rounded type="submit" className='w-32 h-12  bg-[#36DCDC] border-2 border-[#36DCDC] text-white focus:ring-2 focus:ring-[#2BB1B1] focus:border-[#2BB1B1] hover:bg-[#A8EFEF]' label={t('continue')} />
      </div>
    </div>

  )
}

export default Step1
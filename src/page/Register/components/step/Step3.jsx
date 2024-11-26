import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { Slider } from "primereact/slider";
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';

const Step3 = () => {
  const { t } = useTranslation();
  const { control, watch } = useFormContext({
    defaultValues: {
      rangeValue: [0, 50],
    },
  });
  const rangeValue = watch("rangeValue")  || [0, 0];
  
  return (
    <div className='flex flex-col align-middle h-full items-center'>
        <div className='w-full text-center'>
          <p className='font-bold text-2xl w-full'>{t("steps3.budget")}</p>
        </div>
      <div className='w-4/6 flex flex-col text-center h-full align-middle justify-center'>
        <p className='pt-5 font-bold text-base w-full'>{t("steps3.range",{min:rangeValue[0], max:rangeValue[1]})}</p>
        <p className='py-5  font-bold text-base w-full'>{t("steps3.average",{ average:( (rangeValue[0]+rangeValue[1])/2).toFixed(2) ?? 0})}</p>
      <Controller
        name="rangeValue"
        control={control}
        render={({ field }) => (
          <Slider
            {...field}
            value={field.value  || [0, 0]}
            onChange={(e) => field.onChange(e.value)}
            range
            min={0}
            max={200} 
          />
        )}
      />
    </div>
    <div className='w-full h-1/6 flex justify-end gap-5'>
      <Button rounded  className='w-32 h-12 bg-white border-2 border-[#B4BAC5] text-[#333] focus:ring-2 focus:ring-[#7505E0] focus:border-[#7505E0] hover:bg-gray-100' label={t('steps3.skip')} />
      <Button rounded type="submit" className='w-48 h-12  bg-[#36DCDC] border-2 border-[#36DCDC] text-white focus:ring-2 focus:ring-[#2BB1B1] focus:border-[#2BB1B1] hover:bg-[#A8EFEF]' label={t('steps3.find')} />
    </div>
  </div>
  )
}

export default Step3
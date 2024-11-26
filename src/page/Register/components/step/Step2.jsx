import React from 'react'
import { useForm,Form, Controller, FormProvider, useFormContext } from 'react-hook-form';
import { Checkbox } from "primereact/checkbox";
import { useTranslation } from 'react-i18next';
import FormField from '../../../../components/FormField';
import { InputText } from 'primereact/inputtext';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'primereact/button';

const keys = [
  "steps2.responsibility",
  "steps2.ownMaterial",
  "steps2.materialProactivity",
  "steps2.personalBrand",
  "steps2.closeLocation",
  "steps2.onlyGroups",
  "steps2.creative",
  "steps2.beginnerExperience",
  "steps2.intermediateExperience",
  "steps2.advancedExperience",
  "steps2.generateProposals",
  "steps2.other",
];
const validationSchema = yup.object({
  responsibility: yup.boolean(),
  ownMaterial: yup.boolean(),
  materialProactivity: yup.boolean(),
  personalBrand: yup.boolean(),
  closeToLocation: yup.boolean(),
  groups: yup.boolean(),
  creative: yup.boolean(),
  beginnerExperience: yup.boolean(),
  intermediateExperience: yup.boolean(),
  highExperience: yup.boolean(),
  processProposals: yup.boolean(),
  other: yup.boolean(),
  shareGoal: yup.string()
    .max(500, 'The goal cannot exceed 500 characters.')
    .required('This field is required.'),

  // Validation to ensure at least one checkbox is selected
  atLeastOneChecked: yup.boolean().test(
    'at-least-one',
    'You must select at least one option.',
    function (value) {
      const {
        responsibility,
        ownMaterial,
        materialProactivity,
        personalBrand,
        closeToLocation,
        groups,
        creative,
        beginnerExperience,
        intermediateExperience,
        highExperience,
        processProposals,
        other
      } = this.parent;
      return (
        responsibility ||
        ownMaterial ||
        materialProactivity ||
        personalBrand ||
        closeToLocation ||
        groups ||
        creative ||
        beginnerExperience ||
        intermediateExperience ||
        highExperience ||
        processProposals ||
        other
      );
    }
  ),
});


const Step2 = () => {
  const { t } = useTranslation();
  const methods = useFormContext({
    defaultValues: {
      responsibility: false,
      ownMaterial: false,
      materialProactivity: false,
      personalBrand: false,
      closeToLocation: false,
      groups: false,
      creative: false,
      beginnerExperience: false,
      intermediateExperience: false,
      highExperience: false,
      processProposals: false,
      other: false,
      shareGoal: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const { setValue, handleSubmit, control, watch, formState:{errors} } = methods

  const changeStep = () => {
    console.log("🚀 ~ Step2 ~ errors:", errors)
    setValue("activeIndex",watch("activeIndex") <= watch("steps").length - 1 ? watch("activeIndex") + 1 : watch("activeIndex")  )
  }

  return (
    <FormProvider {...methods} >
      <form onSubmit={handleSubmit(changeStep)}>
      
        <div className='flex flex-col items-center text-center gap-4 h-full'>
          <p className='font-bold text-2xl w-full'>{t("steps2.important_in_musicians")}</p>
          <p className='pt-5 font-bold text-base w-full'>{t("steps2.select_options_to_prioritize")}</p>
          <div  className="w-5/6 columns-2 text-left">
            {keys.map((key) => (
              <div key={key} className="flex align-items-center p-4 ">
                <Controller
                  name={key}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      inputId={key}
                      onChange={(e) => field.onChange(e.checked)}
                      checked={field.value}
                    />
                  )}
                />
                <label htmlFor={key} className="ml-2 cursor-pointer">
                  {t(key)}
                </label>
              </div>
            ))}
          </div>
          <div className='w-5/6 '>
            <FormField name="shareGoal" label={t('steps2.shareGoal')} classN="w-full !border-[#B4BAC5] focus:!border-[#7505E0] !border-2 " component={InputText} />
          </div>
        </div>

        <div className='w-full h-1/6 flex justify-center gap-5'>
          <Button rounded  className='w-32 h-12 bg-white border-2 border-[#B4BAC5] text-[#333] focus:ring-2 focus:ring-[#7505E0] focus:border-[#7505E0] hover:bg-gray-100' label={t('steps.go_back')} />
          <Button rounded type="submit" className='w-32 h-12  bg-[#36DCDC] border-2 border-[#36DCDC] text-white focus:ring-2 focus:ring-[#2BB1B1] focus:border-[#2BB1B1] hover:bg-[#A8EFEF]' label={t('continue')} />
        </div>
      </form> 
    </FormProvider>
  )
}

export default Step2
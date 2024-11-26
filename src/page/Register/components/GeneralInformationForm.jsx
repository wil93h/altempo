import React from 'react'
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormField from '../../../components/FormField';


const GeneralInformationForm = ({setChangeStep}) => {
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('form.errors.required')),
    email: yup.string().email(t('form.errors.email')).required(t('form.errors.required')),
    password: yup
      .string()
      .min(8, t('form.errors.minLength', { min: 8 }))
      .required(t('form.errors.required')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('form.errors.passwordMatch'))
      .required(t('form.errors.required')),
    country: yup.string().required(t('form.errors.required')),
    dob: yup
      .date()
      .max(new Date(), t('form.errors.date'))
      .required(t('form.errors.required')),
    phone: yup
      .string()
      .matches(/^\d{8,}$/, t('form.errors.phone'))
      .nullable(),
    howDidYouHear: yup.string().required(t('form.errors.required')),
  });
  
  const countries = [
    { label: t("countries.US"), value: "US" },
    { label: t("countries.SAL"), value: "SAL" },
  ];

  const genderOptions = [
    { label: t("genderOptions.M"), value: "M" },
    { label: t("genderOptions.F"), value: "F" },
    { label: t("genderOptions.O"), value: "O" },
  ];

  
  const methods = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data) => {
    setChangeStep(true)
  };
  return (
    <div className='flex flex-col'>
      <p className='text-base font-medium uppercase '>{t("generalInformation")}</p>
      <p className='text-base font-normal text-[#888FA8]'>{t("shareAboutYou")}</p>
      <hr className="flex-grow border-gray-300 p-3" />
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="p-fluid">

        <div className='flex justify-between w-full'> 
          <FormField name="name" label={t('form.name')} classN="!border-[#B4BAC5] focus:!border-[#7505E0] !border-2 " component={InputText} />
          <FormField name="email" label={t('form.email')} classN="!border-[#B4BAC5] focus:!border-[#7505E0] !border-2 " component={InputText} />
        </div>
        <div className='flex justify-between w-full'>
          <FormField name="password" label={t('form.password')} component={Password} feedback={false} />
          <FormField name="confirmPassword" label={t('form.confirmPassword')} component={Password} feedback={false} />
        </div>
        <div className='flex justify-between w-full'>
          <FormField name="country" label={t('form.country')} component={Dropdown} options={countries} />
          <FormField name="dob" label={t('form.dob')} component={Calendar} dateFormat="dd/mm/yy" />
        </div>
        <div className='flex justify-between w-full'>
          <FormField name="gender" label={t('form.gender')} component={Dropdown} options={genderOptions} />
          <FormField name="phone" label={t('form.phone')} classN="!border-[#B4BAC5] focus:!border-[#7505E0] !border-2 " component={InputText} keyfilter="int" />
        </div>
        <div className='flex justify-between w-full'>
          <FormField name="howDidYouHear" label={t('form.howDidYouHear')} classN="!border-[#B4BAC5] focus:!border-[#7505E0] !border-2 " component={InputText} />
          <div className='w-full p-5'></div>
        </div>
        <div className='w-full flex justify-end gap-5'>
          <Button rounded className='w-32 h-12 bg-white border-2 border-[#B4BAC5] text-[#333] focus:ring-2 focus:ring-[#7505E0] focus:border-[#7505E0] hover:bg-gray-100' label={t('cancel')} />
          <Button rounded type="submit" className='w-32 h-12  bg-[#36DCDC] border-2 border-[#36DCDC] text-white focus:ring-2 focus:ring-[#2BB1B1] focus:border-[#2BB1B1] hover:bg-[#A8EFEF]' label={t('form.submit')} />
        </div>
      </form>
    </FormProvider>
    </div>


  )
}

export default GeneralInformationForm
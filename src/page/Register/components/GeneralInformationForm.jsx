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

const FormField = ({ name, label, component: Component, ...props }) => {
  const { control, formState: { errors } } = useFormContext();
  return (
    <div className="field p-5 w-full">
      <FloatLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Component id={name} {...field} {...props} className={`h-14  ${errors.email ? 'p-invalid' : ''}`} />}
        />
        <label htmlFor={name}>{label}</label>
      </FloatLabel>
      {errors[name] && <small className="p-error">{errors[name].message}</small>}
    </div>
  );
};
const GeneralInformationForm = () => {
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
      .matches(/^\d{10}$/, t('form.errors.phone'))
      .nullable(),
    howDidYouHear: yup.string().required(t('form.errors.required')),
  });
  
  const countries = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
  ];
  
  const genderOptions = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Other', value: 'O' },
  ];
  
  const methods = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='flex flex-col'>
      <p className='text-base font-medium uppercase '>{t("generalInformation")}</p>
      <p className='text-base font-normal text-[#888FA8]'>{t("shareAboutYou")}</p>
      <hr className="flex-grow border-gray-300 p-3" />
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="p-fluid">
        <div className='flex justify-between w-full'> 
          <FormField name="name" label={t('form.name')} component={InputText} />
          <FormField name="email" label={t('form.email')} component={InputText} />
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
          <FormField name="phone" label={t('form.phone')} component={InputText} keyfilter="int" />
        </div>
        <div className='flex justify-between w-full'>
          <FormField name="howDidYouHear" label={t('form.howDidYouHear')} component={InputText} />
          <div className='w-full p-5'></div>
        </div>
        <div className='w-full flex justify-end gap-5'>
          <Button rounded type="submit" className='w-32 h-12 bg-white border-2 border-[#B4BAC5] text-[#333] focus:ring-2 focus:ring-[#7505E0] focus:border-[#7505E0] hover:bg-gray-100' label={t('form.submit')} />
          <Button rounded type="submit" className='w-32 h-12  bg-[#36DCDC] border-2 border-[#36DCDC] text-white focus:ring-2 focus:ring-[#2BB1B1] focus:border-[#2BB1B1] hover:bg-[#A8EFEF]' label={t('form.submit')} />
        </div>
      </form>
    </FormProvider>
    </div>


  )
}

export default GeneralInformationForm
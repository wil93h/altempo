import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import { Button } from 'primereact/button';
import { FormProvider, useForm } from "react-hook-form";


const StepOptions = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const methods = useForm({
    defaultValues: {
      activeIndex: 0,
      steps : [
        { label: t('steps.step_of_total', { current: 1, total: 3 }), component: <Step1 /> },
        { label: t('steps.step_of_total', { current: 2, total: 3 }), component: <Step2 /> },
        { label: t('steps.step_of_total', { current: 3, total: 3 }), component: <Step3 /> },
      ]
    },
  });
  const { watch } = methods
  // const steps = [
  //   { label: t('steps.step_of_total', { current: 1, total: 4 }), component: <Step1 /> },
  //   { label: t('steps.step_of_total', { current: 2, total: 4 }), component: <Step2 /> },
  //   { label: t('steps.step_of_total', { current: 3, total: 4 }), component: <Step3 /> },
  // ];


  
  return (
    <FormProvider {...methods}>
      <div className="p-4 h-full">
        <p className="text-center text-base font-normal mb-4">{watch("steps")[watch("activeIndex")].label}</p>
        <div className="mb-4 h-5/6">{watch("steps")[watch("activeIndex")].component}</div>
      </div>
    </FormProvider>
  );
};

export default StepOptions

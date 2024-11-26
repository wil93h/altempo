import { FloatLabel } from "primereact/floatlabel";
import { Controller, useFormContext } from "react-hook-form";

const FormField = ({ name, label,classN,component: Component, ...props }) => {

  const { control, formState: { errors } } = useFormContext();
  
  return (
    <div className="field px-5 pb-7 w-full">
      <FloatLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Component id={name} {...field} {...props} className={`${classN} h-14 !rounded-xl  ${errors.email ? 'p-invalid' : ''}`} />}
        />
        <label htmlFor={name}>{label}</label>
      </FloatLabel>
      {errors[name] && <small className="p-error">{errors[name].message}</small>}
    </div>
  );
};
export default FormField
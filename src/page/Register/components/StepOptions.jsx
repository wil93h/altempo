import React, { useState } from "react";

const StepOne = () => <div className="text-center">Contenido del Paso 1</div>;
const StepTwo = () => <div className="text-center">Contenido del Paso 2</div>;
const StepThree = () => <div className="text-center">Contenido del Paso 3</div>;
const StepFour = () => <div className="text-center">Contenido del Paso 4</div>;

const StepOptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    { label: "1 de 4", component: <StepOne /> },
    { label: "2 de 4", component: <StepTwo /> },
    { label: "3 de 4", component: <StepThree /> },
    { label: "4 de 4", component: <StepFour /> },
  ];

  return (
    <div className="p-4">
      {/* Título con el contador dinámico */}
      <p className="text-center text-lg font-bold mb-4">{steps[activeIndex].label}</p>

      {/* Renderiza el componente correspondiente al paso activo */}
      <div className="mb-4">{steps[activeIndex].component}</div>

      {/* Botones para navegar entre pasos */}
      <div className="flex justify-center gap-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded disabled:opacity-50"
          onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
          disabled={activeIndex === 0}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
          onClick={() => setActiveIndex((prev) => Math.min(prev + 1, steps.length - 1))}
          disabled={activeIndex === steps.length - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default StepOptions

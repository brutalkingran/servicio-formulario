import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"

const UserForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [price, setPrice] = useState(0)
  
  console.log(errors);

  // Watch values in real time
  const selectedPlan = watch("plan");
  const selectedExtras = watch("extras", []); // checkboxes => array
  
  // SUBMIT
  const onSubmit = data => console.log(data);

  // CALCULO
  useEffect(() => {
    let total = 0;

    // Plan
    if (selectedPlan) total += Number(selectedPlan);

    // Extra
    if (selectedExtras?.length > 0) selectedExtras.forEach((extra) => { total += Number(extra) });

    setPrice(total);
  }, [selectedPlan, selectedExtras])
  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex flex-col w-130 gap-4 p-5 items-center">
        <h3 className="text-center">Selecciona tu plan</h3>

        <div className="flex flex-row items-center justify-around gap-5">
          {/* PLANES */}
          <fieldset className="flex flex-col gap-2">
            <label className="border p-2 w-55 h-30"><input {...register("plan", { required: true })} type="radio" value="100" /> Plan Petón ($100) <br />- Explicar a detalle <br /> - Este plan es muy piola </label>

            <label className="border p-2 w-55 h-30"><input {...register("plan", { required: true })} type="radio" value="200" /> Plan Bueno ($200) <br /> - Este no está tan bueno <br />- Tu página será anunciada en otros planetas </label>

            <label className="border p-2 w-55 h-30"><input {...register("plan", { required: true })} type="radio" value="300" /> Plan Ultra Deluxe ($300) <br /> - Este no lo selecciones </label>
          </fieldset>

          {/* EXTRAS */}
          <fieldset className="flex flex-col gap-2">
            <label className="border p-2 w-55 h-30"><input {...register("extras", { required: true })} type="checkbox" value="50" /> Soporte Idiomas ($50) <br /> - El cliente puede seleccionar varias opciones </label>

            <label className="border p-2 w-55 h-30"><input {...register("extras", { required: true })} type="checkbox" value="60" /> Extra B ($60) <br /> - Incluir traduccion </label>

            <label className="border p-2 w-55 h-30"><input {...register("extras", { required: true })} type="checkbox" value="70" /> Extra C ($70) <br /> - Añadir temática de navidad </label>
          </fieldset>
        </div>

        {/* DATOS DE USUARIO */}
        <fieldset className="flex flex-col gap-2">
          <input className="border p-1" type="text" placeholder="Nombre/s" {...register("First name", { required: true, maxLength: 80 })} />

          <input className="border p-1" type="text" placeholder="Apellido/s" {...register("Last name", { required: true, maxLength: 100 })} />

          <input className="border p-1" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

          <input className="border p-1" type="tel" placeholder="Teléfono" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />

          <input className="border p-1" type="text" placeholder="Domicilio" {...register("Address", { required: true })} />
        </fieldset>

        <input className="text-center bg-red-500 p-2 rounded text-white cursor-pointer" type="submit" />
      </form>

      <div className="text-white flex flex-row items-center gap-3 mt-5">
        <h2 className="text-center text-4xl">PRECIO TOTAL</h2>
        <p className="text-center text-5xl text-amber-300 italic font-extralight">$ { price }</p>
      </div>
  </>
  );
}

export default UserForm;
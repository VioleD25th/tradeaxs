import { Formik, Form, Field, ErrorMessage } from "formik";

const UpdateInput = ({ label, as, name, color = "", ...props }) => {
  return (
    <Field as={as} className=" justify-start block items-center text-center mb-4 text-sm font-medium capitalize">
      <div className="mr-5">
        <div className="mb-2 text-left">{label}</div>

      <Field
        name={name}
        {...props}
        className={`${color} flex-1 p-1 pl-2 flex bg-[#F2F2F2] w-72 rounded-sm outline-none text-xs font-normal`}
      />
      <ErrorMessage name={name}>
        {(msg) => <p className="mt-1 text-xs text-red-500">{msg}</p>}
      </ErrorMessage>
      </div>
    </Field>
  );
};

export default UpdateInput;

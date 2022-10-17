import { useDispatch, useSelector } from "react-redux";
import { handleFormData, useForm } from "../redux/form/formSlice";

export default function useFormHelper() {
  const dispatch = useDispatch();
  const { formData, formErrors } = useSelector(useForm);

  const handleChange = ({ target }) => {
    const group = target.getAttribute("group");
    const { name, value } = target;

    dispatch(
      handleFormData({
        group,
        name,
        value,
      })
    );
  };

  return [handleChange, formData, formErrors];
}

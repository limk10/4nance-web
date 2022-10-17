import useToast from "../toast";

export default function useAxiosValidate() {
  const [handleToast] = useToast();

  const axiosErrorValidate = (err) => {
    if (!err) return;
    const {
      response: {
        data: { userMessage },
      },
    } = err;

    handleToast("Ops...", userMessage, "warning", 5000);
  };

  return [axiosErrorValidate];
}

import useToast from "../toast";

export default function useAxiosValidate() {
  const [handleToast] = useToast();

  const axiosErrorValidate = (err) => {
    console.log("err", err);
    if (!err) return;
    const { response } = err;

    handleToast("Ops...", response?.data?.userMessage, "warning", 5000);
  };

  return [axiosErrorValidate];
}

import { useState } from "react";

const useForm = () => {
  const [formOpen, setFormOpen] = useState(false);

  const close = () => setFormOpen(false);
  const open = () => setFormOpen(true);

  return { formOpen, close, open };
};

export default useForm;

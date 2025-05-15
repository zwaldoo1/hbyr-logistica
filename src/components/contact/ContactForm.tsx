import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Button from "../ui/Button";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
      toast.success("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.");
    } catch (error) {
      toast.error("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cuéntanos sobre tu Proyecto</h2>
            <p className="text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo para discutir tu proyecto en detalle.
            </p>
          </div>

          <Form {...form}>
<form
  action="https://formsubmit.co/tucorreo@dominio.com"
  method="POST"
  className="space-y-6"
>
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium">Nombre</label>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        className="w-full input"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium">Correo electrónico</label>
      <input
        type="email"
        name="email"
        placeholder="tu@email.com"
        className="w-full input"
        required
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium">Mensaje</label>
    <textarea
      name="message"
      placeholder="Cuéntanos sobre tu proyecto"
      className="w-full min-h-[120px] textarea"
      required
    />
  </div>

  {/* Evitar CAPTCHA y redireccionar tras enviar */}
  <input type="hidden" name="_captcha" value="false" />
  <input
    type="hidden"
    name="_next"
    value="https://tusitio.com/gracias.html"
  />

  <button type="submit" className="w-full button">
    Enviar mensaje
  </button>
</form>

          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
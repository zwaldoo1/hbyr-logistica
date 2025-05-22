import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
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
  service: string;
  message: string;
};


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Aquí iría la lógica de envío del formulario
      console.log("Form data:", data);
      toast.success("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.");
    } catch (error) {
      toast.error("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="container mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Contáctanos</h2>
        <p className="text-lg">
          Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
<form
  action="https://formsubmit.co/administracion@logisticahbyr.com
"
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
    value="https://logisticahbyr.com/"
  />

  <button type="submit" className="w-full button">
    Enviar mensaje
  </button>
</form>

        </div>
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-lg space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+56 9 7589 8797</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>administracion@logisticahbyr.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <span>Lunes a Viernes, 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Avenida El Retiro 1275, Bodega A-14</span>
              </div>
            </div>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9865272454663!2d-70.77080232495149!3d-33.39751569480198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c1a1a634e311%3A0x22cf9c7d5afaa526!2sAv.%20el%20Retiro%201275%2C%208640000%20Renca%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1747286628381!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
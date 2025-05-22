import { useState } from "react";
import Button from "./ui/Button";
import { Input } from "../components/ui/input";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Gracias por suscribirte!",
        description: "Pronto recibirás nuestras últimas novedades.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">HBYR Logistica y Transporte</h3>
            <p className="text-muted-foreground">
              Nos dedicamos a transformar ideas en resultados excepcionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación Rápida</h3>
            <ul className="space-y-2">
              {[
                { text: "Inicio", path: "/" },
                { text: "Conócenos", path: "/about" },
                { text: "Nuestra Flota", path: "/portfolio" },
                { text: "Contacto", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                administracion@logisticahbyr.com
              </p>
              <p className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +569 7589 8797
              </p>
              <p className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Avenida El Retiro 1275, Bodega A-14, Region Metropolitana, Chile 
              </p>
            </div>
<form
  action="https://formsubmit.co/administracion@logisticahbyr.com"
  method="POST"
  onSubmit={(e) => {
    toast({
      title: "¡Gracias por suscribirte!",
      description: "Pronto recibirás nuestras últimas novedades.",
    });
    setEmail("");
  }}
  className="mt-4 space-y-2"
>
  {/* Campos ocultos de configuración */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://logisticahbyr.com/" />

  <p className="text-sm text-muted-foreground">
    Suscríbete a nuestro boletín
  </p>
  <div className="flex space-x-2">
    <Input
      type="email"
      name="email"
      placeholder="Tu email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="flex-1"
    />
    <Button type="submit">
      <Send className="h-4 w-4" />
    </Button>
  </div>
</form>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} HBYR Logistica y Transporte. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 text-sm">
              <a
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
              </a>
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Gracias por visitarnos. Nos encantaría trabajar contigo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
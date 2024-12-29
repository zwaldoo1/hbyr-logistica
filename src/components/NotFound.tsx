import Button from "./ui/Button";
import { Home, LifeBuoy } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold">404</h1>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Parece que estás perdido. No encontramos lo que buscabas.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a href="/contact">
              <LifeBuoy className="mr-2 h-4 w-4" />
              Contactar soporte
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
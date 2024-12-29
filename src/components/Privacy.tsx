import { Separator } from "./ui/separator";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Política de Privacidad</h1>
        <p className="text-xl text-muted-foreground">
          Tu confianza es importante para nosotros
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introducción</h2>
          <p className="text-muted-foreground">
            En Lumos Creatives, nos tomamos muy en serio la protección de tus datos personales.
            Esta política describe cómo recopilamos, usamos y protegemos tu información cuando
            utilizas nuestros servicios.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Qué datos recopilamos</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Información personal (nombre, correo electrónico)</li>
            <li>Datos de contacto profesional</li>
            <li>Información de uso del sitio web</li>
            <li>Cookies y datos de navegación</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cómo usamos los datos</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Mejorar nuestros servicios y experiencia del usuario</li>
            <li>Personalizar el contenido según tus preferencias</li>
            <li>Comunicarnos contigo sobre actualizaciones o servicios</li>
            <li>Procesar tus solicitudes y transacciones</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Con quién compartimos los datos</h2>
          <p className="text-muted-foreground">
            No vendemos tu información personal. Compartimos datos solo con:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Proveedores de servicios necesarios para nuestras operaciones</li>
            <li>Herramientas de análisis para mejorar nuestros servicios</li>
            <li>Autoridades cuando la ley lo requiere</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tus derechos</h2>
          <p className="text-muted-foreground">
            Tienes derecho a:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Acceder a tus datos personales</li>
            <li>Solicitar la rectificación de datos incorrectos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al procesamiento de tus datos</li>
            <li>Solicitar la portabilidad de tus datos</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contacto</h2>
          <p className="text-muted-foreground">
            Para cualquier consulta sobre nuestra política de privacidad o ejercer
            tus derechos, contáctanos en:
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p>Email: privacy@lumoscreatives.com</p>
            <p>Teléfono: +1 234 567 890</p>
            <p>Dirección: 123 Creative Avenue, Ciudad Creativa</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
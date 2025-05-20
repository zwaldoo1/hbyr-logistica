const ContactMap = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestra Ubicación</h2>
              <p className="text-gray-600">
                Visítanos en nuestras oficinas centrales. Estamos ubicados en una zona de fácil acceso.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
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
  
  export default ContactMap;
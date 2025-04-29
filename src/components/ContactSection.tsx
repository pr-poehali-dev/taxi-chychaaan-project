
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наши <span className="text-primary">контакты</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Адрес</h3>
                  <p className="text-gray-600">г. Кызыл, ул. Ленина, 45</p>
                  <p className="text-gray-600">Республика Тыва, 667000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Телефоны</h3>
                  <p className="text-gray-600">+7 (39422) 3-45-67</p>
                  <p className="text-gray-600">+7 (923) 456-78-90</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@chychaan-taxi.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Режим работы</h3>
                  <p className="text-gray-600">Круглосуточно, 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden h-80">
            {/* Google Maps iframe - координаты Кызыла */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74245.76655777807!2d94.37732036459398!3d51.71871683874815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d1b3cd51003b56f%3A0x5c9967af9f7cf86e!2z0JrRi9C30YvQuw!5e0!3m2!1sru!2sru!4v1714453143903!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения такси Чычаан в Кызыле"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="px-8 py-6 text-lg">
            <Phone className="mr-2" /> Вызвать такси
          </Button>
        </div>
      </div>
    </section>
  );
};

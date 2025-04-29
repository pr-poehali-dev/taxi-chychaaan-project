
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  // Координаты города Кызыла
  const kyzylCoordinates = {
    lat: 51.7148,
    lng: 94.4502
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Свяжитесь с <span className="text-primary">нами</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и помочь с заказом такси
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Телефон</h4>
                  <p className="text-gray-600">+7 (39422) 3-45-67</p>
                  <p className="text-gray-600">+7 (950) 540-12-34</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-600">info@chychaan-taxi.ru</p>
                  <p className="text-gray-600">zakaz@chychaan-taxi.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Адрес</h4>
                  <p className="text-gray-600">667000, Республика Тыва,</p>
                  <p className="text-gray-600">г. Кызыл, ул. Ленина, 25</p>
                  <p className="text-gray-700 mt-1">
                    Координаты: {kyzylCoordinates.lat}, {kyzylCoordinates.lng}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="w-full py-6">
                Заказать звонок
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-[400px] lg:h-auto">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36901.35354265693!2d${kyzylCoordinates.lng-0.05}!3d${kyzylCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d1b3af09e0ab06b%3A0x6f7879d8eb8fd3f3!2z0JrRi9C30YvQuwwg0KDQtdGB0L8uINCi0YvQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1682876876487!5m2!1sru!2sru`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения Такси Чычаан"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

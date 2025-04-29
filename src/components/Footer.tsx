
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Такси Чычаан</h3>
            <p className="text-gray-400 mb-4">
              Комфортные поездки по городу Кызылу по доступным ценам 24/7
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Контакты</h4>
            <p className="text-gray-400 mb-2">тел: +7 (39422) 3-45-67</p>
            <p className="text-gray-400 mb-2">Email: info@chychaan-taxi.ru</p>
            <p className="text-gray-400">
              Адрес: 667000, Республика Тыва, г. Кызыл, ул. Ленина, 25
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Условия оказания услуг</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Вакансии водителей</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {currentYear} Такси Чычаан. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

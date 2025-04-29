
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Такси Чычаан</h3>
            <p className="text-gray-300">
              Ваш надежный перевозчик в Кызыле. Безопасно, быстро, комфортно.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Городские поездки</li>
              <li>Междугородние перевозки</li>
              <li>Трансфер из/в аэропорт</li>
              <li>Корпоративное обслуживание</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>г. Кызыл, ул. Ленина, 45</li>
              <li>+7 (39422) 3-45-67</li>
              <li>info@chychaan-taxi.ru</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} Такси Чычаан. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

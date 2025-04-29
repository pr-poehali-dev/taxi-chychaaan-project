
import { Shield, Clock, CreditCard, UserCheck, Car, BadgeCheck } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Быстрая подача",
      description: "Машина прибудет в течение 5-10 минут после вызова"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Безопасность",
      description: "Все водители проходят проверку и имеют большой стаж вождения"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Удобная оплата",
      description: "Оплата наличными, картой или через приложение"
    },
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Вежливые водители",
      description: "Наши водители всегда приветливы и помогут с багажом"
    },
    {
      icon: <Car className="h-10 w-10 text-primary" />,
      title: "Комфортные автомобили",
      description: "Современный автопарк с кондиционерами и чистыми салонами"
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "Фиксированная цена",
      description: "Стоимость поездки не изменится в пути"
    }
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Почему выбирают <span className="text-primary">Такси Чычаан</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Мы стремимся сделать ваши поездки максимально комфортными и безопасными
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-yellow-100 rounded-full mb-4">
                  {advantage.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

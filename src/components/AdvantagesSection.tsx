
import { Clock, Shield, CreditCard, ThumbsUp } from "lucide-react";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Быстрая подача",
      description: "Среднее время подачи такси по Кызылу — 5-7 минут",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Безопасность",
      description: "Опытные водители с безупречной репутацией и стажем",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Удобная оплата",
      description: "Наличный и безналичный расчет, корпоративное обслуживание",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: "Комфорт",
      description: "Современный автопарк с кондиционерами и детскими креслами",
    },
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Почему выбирают <span className="text-primary">Такси Чычаан</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

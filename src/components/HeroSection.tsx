
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock } from "lucide-react";

export const HeroSection = () => {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ваш заказ принят! Скоро мы с вами свяжемся.");
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-yellow-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Такси Чычаан — <span className="text-primary">быстро и надежно</span>
            </h1>
            <p className="text-xl text-gray-700">
              Комфортные поездки по городу Кызылу по доступным ценам 24/7
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" />
                <span>г. Кызыл</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary" />
                <span>+7 (39422) 3-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary" />
                <span>Круглосуточно</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Заказать такси</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
                  Откуда
                </label>
                <Input
                  id="from"
                  placeholder="Введите адрес отправления"
                  value={fromAddress}
                  onChange={(e) => setFromAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                  Куда
                </label>
                <Input
                  id="to"
                  placeholder="Введите адрес назначения"
                  value={toAddress}
                  onChange={(e) => setToAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full text-base py-6">
                Вызвать такси
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

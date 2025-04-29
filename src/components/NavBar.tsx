
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Такси Чычаан
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Контакты
            </a>
            <Button className="flex items-center gap-2">
              <Phone size={18} />
              <span>+7 (39422) 3-45-67</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Открыть меню"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <a 
              href="#" 
              className="block py-2 px-4 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#advantages" 
              className="block py-2 px-4 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#contact" 
              className="block py-2 px-4 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="w-full flex items-center justify-center gap-2 mt-2">
              <Phone size={18} />
              <span>+7 (39422) 3-45-67</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

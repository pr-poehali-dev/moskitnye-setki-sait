import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Shield" className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">МоскитСетки</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-500 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#installation" className="text-gray-500 hover:text-blue-600 transition-colors">Установка</a>
              <a href="#contacts" className="text-gray-500 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Защитите свой дом от насекомых
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Качественные москитные сетки с фиксированной ценой установки. 
                Замер производите самостоятельно по нашей видео-инструкции.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                  Выбрать сетку
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Видео-инструкция
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/917561ab-fc14-4f02-80bb-2ed86002c360.jpg" 
                alt="Москитная сетка" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold animate-pulse">
                Гарантия 2 года
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды москитных сеток
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тип москитной сетки для вашего дома
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Screens */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Square" className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Стандартные крепления</CardTitle>
                <CardDescription>Классические рамочные москитные сетки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Прочная алюминиевая рама
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Легкая установка и снятие
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Подходит для большинства окон
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">от 1200 ₽</span>
                    <Badge variant="secondary">Популярно</Badge>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Insert Screens */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="RectangleHorizontal" className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Вставные</CardTitle>
                <CardDescription>Компактные сетки для небольших окон</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Минимальные размеры
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Идеально для створок
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Экономичное решение
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">от 800 ₽</span>
                    <Badge variant="outline">Экономно</Badge>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Door Screens */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Door" className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Дверные</CardTitle>
                <CardDescription>Сетки для балконных и входных дверей</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Усиленная конструкция
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Магнитные замки
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Высокая прочность
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">от 2500 ₽</span>
                    <Badge variant="outline">Премиум</Badge>
                  </div>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Установка по фиксированной цене
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Замер производите самостоятельно по нашей подробной видео-инструкции. 
                Установка - по фиксированной цене без дополнительных платежей.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Посмотрите видео-инструкцию</h3>
                    <p className="text-gray-600">Подробное руководство по замеру окон и дверей</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Произведите замер</h3>
                    <p className="text-gray-600">Измерьте размеры согласно инструкции</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Оформите заказ</h3>
                    <p className="text-gray-600">Установка входит в стоимость</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <Icon name="Wrench" className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Фиксированная цена установки</h4>
                    <p className="text-sm text-gray-600">Стоимость установки не зависит от размера и сложности</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/cd313e89-b18a-43a4-b6e0-1989d6af9450.jpg" 
                alt="Процесс установки" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Icon name="Play" className="w-6 h-6 mr-2" />
                  Смотреть видео-инструкцию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы ответить на все ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
              <p className="text-sm text-gray-500">Пн-Пт: 9:00-18:00</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
              <p className="text-sm text-gray-500">Быстрые ответы</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@moskitsetki.ru</p>
              <p className="text-sm text-gray-500">Ответим в течение дня</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Shield" className="w-8 h-8 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold">МоскитСетки</h3>
              </div>
              <p className="text-gray-400">
                Качественные москитные сетки для вашего дома
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Стандартные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вставные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дверные</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Замер</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@moskitsetki.ru</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МоскитСетки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
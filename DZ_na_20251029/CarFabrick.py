from Car import Car
from dataclasses import dataclass, field


@dataclass
class CarFabrick:
    engines: dict  # Словарь доступных двигателей
    cars: list = field(default_factory=list)  # Список созданных автомобилей

    def print_engines(self):
        # Отображение доступных двигателей
        for number, engine in self.engines.items():
            print(number, engine)

    def pick_engine(self):
        # Выбор двигателя пользователем
        return self.engines[int(input('Введите номер выбранного двигателя: '))]

    def create_cars(self):
        # Интерактивное создание автомобилей
        while True:
            print(f'Создайте {len(self.cars) + 1} машину.')
            maker = input("Введите производителя машины: ")
            model = input("Введите модель машины: ")
            year = input("Введите год изготовления машины: ")

            # Создание автомобиля с проверкой года через сеттер
            car = Car(maker, model, int(year))

            self.print_engines()
            car.add_components_to_car(
                engine=self.pick_engine()
            )

            self.cars.append(car)

            if len(self.cars) == 1:
                print()
                continue

            user_choice = input(
                "Введите 'Выход' для выхода из конструктора"
                " или нажмите Enter чтоб продолжить: "
            )

            print()

            if user_choice.lower().strip() == 'выход':
                break

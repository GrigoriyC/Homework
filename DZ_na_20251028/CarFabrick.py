from Car import Car
from dataclasses import dataclass, field
import components


@dataclass
class CarFabrick:
    engines: dict
    wheels: dict
    transmissions: dict
    brakes: dict
    cars: list = field(default_factory=list)

    def print_components(self, component_type, components_dict):
        """Универсальный метод для вывода компонентов"""
        print(f"\nДоступные {component_type}:")
        for number, component in components_dict.items():
            print(f"  {number}: {component}")

    def pick_component(self, component_type, components_dict):
        """Универсальный метод для выбора компонента"""
        self.print_components(component_type, components_dict)
        try:
            choice = int(input(f'Введите номер выбранного {component_type}: '))
            return components_dict[choice]
        except (ValueError, KeyError):
            print("Неверный выбор! Будет выбран компонент по умолчанию.")
            return list(components_dict.values())[0]

    def create_cars(self):
        while True:
            print(f'\n--- Создаем {len(self.cars) + 1} машину ---')
            maker = input("Введите производителя машины: ")
            model = input("Введите модель машины: ")
            year = input("Введите год изготовления машины: ")

            car = Car(maker, model, year)

            # Выбор всех компонентов с проверкой совместимости
            components_added = False
            while not components_added:
                try:
                    engine = self.pick_component("двигатели", self.engines)
                    wheel = self.pick_component("колеса", self.wheels)
                    transmission = self.pick_component("трансмиссии", self.transmissions)
                    brakes = self.pick_component("тормоза", self.brakes)

                    car.add_components_to_car(
                        engine=engine,
                        wheel=wheel,
                        transmission=transmission,
                        brakes=brakes
                    )
                    components_added = True

                except ValueError as e:
                    print(f"Ошибка совместимости: {e}")
                    print("Пожалуйста, выберите другие компоненты.\n")

            self.cars.append(car)
            print(f"Машина {car} успешно создана!")

            if len(self.cars) >= 1:
                user_choice = input(
                    "\nВведите 'Выход' для выхода из конструктора"
                    " или нажмите Enter чтоб продолжить: "
                )

                if user_choice.lower().strip() == 'выход':
                    break

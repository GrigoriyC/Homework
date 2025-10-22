from Car import Car
from components import Engine, Wheel


class CarFabrick:
    cars = []

    # Список двигателей
    engine_list = [
        Engine("Ford Extra xS2", 1.5),
        Engine("Lamborgini Super Ultra XXGENZ", 3),
        Engine("Lada Aura m100", 1.8),
    ]
    engine_dict = {number: engine for number, engine in enumerate(engine_list, start=1)}

    # Список колес
    wheel_list = [
        Wheel("Стандартные колеса", radius=0.3),
        Wheel("Спортивные колеса", radius=0.35),
        Wheel("Внедорожные колеса", radius=0.4),
        Wheel("Гоночные колеса", radius=0.25),
        Wheel("Комфортные колеса", radius=0.32),
    ]
    wheel_dict = {number: wheel for number, wheel in enumerate(wheel_list, start=1)}

    def print_engines(self):
        print("\n--- Доступные двигатели ---")
        for number, engine in self.engine_dict.items():
            print(f"{number}. {engine}")

    def print_wheels(self):
        print("\n--- Доступные колеса ---")
        for number, wheel in self.wheel_dict.items():
            print(f"{number}. {wheel.name} (радиус: {wheel.radius} м)")

    def pick_engine(self):
        return self.engine_dict[int(input('Введите номер выбранного двигателя: '))]

    def pick_wheel(self):
        return self.wheel_dict[int(input('Введите номер выбранных колес: '))]

    def create_cars(self):
        while True:
            maker = input("\nВведите производителя машины: ")
            model = input("Введите модель машины: ")
            year = input("Введите год изготовления машины: ")

            car = Car(maker, model, year)

            # Выбор двигателя
            self.print_engines()
            engine = self.pick_engine()

            # Выбор колес
            self.print_wheels()
            wheel = self.pick_wheel()

            # Добавление компонентов в автомобиль
            car.add_components_to_car(
                engine=engine,
                wheel=wheel
            )

            self.cars.append(car)

            print(f"\nАвтомобиль создан!")
            print(f"Модель: {car}")
            print(f"Двигатель: {engine.name}")
            print(f"Колеса: {wheel.name} (радиус: {wheel.radius} м)")
            print(f"Расчетная скорость: {car.speed:.2f} м/с")

            user_choice = input(
                "\nВведите 'Выход' для выхода из конструктора"
                " или нажмите Enter для создания следующего автомобиля: "
            )
            if user_choice.lower().strip() == 'выход':
                break

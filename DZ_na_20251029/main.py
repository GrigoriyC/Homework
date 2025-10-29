from Track import Track
from CarFabrick import CarFabrick
import components

# Создание фабрики в Москве с доступными двигателями
car_fabrick_in_moscow = CarFabrick(
    {
        number: engine
        for number, engine in enumerate([
            components.Engine("Ford Extra xS2", 1.5),
            components.Engine("Lamborgini Super Ultra XXGENZ", 3),
            components.Engine("Lada Aura m100", 1.8),
        ], start=1)
    }
)

# Создание автомобилей пользователем
car_fabrick_in_moscow.create_cars()

# Проведение гонки
Track(int(input("Введите длину трека: ")), car_fabrick_in_moscow.cars).ride()

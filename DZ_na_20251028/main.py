from Track import Track
from CarFabrick import CarFabrick
import components

# Создаем компоненты с указанием совместимости
engines = {
    1: components.Engine("Ford Extra xS2", 1.5, compatible_with=["Sport Wheels", "Standard Wheels", "Ford Transmission"]),
    2: components.Engine("Lamborgini Super Ultra XXGENZ", 3, compatible_with=["Sport Wheels", "Racing Transmission"]),
    3: components.Engine("Lada Aura m100", 1.8, compatible_with=["Standard Wheels", "Lada Transmission", "Basic Brakes"]),
    4: components.Engine("УАЗ EXTRA POWER", 2.2, compatible_with=["Offroad Wheels", "UAZ Transmission", "Offroad Brakes"]),
}

wheels = {
    1: components.Wheel("Sport Wheels", 16, "sport", compatible_with=["Ford Extra xS2", "Lamborgini Super Ultra XXGENZ"]),
    2: components.Wheel("Standard Wheels", 15, "standard", compatible_with=["Ford Extra xS2", "Lada Aura m100"]),
    3: components.Wheel("Offroad Wheels", 18, "offroad", compatible_with=["УАЗ EXTRA POWER"]),
    4: components.Wheel("Racing Wheels", 17, "sport", compatible_with=["Lamborgini Super Ultra XXGENZ"]),
}

transmissions = {
    1: components.Transmission("Ford Transmission", "automatic", 6, compatible_with=["Ford Extra xS2"]),
    2: components.Transmission("Racing Transmission", "manual", 7, compatible_with=["Lamborgini Super Ultra XXGENZ"]),
    3: components.Transmission("Lada Transmission", "manual", 5, compatible_with=["Lada Aura m100"]),
    4: components.Transmission("UAZ Transmission", "manual", 5, compatible_with=["УАЗ EXTRA POWER"]),
}

brakes = {
    1: components.Brakes("Sport Brakes", "disc", 0.9, compatible_with=["Sport Wheels", "Racing Wheels"]),
    2: components.Brakes("Basic Brakes", "disc", 0.7, compatible_with=["Standard Wheels", "Lada Aura m100"]),
    3: components.Brakes("Offroad Brakes", "disc", 0.8, compatible_with=["Offroad Wheels", "УАЗ EXTRA POWER"]),
}

car_fabrick_in_moscow = CarFabrick(
    engines=engines,
    wheels=wheels,
    transmissions=transmissions,
    brakes=brakes
)

car_fabrick_in_moscow.create_cars()

# Запускаем гонку если созданы машины
if car_fabrick_in_moscow.cars:
    track_length = int(input("Введите длину трека: "))
    Track(track_length, car_fabrick_in_moscow.cars).ride()
else:
    print("Не создано ни одной машины для гонки!")

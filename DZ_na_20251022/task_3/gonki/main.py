from Track import Track
from CarFabrick import CarFabrick

car_fabrick = CarFabrick()
car_fabrick.create_cars()

Track(int(input("Введите длину трека: ")), car_fabrick.cars).ride()
from dataclasses import dataclass
from time import sleep


@dataclass
class Track:
    length: int  # Длина трека
    cars: list  # Список участников

    def ride(self):
        # Проведение гонки
        print('Участники:')
        for car in self.cars:
            print(car)

        # Обратный отсчет
        print(3)
        sleep(1)
        print(2)
        sleep(1)
        print(1)
        sleep(1)

        print("Вычисляю результат ...")
        sleep(2)

        # Сортировка автомобилей по времени прохождения трека
        cars_leaderboard = sorted(self.cars, key=lambda car: self.length / car.speed)
        for car in cars_leaderboard:
            print(f"{cars_leaderboard.index(car) + 1} место: {car}")

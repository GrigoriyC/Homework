from dataclasses import dataclass
from time import sleep


@dataclass
class Track:
    length: int
    cars: list

    def ride(self):
        print('Участники:')
        for car in self.cars:
            print(car)

        print(3)
        sleep(1)
        print(2)
        sleep(1)
        print(1)
        sleep(1)

        print("Вычисляю результат ...")
        sleep(2)

        cars_leaderboard = sorted(self.cars, key=lambda car: self.length / car.speed)
        for car in cars_leaderboard:
            print(f"{cars_leaderboard.index(car) + 1} место: {car}")

        # for i in range(len(self.cars)):
        #   print(f"{i + 1} место: {cars_leaderboard[i]}")

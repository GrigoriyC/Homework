from dataclasses import dataclass

@dataclass
class Track:
  length: int
  cars: list

  def ride(self):
    print('Участники')
    for car in self.cars:
      print(car)
    
    print("Вычисляю результат ...")
    leaderboard = sorted(self.cars, key=lambda car: self.length / car.speed)
    for i in range(len(self.cars)):
      print(f"{i + 1} место: {leaderboard[i]}")




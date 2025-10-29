from dataclasses import dataclass
from abc import ABC, abstractmethod

@dataclass
class CarComponent(ABC):  # Абстрактный базовый класс для компонентов автомобиля
  name: str

@dataclass
class Engine(CarComponent):  # Конкретный класс двигателя
  power: int

  def __str__(self):
    return f'{self.name}, мощность - {self.power}'

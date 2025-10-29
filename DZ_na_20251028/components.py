from dataclasses import dataclass
from abc import ABC, abstractmethod

@dataclass
class CarComponent(ABC):
    name: str
    # Добавляем поле совместимости для каждого компонента
    compatible_with: list = None

    def is_compatible_with(self, other_component):
        """Проверяет совместимость с другим компонентом"""
        if self.compatible_with is None or other_component.compatible_with is None:
            return True  # Если совместимость не указана, считаем совместимыми
        return self.name in other_component.compatible_with


@dataclass
class Engine(CarComponent):
    power: int

    def __str__(self):
        return f'{self.name}, мощность - {self.power}'


@dataclass
class Wheel(CarComponent):
    radius: int
    type: str  # sport, offroad, standard

    def __str__(self):
        return f'{self.name}, радиус - {self.radius}, тип - {self.type}'


@dataclass
class Transmission(CarComponent):
    type: str  # manual, automatic, robot
    gears: int

    def __str__(self):
        return f'{self.name}, тип - {self.type}, передач - {self.gears}'


@dataclass
class Brakes(CarComponent):
    type: str  # disc, drum
    performance: float  # 0.0 to 1.0

    def __str__(self):
        return f'{self.name}, тип - {self.type}, эффективность - {self.performance}'

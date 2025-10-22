from math import pi
from dataclasses import dataclass


@dataclass
class Car:
    maker: str
    model: str
    year: int

    def add_components_to_car(self, **components):
        self.engine = components['engine']
        self.wheel = components['wheel']  # Добавляем колесо.

        # В формулу вычисления скорости добавляем радиус колеса.
        # Формула скорости с учетом радиуса колеса (в метрах).
        self.speed = (2 * pi * self.wheel.radius) * self.engine.power

    def __str__(self):
        return f"{self.maker} {self.model} {self.year}"

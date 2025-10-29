from math import pi
from dataclasses import dataclass

@dataclass
class Car:
    maker: str
    model: str
    year: int

    def __post_init__(self):
        # Проверка года при инициализации
        if self.year < 0:
            raise ValueError("Год выпуска не может быть отрицательным")

    @property
    def year(self):
        return self._year

    @year.setter
    def year(self, value):
        # Сеттер с проверкой валидности года
        if value < 0:
            raise ValueError("Год выпуска не может быть отрицательным")
        self._year = value

    def add_components_to_car(self, **components):
        # Добавление компонентов к автомобилю
        self.components = components
        # Расчет скорости на основе мощности двигателя и радиуса колеса
        self.speed = (2 * pi * 12) * self.components['engine'].power

    def __str__(self):
        return f"{self.maker} {self.model} {self.year}"

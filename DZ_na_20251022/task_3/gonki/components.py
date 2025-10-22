from dataclasses import dataclass

@dataclass
class CarComponent:
    name: str

@dataclass
class Engine(CarComponent):
    power: float

# Добавляем колеса в файл "components.py".
@dataclass
class Wheel(CarComponent):
    radius: float

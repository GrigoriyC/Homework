from math import pi
from dataclasses import dataclass


@dataclass
class Car:
    maker: str
    model: str
    year: int

    def add_components_to_car(self, **components):
        # Проверяем совместимость всех компонентов перед установкой
        if not self._check_components_compatibility(components):
            raise ValueError("Компоненты не совместимы друг с другом!")

        self.components = components

        # Расчет скорости теперь учитывает радиус колеса и тип трансмиссии
        wheel_radius = self.components.get('wheel', None)
        engine_power = self.components.get('engine', None)
        transmission = self.components.get('transmission', None)

        # Базовая скорость зависит от двигателя и колес
        if wheel_radius and engine_power:
            base_speed = (2 * pi * wheel_radius.radius) * engine_power.power
        else:
            base_speed = (2 * pi * 12) * engine_power.power if engine_power else 0

        # Модификаторы скорости в зависимости от трансмиссии
        speed_modifier = 1.0
        if transmission:
            if transmission.type == 'sport':
                speed_modifier = 1.2
            elif transmission.type == 'automatic':
                speed_modifier = 1.1

        self.speed = base_speed * speed_modifier

    def _check_components_compatibility(self, components):
        """Проверяет совместимость всех компонентов между собой"""
        component_list = list(components.values())

        for i, comp1 in enumerate(component_list):
            for j, comp2 in enumerate(component_list):
                if i != j and not comp1.is_compatible_with(comp2):
                    print(f"ОШИБКА: {comp1.name} не совместим с {comp2.name}!")
                    return False
        return True

    def __str__(self):
        return f"{self.maker} {self.model} {self.year}"

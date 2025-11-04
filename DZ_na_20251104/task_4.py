# # Продвинутые типы (Optional, Union, Callable)
# def calculator(operation, a, b):
#     return operation(a, b)

from typing import Callable, Union, Optional

print("\nЗадание 4.\n"\
"Продвинутые типы (Optional, Union, Callable)\n"\
"def calculator(operation, a, b):\n"\
"    return operation(a, b)")

# Псевдонимы для улучшения читаемости
Number = Union[int, float]
OperationFunc = Callable[[Number, Number], Number]


def calculator(operation: OperationFunc, a: Number, b: Number) -> Number:
    return operation(a, b)

print("\nРезультат - функция создана.")

# Проверяем работу функции.
print("\nПроверяем работу функции:")


def add(x: Number, y: Number) -> Number:
    return x + y


def multiply(x: Number, y: Number) -> Number:
    return x * y

result1 = calculator(add, 5, 3)
result2 = calculator(multiply, 4, 2.5)

print(f"Базовые математические операции: 5 + 3 = {result1}.")
print(f"Базовые математические операции: 4 * 2.5 = {result2}.")

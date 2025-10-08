print("Напишите декоратор @repeat(n), который будет вызывать декорируемую функцию n раз подряд и возвращать список из всех результатов.")

import random


# Создаем декоратор, который вызывает декорируемую функцию n раз подряд
# и возвращает список из всех результатов.
def repeat(n):
    def decorator(func):
        # Создаем функцию-обертку, которая вызывает целевую функцию n раз
        # и собирает результаты в список.
        def wrapper(*args, **kwargs):
            results = []
            for i in range(n):
                # Вызываем функцию и добавляем результат в список
                result = func(*args, **kwargs)
                results.append(result)
            return results

        return wrapper

    return decorator


# Пример использования:
@repeat(n=3)
def get_random_number():
    return random.randint(1, 10)


result = get_random_number()
print(result)

print()
print("Задание 1.")
print("В файле main.py есть заготовка класса Point с комментариями.\n" \
"Задача: Реализовать все методы, помеченные как «ДЗ»:\n" \
"__sub__ (вычитание)\n" \
"__mul__ (умножение)\n" \
"__truediv__ (деление)\n" \
"__mod__ (остаток от деления)\n" \
"__lt__ (<)\n" \
"__gt__ (>)\n" \
"__le__ (<=)\n" \
"__ge__ (>=)\n" \
"__ne__ (!=)")
print()

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Point(self.x - other.x, self.y - other.y)

    def __mul__(self, other):
        return Point(self.x * other.x, self.y * other.y)

    def __truediv__(self, other):
        return Point(self.x / other.x, self.y / other.y)

    def __mod__(self, other):
        return Point(self.x % other.x, self.y % other.y)

    def __lt__(self, other):
        # Сравниваем по расстоянию от начала координат
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)

    def __gt__(self, other):
        # Сравниваем по расстоянию от начала координат
        return (self.x**2 + self.y**2) > (other.x**2 + other.y**2)

    def __le__(self, other):
        return (self.x**2 + self.y**2) <= (other.x**2 + other.y**2)

    def __ge__(self, other):
        return (self.x**2 + self.y**2) >= (other.x**2 + other.y**2)

    def __ne__(self, other):
        return self.x != other.x or self.y != other.y

    def __eq__(self, other):
        # Для полноты, хотя не требовался
        return self.x == other.x and self.y == other.y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

    def __repr__(self):
        return f"Point({self.x}, {self.y})"

print("Использование методов.")
print()
# Создаем точки.
print("Создаем точки.")
p1 = Point(3, 4)
p2 = Point(1, 2)

print()
print("p1 =", p1)
print("p2 =", p2)

# Выполняем арифметические операции.
print()
print("\n--- Выполняем арифметические операции ---")
print("p1 + p2 =", p1 + p2)  # Point(4, 6)
print("p1 - p2 =", p1 - p2)  # Point(2, 2)
print("p1 * p2 =", p1 * p2)  # Point(3, 8)
print("p1 / p2 =", p1 / p2)  # Point(3.0, 2.0)
print("p1 % p2 =", p1 % p2)  # Point(0, 0)

# Выполняем операции сравнения, используем для этого расстояния от начала координат.
print()
print("\n--- Выполняем операции сравнения ---")
print("p1 < p2 =", p1 < p2)   # False (5 < 2.236?)
print("p1 > p2 =", p1 > p2)   # True (5 > 2.236)
print("p1 <= p2 =", p1 <= p2) # False
print("p1 >= p2 =", p1 >= p2) # True
print("p1 != p2 =", p1 != p2) # True
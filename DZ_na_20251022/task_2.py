print()
print("Задание 2.")
print("Сейчас класс MyList поддерживает __getitem__, __setitem__, __delitem__.\n" \
"Задача: Добавить:\n" \
"__len__ — чтобы работала функция len(my_list)\n" \
"__contains__ — чтобы работал оператор in")
print()


class MyList:
  def __init__(self, data):
    self.data = data

  def __getitem__(self, index):
    return self.data[index]

  def __setitem__(self, index, value):
    self.data[index] = value

  def __delitem__(self, index):
    del self.data[index]

  def __str__(self):
    return f"{self.data}"

  def __len__(self):
    return len(self.data)

  def __contains__(self, item):
    return item in self.data

# Создаем экземпляр MyList.
print()
print("Создаем экземпляр MyList.")
my_list = MyList([1, 2, 3, 4, 5])

print("Исходный список:", my_list)

# Проверяем, как работает метод __len__.
print()
print("Проверяем, как работает метод __len__.")
print("Длина списка:", len(my_list))  # 5

# Проверяем, как работает метод __contains__.
print()
print("Проверяем, как работает метод __contains__.")
print("Есть ли 3 в списке:", 3 in my_list)        # True
print("Есть ли 10 в списке:", 10 in my_list)      # False
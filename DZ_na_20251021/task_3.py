print()
print("Задание 3.")
print("Доработайте класс BankAccount из урока: \n" \
"Если пин-код неверный, выбрасывайте исключение ValueError с сообщением \"Неверный пин-код!\".\n" \
"Геттер и сеттер для balance должны проверять __is_authenticated. Если аутентификации нет — выводить сообщение \"Требуется аутентификация!\".\n" \
"Подсказка: используйте raise ValueError(\"...\") и try-except.")
print()


class BankAccount:
  def __init__(self, pin_code):
    self.__balance = 0
    self.__pin_code = pin_code
    self.__is_authenticated = False

  def authenticate(self, pin_code):
    if self.__pin_code == pin_code:
      self.__is_authenticated = True
    else:
      raise ValueError("Неверный пин-код!")

  @property
  def balance(self):
    if self.__is_authenticated:
      return self.__balance
    else:
      raise ValueError("Требуется аутентификация!")

  @balance.setter
  def balance(self, sum_of_money):
    if self.__is_authenticated:
      self.__balance = sum_of_money
    else:
      raise ValueError("Требуется аутентификация!")


my_ba = BankAccount("1234")


# Попытка получить баланс без аутентификации
try:
    print(my_ba.balance)
except ValueError as e:
    print(f"Ошибка: {e}")


# Попытка аутентификации с неверным пин-кодом
try:
    my_ba.authenticate("0000")
except ValueError as e:
    print(f"Ошибка аутентификации: {e}")


# Успешная аутентификация
try:
  my_ba.authenticate("1234")
  print("Аутентификация успешна!")

  # Теперь можно работать с балансом
  print(f"Текущий баланс: {my_ba.balance}")

  # Изменение баланса
  my_ba.balance = 1000
  print(f"Новый баланс: {my_ba.balance}")

except ValueError as e:
  print(f"Ошибка: {e}")
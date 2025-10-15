# Задание
# ООП
# Класс "БankAccount"
# Создайте класс BankAccount, который имеет:
# 
# атрибуты: owner (владелец), balance (баланс)
# 
# методы:
# 
# deposit(amount) - пополнить счет
# withdraw(amount) - снять средства (нельзя снять больше, чем на счете)
# display_balance() - показать текущий баланс

class BankAccount:
    def __init__(self, owner_arg):
        self.owner = owner_arg
        self.balance = 0
        if self.owner == "":
            # Если имя не указано, будет необходимо обработать ошибку ValueError.
            raise ValueError("Имя не может быть пустым. Пожалуйста, укажите имя.")

    # Создаем метод для пополнения счета.
    def deposit(self):
        amount = float(input("Введите сумму для пополнения баланса: "))
        self.balance += amount
        print("\nСумма Вашего депозита:", amount)

    # Создаем метод для снятия средств (нельзя снять больше, чем на счете).
    def withdraw(self):
        amount = float(input("Укажите сумму, которую желаете снять: "))
        if self.balance >= amount:
            self.balance -= amount
            print("\nСумма для снятия:", amount)
        else:
            print("\nНедостаточно средств для выполнения операции.")

    # Создаем метод для возможности показать текущий баланс.
    def display_balance(self):
        print("\nВаш баланс =", self.balance)


# Создание объекта в BankAccount
s = BankAccount("Ben")
# Пополнить счет.
s.deposit()
# Снять денежные средства.
s.withdraw()
# Показать текущий баланс.
s.display_balance()
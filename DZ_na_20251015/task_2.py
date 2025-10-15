# Задание 2.
# Создать функцию которая находит все вхождения внутри списка.
# my_list = [100, 'Hello', True, 200, 'Hello', 'Hello', 'Hello', True, 55, "WorldD", 0, True, 'hello']
# el_to_find_all_indexes = True
# 
# all_indexes = []
# 
# first_index = my_list.index(True)
# all_indexes.append(first_index)
# 
# i = first_index + 1
# while i < len(my_list):
#   pass
# '''

print()
print("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
print()
print("Задание 2.")
print()

# Определяем список.
my_list = [100, 'Hello', True, 200, 'Hello', 'Hello', 'Hello', True, 55, "WorldD", 0, True, 'hello']
# Указываем значение, все вхождения которого нужно найти.
el_to_find_all_indexes = True
# Определяем новый пустой список.
all_indexes = []

print(f"Задан список: {my_list}.")
print(f"В нем нужно найти все индексы вхождений для значения \"el_to_find_all_indexes = {el_to_find_all_indexes}\".")
print()


# Создаем функцию.
def find_occurrences(list_name):
    # Запускаем цикл, который будет находить индексы всех вхождений заданного значения,
    # и записывать эти индексы в список "all_indexes".
    for index, value in enumerate(list_name):
        # Проверяем, есть ли заданное для проверки значение в списке "my_list".
        # Если текущее значение соответствует нужному, добавить индекс в список.
        if value == True:
            all_indexes.append(index)


# Запускаем функцию
find_occurrences(my_list)

# Выводим на экран (в консоль) все полученные индексы.
print(f"Индексы всех вхождений указанного значения: {all_indexes}.")

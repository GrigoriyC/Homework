print()
print("Напишите программу, которая:\n"\
"Запрашивает у пользователя 5 имен студентов и их оценки.\n"\
"Сохраняет данные в два списка.\n"\
"Выводит список студентов с оценками используя enumerate и zip.\n"\
"Находит и выводит средний балл.")
print()

print()
students = []
for i in range(0, 5):
    students.append(input("Введите имя студента: "))
    i += 1
# print(students)
print()

grades = []
for i in range(0, 5):
    grades.append(input("Введите их оценки соответственно: "))
    i += 1
# print(grades)
print()

print()
print("Оценки студентов: ")
for i, (student, grades) in enumerate(zip(students, grades), start=1):
  print(f"{i}) {student} - {grades}")
print()

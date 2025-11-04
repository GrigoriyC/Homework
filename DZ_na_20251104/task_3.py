from typing import List, Dict, Any

print("Задание 3:\n"\
"Добавьте аннотации типов для функции работы со списками:\n"\
"def process_students(students):\n"\
"    result = []\n"\
"    for student in students:\n"\
"        if student['age'] > 20:\n"\
"            result.append(student['name'])\n"\
"    return result")

def process_students(students: List[Dict[str, Any]]) -> List[str]:
    result: List[str] = []
    for student in students:
        if student['age'] > 20:
            result.append(student['name'])
    return result

print("\nРезультат - аннотации типов добавлены.")
# Проверяем работу функции.
print("\nПроверяем работу функции:")
print("Создаем список.")
students = [
    {'name': 'Анна', 'age': 22, 'grade': 'A'},
    {'name': 'Иван', 'age': 19, 'grade': 'B'},
    {'name': 'Мария', 'age': 25, 'grade': 'A'}
]

result = process_students(students)
print("Выводим результат:")
print(result)

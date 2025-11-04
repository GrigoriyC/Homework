print()
print("Задание 1:\n"\
"Добавьте правильные аннотации типов:\n"\
"def calculate_statistics(numbers):\n"\
"    total = sum(numbers)\n"\
"    average = total / len(numbers)\n"\
"    return total, average.")

# Добавьте правильные аннотации типов:
def calculate_statistics(numbers: int) -> int:
    total = sum(numbers)
    average = total / len(numbers)
    return total, average

print("\n"\
"Аннотации типов добавлены.")

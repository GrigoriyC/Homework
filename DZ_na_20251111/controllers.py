import db


def auth_user(login, password, confirm_password):
  # Проверка совпадения паролей
  if password.strip() != confirm_password.strip():
    message = 'Указанные пароли не совпадают.'
    print(message)
    return

  user = db.get_user_by_login(login.strip())
  if user is None:
    message = 'Такого пользователя не существует!'
  else:
    if user.check_password(password.strip()):
      message = f"Привет, {user.initials}"
    else:
      message = "Неверный пароль!"

  print(message)


def register_user(login, password, confirm_password, initials):
  # Проверка совпадения паролей
  if password.strip() != confirm_password.strip():
    message = 'Указанные пароли не совпадают.'
    print(message)
    return

  # Проверка на уникальность логина
  if db.get_user_by_login(login.strip()):
    message = 'Пользователь с таким логином уже существует!'
    print(message)
    return

  # Проверка, что все поля заполнены
  if not login.strip() or not password.strip() or not initials.strip():
    message = 'Все поля должны быть заполнены!'
    print(message)
    return

  # Создание нового пользователя
  new_user = db.User(login=login.strip(), password=password.strip(), initials=initials.strip())
  db.add_user(new_user)
  message = f'Пользователь {login.strip()} успешно зарегистрирован!'
  print(message)

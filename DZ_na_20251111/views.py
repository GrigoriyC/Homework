import tkinter

from controllers import auth_user, register_user
from window_config import *


main_window = tkinter.Tk()
main_window.title(TITLE)
main_window.geometry(f"{WIDTH}x{HEIGHT}")
# main_window.iconbitmap(ICON)

# Форма авторизации
tkinter.Label(main_window, text="--- Авторизация ---", font=("Arial", 12)).pack()

tkinter.Label(main_window, text="Логин").pack()
login_text = tkinter.Text(main_window, width=15, height=1)
login_text.pack()

tkinter.Label(main_window, text="Пароль").pack()
password_text = tkinter.Text(main_window, width=15, height=1)
password_text.pack()

tkinter.Label(main_window, text="Повторите пароль").pack()
confirm_password_text = tkinter.Text(main_window, width=15, height=1)
confirm_password_text.pack()

tkinter.Button(
  main_window,
  text="Войти",
  command=lambda: auth_user(
    login=login_text.get(1.0, tkinter.END),
    password=password_text.get(1.0, tkinter.END),
    confirm_password=confirm_password_text.get(1.0, tkinter.END)
  )
).pack()

# Разделитель
tkinter.Label(main_window, text="").pack()

# Форма регистрации
tkinter.Label(main_window, text="--- Регистрация ---", font=("Arial", 12)).pack()

tkinter.Label(main_window, text="Укажите логин").pack()
reg_login_text = tkinter.Text(main_window, width=15, height=1)
reg_login_text.pack()

tkinter.Label(main_window, text="Введите пароль").pack()
reg_password_text = tkinter.Text(main_window, width=15, height=1)
reg_password_text.pack()

tkinter.Label(main_window, text="Введите пароль еще раз").pack()
reg_confirm_password_text = tkinter.Text(main_window, width=15, height=1)
reg_confirm_password_text.pack()

tkinter.Label(main_window, text="ФИО").pack()
initials_text = tkinter.Text(main_window, width=15, height=1)
initials_text.pack()

# Новая кнопка для регистрации
tkinter.Button(
  main_window,
  text="Зарегистрироваться",
  command=lambda: register_user(
    login=reg_login_text.get(1.0, tkinter.END),
    password=reg_password_text.get(1.0, tkinter.END),
    confirm_password=reg_confirm_password_text.get(1.0, tkinter.END),
    initials=initials_text.get(1.0, tkinter.END)
  )
).pack()

main_window.mainloop()

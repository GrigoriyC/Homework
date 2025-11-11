from models import User

users = {
  user.login: user
  for user in [
    User(login='admin', password='flvby', initials="Михаил Ануфрев Ф."),
    User(login='djonsneg', password='l;jycytu', initials="Джон Сноу"),
    User(login='muchixa', password='vexb[f', initials="Мадара Учиха"),
    User(login='djweak', password='sobaka<3', initials="Джон Уик"),
  ]
}


def get_user_by_login(login):
  return users.get(login)


def add_user(user):
  users[user.login] = user

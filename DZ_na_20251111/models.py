class User:
  def __init__(self, login, password, initials):
    self.login = login
    self.password = password
    self.initials = initials

  def check_password(self, password):
    return self.password == password

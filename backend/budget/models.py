from django.db import models

# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField()
    def __str__(self):
        return self.username
    def get_email(self):
        return self.email

class Balance(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    # 
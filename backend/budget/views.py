from django.shortcuts import render
from django.http import HttpResponse
from .models import Account


# Create your views here.
def login(request):
    return HttpResponse("Implement login here")

def username(request, user):
    a = False
    if (Account.objects.filter(username = user).exists()):
        a = True

    return HttpResponse(a)
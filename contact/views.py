from django.shortcuts import render

# Create your views here.

def contact(request):
    """ A view that allow the user to contact the buisness ower """

    return render(request, 'contact/contact.html')
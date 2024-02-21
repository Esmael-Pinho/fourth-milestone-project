from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages

# Create your views here.

def view_bag(request):
    """ A view that renders the bag contents page """

    return render(request, 'bag/bag.html')

def apply_promo_code_view(request):
    promo_code = request.GET.get('promo_code')

    if is_valid_promo_code(promo_code):
        request.session['promo_code'] = promo_code
        messages.success(request, 'Promo code applied successfully!')
    else:
        # Add an error message
        messages.error(request, 'Invalid promo code. Please try again.')

    # Redirect 
    return redirect(reverse(''))

def is_valid_promo_code(promo_code):
    # Implement your logic to validate the promo code (e.g., check against a list of valid codes)
    return promo_code in ['HALFOFF', 'MINIM2024']
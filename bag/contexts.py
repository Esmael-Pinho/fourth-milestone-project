from decimal import Decimal
from django.conf import settings

def apply_promo_code(total, promo_code):
    # Check if the promo code is valid and apply the discount
    if promo_code == 'HALFOFF':
        return total * Decimal('0.5') 
    else:
        return total

def bag_contents(request):
    bag_items = []
    total = 0
    product_count = 0

    # Calculate total without any discounts
    for item in bag_items:
        total += item['quantity'] * item['product'].price

    # Apply promo code discount 
    promo_code = request.GET.get('promo_code')
    total = apply_promo_code(total, promo_code)

    if total < settings.FREE_DELIVERY_THRESHOLD:
        delivery = total * Decimal(settings.STANDARD_DELIVERY_PERCENTAGE / 100)
        free_delivery_delta = settings.FREE_DELIVERY_THRESHOLD - total
    else:
        delivery = 0
        free_delivery_delta = 0
    
    grand_total = delivery + total
    
    context = {
        'bag_items': bag_items,
        'total': total,
        'product_count': product_count,
        'delivery': delivery,
        'free_delivery_delta': free_delivery_delta,
        'free_delivery_threshold': settings.FREE_DELIVERY_THRESHOLD,
        'grand_total': grand_total,
    }

    return context
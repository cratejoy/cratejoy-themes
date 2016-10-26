var onQtySelect = function() {
	var $select = jQuery(this);
	var newQty = $select.val();
	var cartProduct = $select.data('cart-product');

	var xhr = jQuery.ajax('/cart/update_quantity/' + window.cj.cart_id + '/' + cartProduct, {
		data: JSON.stringify({
			'quantity': newQty
		}),
		contentType: 'application/json',
		dataType: 'json',
		type: 'POST'
	});

	xhr.done(function(data) {
		var $cp = jQuery('#cart-product-' + cartProduct);

		// Update product total
		var $price = $cp.find('.cart-product-price');
		var product = data.product;
		var price = (product.price / 100).toFixed(2);

		$price.text('$'  + price + ' USD');

		// Update cart subtotal
		var cartSubTotal = (data.subtotal / 100).toFixed(2);
		jQuery('#cart-subtotal-price').text('$' + cartSubTotal + ' USD');
	});
};

var onProdRem = function() {
	var $btn = jQuery(this);
	var cartProduct = $btn.data('cart-product');

	jQuery('#nav-cart-icon').removeClass('cart-add-bounce');
	var xhr = jQuery.ajax('/cart/rem/' + window.cj.cart_id + '/' + cartProduct, {
		contentType: 'application/json',
		dataType: 'json',
		type: 'POST'
	});
	$btn.attr('disabled', true);

	// Remove row on success
	xhr.done(function(data) {
		var $cp = jQuery("#cart-product-" + cartProduct);
		$cp.remove();

		if(jQuery('.row.cart-table').length == 1) {
			location.reload();
		}

		var rawPrice = data.subtotal;
		var price = (rawPrice / 100).toFixed(2);

		jQuery('#cart-subtotal-price').text('$' + price + ' USD');
		jQuery('#nav-cart-icon').text(data.cart_size).addClass('cart-add-bounce');
	});

	xhr.always(function() {
		$btn.attr('disabled', false);
	});
}

// Bind handlers
$(function() {
	jQuery('.product-qty-select').on('change', onQtySelect);
	jQuery('.product-rem-btn').on('click', onProdRem);
});

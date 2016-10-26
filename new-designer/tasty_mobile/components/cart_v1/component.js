{% set cart = active_cart() %}
<script>
	window.cj = window.cj || {};
	window.cj.cart_id = {{ cart.id }};
</script>
<script src="{{ 'js/cart.js' | asset_url }}"></script>
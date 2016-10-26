<script src="{{ 'js/jquery.pikachoose.min.js' | asset_url }}"></script>
<script>
$(document).ready(
	function (){
		$("#thumbs").PikaChoose(
			{
				autoPlay: false,
				showCaption: false,
				animationSpeed: 400,
				transition: [0],
				bindFinished: load_image
			}
		);
		if ($("#thumbs li").length <= 1) {
			$("#thumbs").hide();
		}

		var load_image = function(img) {
			var actualImage = new Image();
			container = $(".pika-stage");
		actualImage.src = img.attr('src');
		actualImage.onload = function() {
				width = this.width;
				height = this.height;
				var cutoff = 300;
				img = container.find("img");
				if (width < cutoff) {
					container.css({'min-height': '300px'});
					img.css({'width': width, 'height': height});
					var width_centered = (container.width() - width) / 2;
					var height_centered = (container.height() - height) / 2;
					img.css({'position': 'relative', 'top': height_centered});
				} else {
					img.css({'width': '100%', 'height': '100%', 'top': '0'});
					container.css({'min-height': '0px'});
				}
		}
		};
		$("#thumbs li").on("click", function() {
			setTimeout(function() {
				load_image($(this).find("img"));
			}.bind(this), 400);
		});
		load_image($(".pika-stage").find("img"));

	});
</script>
{{ shop.product_js() }}

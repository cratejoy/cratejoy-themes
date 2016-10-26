;(function ($) {
	var hideSlideBar = function () {
		$('.row-offcanvas').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
			if(!$('.row-offcanvas').hasClass('active')) {
				$('.row-offcanvas').removeClass('active-position');
			}
		});
		$('.row-offcanvas').removeClass('active');
		$(document).unbind('mouseup touchend');
	};

	var showSlideBar = function () {
		$('.row-offcanvas').addClass('active-position');
		$('.row-offcanvas').addClass('active');
		$(document).bind('mouseup touchend', function (e) {
			var $container = $(".sidebar-offcanvas");
			if (!$container.is(e.target) && $container.has(e.target).length === 0) {
				hideSlideBar();
			}
		});
	};

	$('[data-toggle="offcanvas show-menu"]').click(function () {
		showSlideBar();
	});
	
	$('.sheader .btn-close').click(function () {
		hideSlideBar();
	});
})(jQuery);
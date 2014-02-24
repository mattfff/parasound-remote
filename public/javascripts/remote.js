(function($) {
	$(function() {
		$('button').click(function() {
			$.post('/actions/' + $(this).attr("id"), {});
		});
	});
})(Zepto);

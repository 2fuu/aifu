/*!
 * jquery.mselect - v1.0.0
 * https://github.com/luoxt/mselect
 * 2016-12-20
 *
 * Copyright 2016 luoxt
 *
 */
(function ($) {
	$.fn.extend({
		/**
		 *	$arg options 下拉信息	
		 *	$arg checked_arr 选中项
		 */
		mselect: function(options, checked_arr) {
			var select_box = null;
			var tops = $(this).position().top;
			var left = $(this).position().left;
			var height = $(this).height()+tops+8;
			
			if(select_box==null){
				select_box = $("<div class='select_multi' style='position:absolute;left:"+left+"px; top:"+height+"px; z-index:999; display:none'></div>").insertAfter($(this));
			
				$.each(options, function (i, n) {
					var checked='';
					if($.inArray(i, checked_arr)>=0){
						checked = 'checked';
					}
					
					check_div = $("<div class='select_multi_li'><input class='area_check' name='eara[]' type='checkbox' style='width:20px;' value='" + i + "' "+checked+"><span>" + n + "</span></div>").appendTo(select_box);
					check_box = check_div.children();
					check_box.click(function (e) {
						temp = "";
						$("input:checked").each(function (i) {
							if (i == 0) {
								temp = $(this).next('span').html();
							} else {
								temp += "、" + $(this).next('span').html();
							}
						});
						$(this).attr("title", temp);
					});
				});
			} else {
				select_box.toggle();
			}
			
			//点击显示
			$(this).click(function (e) {
				select_box.show();
				e.stopPropagation();
			});
		}
	});
	
	//点击关闭
	$(this).click(function (e) {
		var status = 0;
		if(e.toElement.className=='click_box'){
			status = 1;
		}
		if(e.toElement.className=='area_check'){
			status = 1;
		}
		if(!status){
			$('.select_multi').hide();
		}
	});
})(jQuery);

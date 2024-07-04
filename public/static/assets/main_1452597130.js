/*!
 * Default theme scripts
 *
 * Copyright 2012, Mogul.io (by http://thenewmediatechnology.com)
 *
 */

nm.onload = function() {
  if ($('#comment_form').length > 0) {
    $('#comment_form').ajaxForm({
      error: function(data) {
        if (data.responseText == 'success') {
          location.reload();
        }
        else {
          alert('Please enter a comment to post.');
        }
      }
    });
  }
};

nm.page_onload = function() {
  PAGE_ONLOADED = true;
  nm.onload();
};

nm.ajax_onload = function() {
  if (!PAGE_ONLOADED) nm.onload();
  PAGE_ONLOADED = false;
};

$(document).ready(function() {
  nm.page_onload();
  PAGE_ONLOADED = false;
});

function setup() {
	$("#langbar a.lang").click(function() {
		var next_url = location.href.replace(location.origin, '');
		
		$(this).attr("href","/change-language/?lang=" + $(this).attr("rel") + "&next=" + next_url);
	});
}

function setupSearch(textbox, watermark) {
	var c = $(textbox);
	c.watermark(watermark, 'watermark');	
	js.enterAction(c, function() { doSearch(c.val()); });	
  c.parent().find('.search_btn').click(function() {  doSearch(c.val()); });
}

function doSearch(query) {
  query = query.replace(/[(`~!@#$%^&*()=+\[\]\{\}\|\\;:'"<>,/?]/g, "");
  query = query.replace(/(_)+/g, "_");

	location.href = "/search/?q=" + query.toLowerCase().trim();	
}

function setupSubscribe(textbox, watermark) {
    var account = "batireedui";
    var c = $(textbox);
    var url = 'http://feedburner.google.com/fb/a/mailverify?uri=' + account + '&loc=en_US&email=';
    c.watermark(watermark, 'watermark');
    js.enterAction(c, function() { window.open(url + c.val()); });
    c.parent().find('.subscribe_btn').click(function() { window.open(url + c.val()); });
}

function gallery() {
    $('.content_galleria').each(function() {
        $(this).galleria({
            preload: 3,
            transition: 'fade',
                imageCrop: 'height'
        });
    });
}


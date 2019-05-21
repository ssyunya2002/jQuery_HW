(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('h2').show();
    $('h2').remove();
    $('#index').append("<li>メソッド</li>");
    $('#index').find('li').each(function() {
      // ループ内の処理
    var newText = $(this).text() + "["+ $(this).text().length + "]";
    $(this).text(newText);
    });
  });
})(jQuery, window);

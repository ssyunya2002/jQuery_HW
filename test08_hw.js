(function($, window) {
  $(function() {
    // ここに処理を書きます
    let fp = flatpickr(".flatpickr",{
      "locale": "ja",
      wrap: true
    });
    function aaa() {
      document.getElementById('target').value = fp.selectedDates;
    }
  });
})(jQuery, window);

// // TOPへ戻るボタン追従
$(function () {
  // 変数にクラスを入れる
  var btn = $(".backTop");

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on("load scroll", function () {
    if ($(this).scrollTop() > 300) {
      btn.addClass("active");
    } else {
      btn.removeClass("active");
    }
  });

  //スクロールしてトップへ戻る
  btn.on("click", function () {
    $("body,html").animate({
      scrollTop: 0,
    });
  });
});

// AOS.jsの設定
AOS.init({
  duration: 1000,
  anchorPlacement: "top-bottom",
});

// swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.1,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 1.5,
    },
    // 1080px以上の場合
    1080: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 56,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// アコーディオン
$(function () {
  // .jsAccordionTitleをクリックした時
  $(".jsAccordionTitle").on("click", function () {
    // .jsAccordionTitleの次の要素にis-openクラスを付与
    $(this).next().toggleClass("is-open");
    // .jsAccordionTitleにis-activeクラスがあれば削除・なければ追加
    $(this).toggleClass("is-active");
  });
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    let adjust = 100;
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - adjust;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// フォーム
jQuery(function ($) {
  $(".form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      inquiry: {
        required: true,
      },
      "check1[]": {
        required: true,
      },
    },
    messages: {
      name: {
        required: "必須項目です。入力をお願いします。",
      },
      email: {
        required: "必須項目です。入力をお願いします。",
        email: "Eメールの形式で入力して下さい。",
      },
      inquiry: {
        required: "必須項目です。入力をお願いします。",
      },
      "check1[]": {
        required: "プライバシーポリシーに同意の上、送信してください。",
      },
    },
    errorPlacement: function (error, element) {
      if (element.attr("name") == "check1[]") {
        error.insertAfter(".checkbox");
      } else {
        error.insertAfter(element);
      }
    },
  });
});

// ハンバーガー
$(function () {
  // #js-hamburgerをクリックすると
  $("#js-hamburger").click(function () {
    // is-drawerActiveクラスを追加
    $("body").toggleClass("is-drawerActive");

    // もし、#js-hamburgerが表示されていなければ
    if ($(this).attr("aria-expanded") == "false") {
      // #js-hamburgerを表示
      $(this).attr("aria-expanded", "true");
      // スクリーンリーダーに認識させない
      $("#js-global-menu").attr("area-hidden", "false");
    } else {
      // #js-hamburgerされていれば、非表示にする
      $(this).attr("aria-expanded", "false");
      // スクリーンリーダーに認識させる
      $("#js-global-menu").attr("area-hidden", "true");
    }
  });
  // バックグラウンドをクリックしたら
  $("#js-drawer-background,.sp-global-menu__link").click(function () {
    // is-drawerActiveクラスを削除
    $("body").removeClass("is-drawerActive");
    // 表示しない
    $("#js-hamburger").attr("aria-expanded", "false");

    $("#js-global-menu").attr("area-hidden", "true");
  });
});

/*
  aria-controls 属性＝コントロールする対象となる要素を指定する属性
  aria-expanded 属性＝現在表示されているか、表示されていないかを指定する
  area-hidden＝スクリーンリーダーに対して存在しないものと認識させることができる
  area-label＝画面には表示させずに支援技術に対してのみラベルを設定しておきたい場合に利用
  */

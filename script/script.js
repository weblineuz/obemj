const burger = $(".burger-menu");
const lang_list = $(".header__head-lang li a");

burger.click(() => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $(".header__content").show("slow");
  $("body").css({
    "overflow-y": "hidden",
  });
  $(".header__content-list li a").click(() => {
    $(".header__content").hide("slow");
    $("body").css({
      "overflow-y": "scroll",
    });
  });
});

$(".close").click(() => {
  $(".header__content").hide("slow");
  $("body").css({
    "overflow-y": "scroll",
  });
});

lang_list.click((el) => {
  $(lang_list).each((item) => {
    $(lang_list[item]).removeClass("active");
  });
  $(el.target).addClass("active");
});

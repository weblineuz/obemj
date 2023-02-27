const burger = $(".burger-menu");

burger.click(() => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $(".header__content").show("slow");
  $("body").css({
    "overflow-y": "hidden",
  });
});

$(".close").click(() => {
  $(".header__content").hide("slow");
  $("body").css({
    "overflow-y": "scroll",
  });
});

$(".header__content-list li a").click(() => {
  $(".header__content").hide("slow");
  $("body").css({
    "overflow-y": "scroll",
  });
});

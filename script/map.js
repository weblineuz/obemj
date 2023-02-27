ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [55.76, 37.64],
      zoom: 10,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  var myPlacemark = new ymaps.Placemark(
    [55.76, 37.56],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "images/mark.png",
      iconImageSize: [40, 40],
      iconImageOffset: [-100, -100],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}

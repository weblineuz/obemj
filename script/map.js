ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [41.29465, 69.12976],
      zoom: 10,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  var myPlacemark = new ymaps.Placemark(
    [41.27465, 69.32976],
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

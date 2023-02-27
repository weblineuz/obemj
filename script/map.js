ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [41.319461, 69.279809],
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  myGeoObject = new ymaps.GeoObject(
    {
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [41.319461, 69.279809],
      },
    },
    {
      iconLayout: "default#image",
      iconImageHref: "images/mark.png",
      iconImageSize: [40, 40],
    }
  );
  myMap.geoObjects.add(myGeoObject);
}

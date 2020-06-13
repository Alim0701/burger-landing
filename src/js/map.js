(function () {
  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map("map", {
      center: [59.94, 30.32],
      zoom: 12,
      controls: ["zoomControl"],
      behaviors: ["drag"],
    });

    let placemark = new ymaps.Placemark(
      [59.97, 30.31],
      {
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/icons/map-marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
      }
    );

    let placemark1 = new ymaps.Placemark(
      [59.9521, 30.303],
      {
        hintContent: '<div class="map__hint">ул. Зверинская, д. 31</div>',
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/icons/map-marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
      }
    );

    let placemark2 = new ymaps.Placemark(
      [59.9403, 30.3789],
      {
        hintContent: '<div class="map__hint">Заячий пер., д. 53</div>',
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/icons/map-marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
      }
    );

    let placemark3 = new ymaps.Placemark(
      [59.9103, 30.3085],
      {
        hintContent:
          '<div class="map__hint">Измайловский проспект, д. 20б</div>',
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/icons/map-marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
      }
    );

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
  }
})();

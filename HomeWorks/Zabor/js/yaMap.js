 ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map", {
                center: [47.87, 35.32],
                zoom: 7
            }); 
            
            myPlacemark = new ymaps.Placemark([47.87, 35.32], {
                hintContent: 'Запорожье',
                balloonContent: 'Запорожье'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }
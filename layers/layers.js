var wms_layers = [];

        var lyr_GoogloeSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Googloe Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource__1.addFeatures(features__1);var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
    title: 'Райони<br />\
    <img src="styles/legend/_1_0.png" /> Автостанція<br />\
    <img src="styles/legend/_1_1.png" /> Бороктелеп<br />\
    <img src="styles/legend/_1_2.png" /> Василіянський (Коропецький)<br />\
    <img src="styles/legend/_1_3.png" /> Великогірний<br />\
    <img src="styles/legend/_1_4.png" /> Вокзальний (Залізничний)<br />\
    <img src="styles/legend/_1_5.png" /> ГІД (Промзона)<br />\
    <img src="styles/legend/_1_6.png" /> ДОСИ<br />\
    <img src="styles/legend/_1_7.png" /> Латоричний (ДЮСШ)<br />\
    <img src="styles/legend/_1_8.png" /> Літній<br />\
    <img src="styles/legend/_1_9.png" /> Павшино<br />\
    <img src="styles/legend/_1_10.png" /> Паланок<br />\
    <img src="styles/legend/_1_11.png" /> Пентагон<br />\
    <img src="styles/legend/_1_12.png" /> Підгород<br />\
    <img src="styles/legend/_1_13.png" /> Підгоряно<br />\
    <img src="styles/legend/_1_14.png" /> Підмонастир<br />\
    <img src="styles/legend/_1_15.png" /> Промзона за Каналом<br />\
    <img src="styles/legend/_1_16.png" /> Росвигово 1<br />\
    <img src="styles/legend/_1_17.png" /> Росвигово 2<br />\
    <img src="styles/legend/_1_18.png" /> Росвигово 3<br />\
    <img src="styles/legend/_1_19.png" /> Сільхоз<br />\
    <img src="styles/legend/_1_20.png" /> Центр<br />\
    <img src="styles/legend/_1_21.png" /> Цигантабор<br />\
    <img src="styles/legend/_1_22.png" /> Червона Гора (Красна Гірка)<br />\
    <img src="styles/legend/_1_23.png" /> Черемшина<br />\
    <img src="styles/legend/_1_24.png" /> Чернеча Гора<br />\
    <img src="styles/legend/_1_25.png" /> <br />'
        });

lyr_GoogloeSatelliteHybrid_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogloeSatelliteHybrid_0,lyr__1];
lyr__1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'soft-light';
});
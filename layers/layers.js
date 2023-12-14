var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FASILITASOLAHRAGA_1 = new ol.format.GeoJSON();
var features_FASILITASOLAHRAGA_1 = format_FASILITASOLAHRAGA_1.readFeatures(json_FASILITASOLAHRAGA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASILITASOLAHRAGA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASILITASOLAHRAGA_1.addFeatures(features_FASILITASOLAHRAGA_1);
var lyr_FASILITASOLAHRAGA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FASILITASOLAHRAGA_1, 
                style: style_FASILITASOLAHRAGA_1,
                interactive: true,
                title: '<img src="styles/legend/FASILITASOLAHRAGA_1.png" /> FASILITAS OLAHRAGA'
            });
var format_FASILITASPENDIDIKAN_2 = new ol.format.GeoJSON();
var features_FASILITASPENDIDIKAN_2 = format_FASILITASPENDIDIKAN_2.readFeatures(json_FASILITASPENDIDIKAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASILITASPENDIDIKAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASILITASPENDIDIKAN_2.addFeatures(features_FASILITASPENDIDIKAN_2);
var lyr_FASILITASPENDIDIKAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FASILITASPENDIDIKAN_2, 
                style: style_FASILITASPENDIDIKAN_2,
                interactive: true,
                title: '<img src="styles/legend/FASILITASPENDIDIKAN_2.png" /> FASILITAS PENDIDIKAN'
            });
var format_jalanJALAN_3 = new ol.format.GeoJSON();
var features_jalanJALAN_3 = format_jalanJALAN_3.readFeatures(json_jalanJALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanJALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanJALAN_3.addFeatures(features_jalanJALAN_3);
var lyr_jalanJALAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalanJALAN_3, 
                style: style_jalanJALAN_3,
                interactive: true,
                title: '<img src="styles/legend/jalanJALAN_3.png" /> jalan — JALAN'
            });
var format_KAWASANINDUSTRI_4 = new ol.format.GeoJSON();
var features_KAWASANINDUSTRI_4 = format_KAWASANINDUSTRI_4.readFeatures(json_KAWASANINDUSTRI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANINDUSTRI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANINDUSTRI_4.addFeatures(features_KAWASANINDUSTRI_4);
var lyr_KAWASANINDUSTRI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAWASANINDUSTRI_4, 
                style: style_KAWASANINDUSTRI_4,
                interactive: true,
                title: '<img src="styles/legend/KAWASANINDUSTRI_4.png" /> KAWASAN INDUSTRI'
            });
var format_PEMUKIMANTERATUR_5 = new ol.format.GeoJSON();
var features_PEMUKIMANTERATUR_5 = format_PEMUKIMANTERATUR_5.readFeatures(json_PEMUKIMANTERATUR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMANTERATUR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMANTERATUR_5.addFeatures(features_PEMUKIMANTERATUR_5);
var lyr_PEMUKIMANTERATUR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMANTERATUR_5, 
                style: style_PEMUKIMANTERATUR_5,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMANTERATUR_5.png" /> PEMUKIMAN TERATUR'
            });
var format_PEMUKIMANTIDAKTERATUR_6 = new ol.format.GeoJSON();
var features_PEMUKIMANTIDAKTERATUR_6 = format_PEMUKIMANTIDAKTERATUR_6.readFeatures(json_PEMUKIMANTIDAKTERATUR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMANTIDAKTERATUR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMANTIDAKTERATUR_6.addFeatures(features_PEMUKIMANTIDAKTERATUR_6);
var lyr_PEMUKIMANTIDAKTERATUR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMANTIDAKTERATUR_6, 
                style: style_PEMUKIMANTIDAKTERATUR_6,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMANTIDAKTERATUR_6.png" /> PEMUKIMAN TIDAK TERATUR'
            });
var format_PERDAGANGANDANJASA_7 = new ol.format.GeoJSON();
var features_PERDAGANGANDANJASA_7 = format_PERDAGANGANDANJASA_7.readFeatures(json_PERDAGANGANDANJASA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERDAGANGANDANJASA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERDAGANGANDANJASA_7.addFeatures(features_PERDAGANGANDANJASA_7);
var lyr_PERDAGANGANDANJASA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERDAGANGANDANJASA_7, 
                style: style_PERDAGANGANDANJASA_7,
                interactive: true,
                title: '<img src="styles/legend/PERDAGANGANDANJASA_7.png" /> PERDAGANGAN DAN JASA'
            });
var format_REELKERETAAPI_8 = new ol.format.GeoJSON();
var features_REELKERETAAPI_8 = format_REELKERETAAPI_8.readFeatures(json_REELKERETAAPI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REELKERETAAPI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REELKERETAAPI_8.addFeatures(features_REELKERETAAPI_8);
var lyr_REELKERETAAPI_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REELKERETAAPI_8, 
                style: style_REELKERETAAPI_8,
                interactive: true,
                title: '<img src="styles/legend/REELKERETAAPI_8.png" /> REEL KERETA API'
            });
var format_RUANGTERBUKAHIJAU_9 = new ol.format.GeoJSON();
var features_RUANGTERBUKAHIJAU_9 = format_RUANGTERBUKAHIJAU_9.readFeatures(json_RUANGTERBUKAHIJAU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUANGTERBUKAHIJAU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUANGTERBUKAHIJAU_9.addFeatures(features_RUANGTERBUKAHIJAU_9);
var lyr_RUANGTERBUKAHIJAU_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUANGTERBUKAHIJAU_9, 
                style: style_RUANGTERBUKAHIJAU_9,
                interactive: true,
                title: '<img src="styles/legend/RUANGTERBUKAHIJAU_9.png" /> RUANG TERBUKA HIJAU'
            });
var format_SAWAH_10 = new ol.format.GeoJSON();
var features_SAWAH_10 = format_SAWAH_10.readFeatures(json_SAWAH_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAH_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAH_10.addFeatures(features_SAWAH_10);
var lyr_SAWAH_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAWAH_10, 
                style: style_SAWAH_10,
                interactive: true,
                title: '<img src="styles/legend/SAWAH_10.png" /> SAWAH'
            });
var format_SUNGAI_11 = new ol.format.GeoJSON();
var features_SUNGAI_11 = format_SUNGAI_11.readFeatures(json_SUNGAI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_11.addFeatures(features_SUNGAI_11);
var lyr_SUNGAI_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_11, 
                style: style_SUNGAI_11,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_11.png" /> SUNGAI'
            });
var format_TITIKSURVEY_12 = new ol.format.GeoJSON();
var features_TITIKSURVEY_12 = format_TITIKSURVEY_12.readFeatures(json_TITIKSURVEY_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKSURVEY_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKSURVEY_12.addFeatures(features_TITIKSURVEY_12);
var lyr_TITIKSURVEY_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIKSURVEY_12, 
                style: style_TITIKSURVEY_12,
                interactive: true,
                title: '<img src="styles/legend/TITIKSURVEY_12.png" /> TITIK SURVEY'
            });
var format_sigllebihlanjut_13 = new ol.format.GeoJSON();
var features_sigllebihlanjut_13 = format_sigllebihlanjut_13.readFeatures(json_sigllebihlanjut_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sigllebihlanjut_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sigllebihlanjut_13.addFeatures(features_sigllebihlanjut_13);
var lyr_sigllebihlanjut_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sigllebihlanjut_13, 
                style: style_sigllebihlanjut_13,
                interactive: true,
    title: 'sigllebihlanjut<br />\
    <img src="styles/legend/sigllebihlanjut_13_0.png" /> FP<br />\
    <img src="styles/legend/sigllebihlanjut_13_1.png" /> Ind<br />\
    <img src="styles/legend/sigllebihlanjut_13_2.png" /> PB<br />\
    <img src="styles/legend/sigllebihlanjut_13_3.png" /> PT<br />\
    <img src="styles/legend/sigllebihlanjut_13_4.png" /> PTT<br />\
    <img src="styles/legend/sigllebihlanjut_13_5.png" /> RTH<br />\
    <img src="styles/legend/sigllebihlanjut_13_6.png" /> SW<br />\
    <img src="styles/legend/sigllebihlanjut_13_7.png" /> TL<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_FASILITASOLAHRAGA_1.setVisible(true);lyr_FASILITASPENDIDIKAN_2.setVisible(true);lyr_jalanJALAN_3.setVisible(true);lyr_KAWASANINDUSTRI_4.setVisible(true);lyr_PEMUKIMANTERATUR_5.setVisible(true);lyr_PEMUKIMANTIDAKTERATUR_6.setVisible(true);lyr_PERDAGANGANDANJASA_7.setVisible(true);lyr_REELKERETAAPI_8.setVisible(true);lyr_RUANGTERBUKAHIJAU_9.setVisible(true);lyr_SAWAH_10.setVisible(true);lyr_SUNGAI_11.setVisible(true);lyr_TITIKSURVEY_12.setVisible(true);lyr_sigllebihlanjut_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FASILITASOLAHRAGA_1,lyr_FASILITASPENDIDIKAN_2,lyr_jalanJALAN_3,lyr_KAWASANINDUSTRI_4,lyr_PEMUKIMANTERATUR_5,lyr_PEMUKIMANTIDAKTERATUR_6,lyr_PERDAGANGANDANJASA_7,lyr_REELKERETAAPI_8,lyr_RUANGTERBUKAHIJAU_9,lyr_SAWAH_10,lyr_SUNGAI_11,lyr_TITIKSURVEY_12,lyr_sigllebihlanjut_13];
lyr_FASILITASOLAHRAGA_1.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'layer': 'layer', 'path': 'path', });
lyr_FASILITASPENDIDIKAN_2.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'layer': 'layer', 'path': 'path', });
lyr_jalanJALAN_3.set('fieldAliases', {'id': 'id', });
lyr_KAWASANINDUSTRI_4.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_PEMUKIMANTERATUR_5.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'layer': 'layer', 'path': 'path', });
lyr_PEMUKIMANTIDAKTERATUR_6.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_PERDAGANGANDANJASA_7.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_REELKERETAAPI_8.set('fieldAliases', {'id': 'id', });
lyr_RUANGTERBUKAHIJAU_9.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'layer': 'layer', 'path': 'path', 'LUAS': 'LUAS', });
lyr_SAWAH_10.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_SUNGAI_11.set('fieldAliases', {'id': 'id', });
lyr_TITIKSURVEY_12.set('fieldAliases', {'id': 'id', 'TITIK': 'TITIK', 'X': 'X', 'Y': 'Y', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_sigllebihlanjut_13.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'layer': 'layer', 'path': 'path', 'LUAS': 'LUAS', });
lyr_FASILITASOLAHRAGA_1.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'layer': '', 'path': '', });
lyr_FASILITASPENDIDIKAN_2.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'layer': '', 'path': '', });
lyr_jalanJALAN_3.set('fieldImages', {'id': '', });
lyr_KAWASANINDUSTRI_4.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', });
lyr_PEMUKIMANTERATUR_5.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'layer': '', 'path': '', });
lyr_PEMUKIMANTIDAKTERATUR_6.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', });
lyr_PERDAGANGANDANJASA_7.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', });
lyr_REELKERETAAPI_8.set('fieldImages', {'id': '', });
lyr_RUANGTERBUKAHIJAU_9.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'layer': '', 'path': '', 'LUAS': '', });
lyr_SAWAH_10.set('fieldImages', {'id': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', });
lyr_SUNGAI_11.set('fieldImages', {'id': '', });
lyr_TITIKSURVEY_12.set('fieldImages', {'id': '', 'TITIK': '', 'X': '', 'Y': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', });
lyr_sigllebihlanjut_13.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'PL_2023': 'TextEdit', 'PERUBAHAN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_FASILITASOLAHRAGA_1.set('fieldLabels', {'id': 'header label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'PERUBAHAN': 'inline label', 'layer': 'inline label', 'path': 'inline label', });
lyr_FASILITASPENDIDIKAN_2.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'PERUBAHAN': 'inline label', 'layer': 'inline label', 'path': 'inline label', });
lyr_jalanJALAN_3.set('fieldLabels', {'id': 'inline label', });
lyr_KAWASANINDUSTRI_4.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'PERUBAHAN': 'inline label', });
lyr_PEMUKIMANTERATUR_5.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'PERUBAHAN': 'inline label', 'layer': 'inline label', 'path': 'inline label', });
lyr_PEMUKIMANTIDAKTERATUR_6.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'PERUBAHAN': 'inline label', });
lyr_PERDAGANGANDANJASA_7.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'PERUBAHAN': 'inline label', });
lyr_REELKERETAAPI_8.set('fieldLabels', {'id': 'no label', });
lyr_RUANGTERBUKAHIJAU_9.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'PERUBAHAN': 'inline label', 'layer': 'inline label', 'path': 'inline label', 'LUAS': 'inline label', });
lyr_SAWAH_10.set('fieldLabels', {'id': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_SUNGAI_11.set('fieldLabels', {'id': 'no label', });
lyr_TITIKSURVEY_12.set('fieldLabels', {'id': 'no label', 'TITIK': 'no label', 'X': 'no label', 'Y': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_sigllebihlanjut_13.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'layer': 'no label', 'path': 'no label', 'LUAS': 'no label', });
lyr_sigllebihlanjut_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
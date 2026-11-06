var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bharathapuzha_2 = new ol.format.GeoJSON();
var features_Bharathapuzha_2 = format_Bharathapuzha_2.readFeatures(json_Bharathapuzha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_2.addFeatures(features_Bharathapuzha_2);
var lyr_Bharathapuzha_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_2, 
                style: style_Bharathapuzha_2,
                popuplayertitle: 'Bharathapuzha',
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_2.png" /> Bharathapuzha'
            });
var format_GEOLOGY_3 = new ol.format.GeoJSON();
var features_GEOLOGY_3 = format_GEOLOGY_3.readFeatures(json_GEOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_3.addFeatures(features_GEOLOGY_3);
var lyr_GEOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_3, 
                style: style_GEOLOGY_3,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_3_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/GEOLOGY_3_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_3_2.png" /> Charnockite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_3_3.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/GEOLOGY_3_4.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_3_5.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_3_6.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/GEOLOGY_3_7.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/GEOLOGY_3_8.png" /> Sand and Silt<br />\
    <img src="styles/legend/GEOLOGY_3_9.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/GEOLOGY_3_10.png" /> Tank/WB/River<br />\
    <img src="styles/legend/GEOLOGY_3_11.png" /> <br />' });
var format_GEOMORPHOLOGY_4 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_4 = format_GEOMORPHOLOGY_4.readFeatures(json_GEOMORPHOLOGY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_4.addFeatures(features_GEOMORPHOLOGY_4);
var lyr_GEOMORPHOLOGY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_4, 
                style: style_GEOMORPHOLOGY_4,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_0.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_1.png" /> Denudational Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_2.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_3.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_4.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_5.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_6.png" /> Pediplain Weathered<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_7.png" /> Piedmont Zone<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_8.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_9.png" /> Residual Hill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_10.png" /> Residual Mount<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_11.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_12.png" /> Rock Exposure<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_13.png" /> Structural Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_14.png" /> Valley<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_15.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_16.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_17.png" /> <br />' });
var format_Waterbody_5 = new ol.format.GeoJSON();
var features_Waterbody_5 = format_Waterbody_5.readFeatures(json_Waterbody_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbody_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbody_5.addFeatures(features_Waterbody_5);
var lyr_Waterbody_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbody_5, 
                style: style_Waterbody_5,
                popuplayertitle: 'Waterbody',
                interactive: true,
                title: '<img src="styles/legend/Waterbody_5.png" /> Waterbody'
            });
var format_BharathapuzhaBOUNDARY_6 = new ol.format.GeoJSON();
var features_BharathapuzhaBOUNDARY_6 = format_BharathapuzhaBOUNDARY_6.readFeatures(json_BharathapuzhaBOUNDARY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BharathapuzhaBOUNDARY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BharathapuzhaBOUNDARY_6.addFeatures(features_BharathapuzhaBOUNDARY_6);
var lyr_BharathapuzhaBOUNDARY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BharathapuzhaBOUNDARY_6, 
                style: style_BharathapuzhaBOUNDARY_6,
                popuplayertitle: 'Bharathapuzha BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/BharathapuzhaBOUNDARY_6.png" /> Bharathapuzha BOUNDARY'
            });
var format_Road_7 = new ol.format.GeoJSON();
var features_Road_7 = format_Road_7.readFeatures(json_Road_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_7.addFeatures(features_Road_7);
var lyr_Road_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_7, 
                style: style_Road_7,
                popuplayertitle: 'Road',
                interactive: false,
                title: '<img src="styles/legend/Road_7.png" /> Road'
            });
var format_STREAM_8 = new ol.format.GeoJSON();
var features_STREAM_8 = format_STREAM_8.readFeatures(json_STREAM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREAM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREAM_8.addFeatures(features_STREAM_8);
var lyr_STREAM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREAM_8, 
                style: style_STREAM_8,
                popuplayertitle: 'STREAM',
                interactive: false,
                title: '<img src="styles/legend/STREAM_8.png" /> STREAM'
            });
var format_CHECKDAM_9 = new ol.format.GeoJSON();
var features_CHECKDAM_9 = format_CHECKDAM_9.readFeatures(json_CHECKDAM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHECKDAM_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHECKDAM_9.addFeatures(features_CHECKDAM_9);
var lyr_CHECKDAM_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHECKDAM_9, 
                style: style_CHECKDAM_9,
                popuplayertitle: 'CHECK DAM',
                interactive: true,
                title: '<img src="styles/legend/CHECKDAM_9.png" /> CHECK DAM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Bharathapuzha_2.setVisible(true);lyr_GEOLOGY_3.setVisible(true);lyr_GEOMORPHOLOGY_4.setVisible(true);lyr_Waterbody_5.setVisible(true);lyr_BharathapuzhaBOUNDARY_6.setVisible(true);lyr_Road_7.setVisible(true);lyr_STREAM_8.setVisible(true);lyr_CHECKDAM_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Bharathapuzha_2,lyr_GEOLOGY_3,lyr_GEOMORPHOLOGY_4,lyr_Waterbody_5,lyr_BharathapuzhaBOUNDARY_6,lyr_Road_7,lyr_STREAM_8,lyr_CHECKDAM_9];
lyr_Bharathapuzha_2.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_GEOLOGY_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORPHOLOGY_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Waterbody_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BharathapuzhaBOUNDARY_6.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Road_7.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_STREAM_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_CHECKDAM_9.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_Bharathapuzha_2.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'TextEdit', 'KERWSDRP_I': 'TextEdit', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_GEOLOGY_3.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_GEOMORPHOLOGY_4.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Waterbody_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BharathapuzhaBOUNDARY_6.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'TextEdit', 'KERWSDRP_I': 'TextEdit', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Road_7.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_STREAM_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDER1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_CHECKDAM_9.set('fieldImages', {'Name': 'TextEdit', 'name1': 'TextEdit', 'Photo': 'TextEdit', });
lyr_Bharathapuzha_2.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_GEOLOGY_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'inline label - visible with data', });
lyr_GEOMORPHOLOGY_4.set('fieldLabels', {'NAME': 'inline label - visible with data', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Waterbody_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BharathapuzhaBOUNDARY_6.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Road_7.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_STREAM_8.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_CHECKDAM_9.set('fieldLabels', {'Name': 'inline label - visible with data', 'name1': 'no label', 'Photo': 'no label', });
lyr_CHECKDAM_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
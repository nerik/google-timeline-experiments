'use strict';

function main() {
  console.log('main');
  cartodb.createVis('map', 'https://team.cartodb.com/u/nerikcarto/api/v2/viz/775b43ce-badd-11e5-91da-0e5db1731f59/viz.json', {
    shareable: true,
    title: true,
    description: true,
    search: true,
    tiles_loader: true,
    center_lat: 0,
    center_lon: 0,
    zoom: 2
  }).done(function (vis, layers) {

    var map = vis.getNativeMap();
  }).error(function (err) {
    console.log(err);
  });
}
window.onload = main;

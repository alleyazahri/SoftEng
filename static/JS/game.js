/**
 * Created by Alley on 3/14/2015.
 */
//"use strict";

var imageSize = document.getElementById("mapimg").clientHeight;
console(imageSize);

window.onload = function () {

    var ImageMap = function (map) {
            var n,
                areas = document.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth=1622,
                prevHeight = 1119;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen, newWidth = document.body.clientWidth, newHeight = document.body.clientHeight;
                for (n=0; n<len; n=n+2) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m = m+2) {
                        coords[n][m] = (coords[n][m] * newWidth) / previousWidth;
                        coords[n][m + 1] = (coords[n][m + 1] * newHeight) / prevHeight;
                    }
                }
                //var n, m, clen,
                //    x = document.body.clientWidth / previousWidth;
                //for (n = 0; n < len; n++) {
                //    clen = coords[n].length;
                //    for (m = 0; m < clen; m++) {
                //        coords[n][m] *= x;
                //    }
                //    areas[n].coords = coords[n].join(',');
                //}
                //previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('gamemap'));
    imageMap.resize();
    return;
}
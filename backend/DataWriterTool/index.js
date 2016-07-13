

var fs = require("fs");
var path = require("path");


function GetImage(o) {
    this.id = o.id;
    this.story = o.story;
    this.album = o.album;
    this.mini = o.mini;
    this.full = o.full;
    this.orientation = o.orientation;
}

function getImages(o) {
    var images = [];
    for (var i = 1; i < o.times + 1; i++) {
        images.push(new GetImage({
            id: i,
            story: o.story,
            album: o.album,
            mini: 'images/' + o.story + '/' + o.album + '/' + o.mini + '(' + i + ').jpg',
            full: 'images/' + o.story + '/' + o.album + '/' + o.full + '(' + i + ').jpg',
            orientation: o.orientation
        }));
    }
    return images;
}
var AntonNastia = getImages({
    story: 'wedding',
    album: 'AntonNastia',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 19
});

var BorisDaria = getImages({
    story: 'wedding',
    album: 'BorisDaria',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 21
});

var OlgaSergey = getImages({
    story: 'wedding',
    album: 'OlgaSergey',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 24
});


var VictorVeronika = getImages({
    story: 'wedding',
    album: 'VictorVeronika',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 25
});

var ElenaAleksey = getImages({

    story: 'love-story',
    album: 'ElenaAleksey',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 11
});

var MariaMihail = getImages({

    story: 'love-story',
    album: 'MariaMihail',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 12
});

var NatashaAlexander = getImages({

    story: 'love-story',
    album: 'NatashaAlexander',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 18
});


var TatianaDmitry = getImages({

    story: 'love-story',
    album: 'TatianaDmitry',
    mini: 'img-mini',
    full: 'img',
    orientation: 'album',
    times: 12
});

var allData = [
    //wedding
    AntonNastia,
    BorisDaria,
    OlgaSergey,
    VictorVeronika,
    //lovestory
    ElenaAleksey,
    MariaMihail,
    NatashaAlexander,
    TatianaDmitry

];

function getData(folder, album, data) {
    fs.writeFile('./php/public/images/' + folder + '/' + album + '.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('%s album saved!', album);
    });
}

allData.forEach(function(item){

    var firstData = JSON.stringify(item);
    var lastData = JSON.parse(firstData);

    getData(lastData[0].story,
            lastData[0].album,
            lastData);

});

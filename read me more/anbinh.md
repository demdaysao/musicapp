# TOC
   - [THE WEBSITE MP3.ZING.VN](#the-website-mp3zingvn)
     - [Song ID: ZW6ZC807](#the-website-mp3zingvn-song-id-zw6zc807)
     - [Album ID: ZWZAAIW0](#the-website-mp3zingvn-album-id-zwzaaiw0)
     - [Video ID: ZWZ9ZO0U](#the-website-mp3zingvn-video-id-zwz9zo0u)
   - [THE WEBSITE NHACSO.NET](#the-website-nhacsonet)
     - [Song ID: X1pZVkpYbg](#the-website-nhacsonet-song-id-x1pzvkpybg)
     - [Album ID: WF5YUEVY](#the-website-nhacsonet-album-id-wf5yuevy)
     - [Video ID: X15RV0N](#the-website-nhacsonet-video-id-x15rv0n)
   - [THE WEBSITE MUSIC.GO.VN](#the-website-musicgovn)
     - [Song ID: 183352](#the-website-musicgovn-song-id-183352)
     - [Album ID: 18963](#the-website-musicgovn-album-id-18963)
   - [THE WEBSITE NHAC.VUI.VN](#the-website-nhacvuivn)
     - [Song ID: 183352](#the-website-nhacvuivn-song-id-183352)
     - [Album ID: 26989](#the-website-nhacvuivn-album-id-26989)
   - [THE WEBSITE CHACHA.VN](#the-website-chachavn)
     - [Song ID: 614150](#the-website-chachavn-song-id-614150)
     - [Album ID: 9456](#the-website-chachavn-album-id-9456)
   - [THE WEBSITE NGHENHAC.INFO](#the-website-nghenhacinfo)
     - [Song ID: 12600](#the-website-nghenhacinfo-song-id-12600)
     - [Album ID: 21159](#the-website-nghenhacinfo-album-id-21159)
   - [THE WEBSITE KEENG.VN](#the-website-keengvn)
     - [Album ID: E33I4MQG](#the-website-keengvn-album-id-e33i4mqg)
   - [THE WEBSITE NHACCUATUI.COM](#the-website-nhaccuatuicom)
     - [Song ID: W5JMxHZr08Sb](#the-website-nhaccuatuicom-song-id-w5jmxhzr08sb)
     - [Album ID: 0nXnIALOOIP2](#the-website-nhaccuatuicom-album-id-0nxnialooip2)
<a name=""></a>
 
<a name="the-website-mp3zingvn"></a>
# THE WEBSITE MP3.ZING.VN
<a name="the-website-mp3zingvn-song-id-zw6zc807"></a>
## Song ID: ZW6ZC807
should be encoded into 1382402055, has plays, topic and no author.

```js
var link, songid;
zing.connect();
songid = 1382402055;
link = "http://mp3.zing.vn/bai-hat/joke-link/" + (zing._convertToId(songid)) + ".html";
return getFileByHTTP(link, function(data) {
  zing._getFileByHTTP = function() {};
  song = zing._processSong(songid, data);
  expect(song.songid).to.equal("ZW6ZC807");
  expect(parseInt(song.plays, 10)).to.match(/\d+/);
  expect(song.author).to.equal("");
  expect(song.topic).to.equal('["Âu Mỹ","Pop","Audiophile"]');
  return done();
});
```

should be called Meditation, composed by Olivia Ong, created on 2013-04-07, has link and path.

```js
var link;
zing.connect();
link = "http://m.mp3.zing.vn/xml/song/LnJGtLnNAQQxJQQyLDcyDHLG";
return getFileByHTTP(link, function(data) {
  var created, i, path, testArr, _i, _ref, _ref1, _str;
  data = JSON.parse(data);
  song.song_name = data.data[0].title.trim();
  song.song_artist = JSON.stringify(data.data[0].performer.trim().split(','));
  song.song_link = data.data[0].source;
  _str = song.song_link.replace(/^.+load-song\//g, '').replace(/^.+song-load\//g, '');
  testArr = [];
  for (i = _i = 0, _ref = _str.length - 1; _i <= _ref; i = _i += 4) {
    testArr.push(zing._decodeString(_str.slice(i, i + 4)));
  }
  path = decodeURIComponent(testArr.join('').match(/.+mp3/g));
  created = (_ref1 = path.match(/^\d{4}\/\d{2}\/\d{2}/)) != null ? _ref1[0].replace(/\//g, "-") : void 0;
  song.path = path;
  song.created = created;
  expect(song.song_name).to.equal('Meditation');
  expect(song.song_artist).to.equal('["Olivia Ong"]');
  expect(song.song_link).to.equal('http://m.mp3.zing.vn/xml/song-load/MjAxMyUyRjA0JTJGMDclMkY3JTJGNCUyRjc0ZGQ3YWM4MzMyNTQxZDEwNjNhNTg4MGM5MWU1NGQxLm1wMyU3QzI=');
  expect(song.path).to.equal('2013/04/07/7/4/74dd7ac8332541d1063a5880c91e54d1.mp3');
  expect(song.created).to.equal('2013-04-07');
  return done();
});
```

<a name="the-website-mp3zingvn-album-id-zwzaaiw0"></a>
## Album ID: ZWZAAIW0
should be called "Anh Muốn Quay Lại... Đến Khi Nào" and has certain properties.

```js
var albumid, link;
zing.connect();
albumid = 1381671200;
link = "http://mp3.zing.vn/album/joke-link/" + (zing._convertToId(albumid)) + ".html";
return getFileByHTTP(link, function(data) {
  var result;
  result = zing._processAlbum(albumid, data);
  expect(result.albumid).to.equal("ZWZAAIW0");
  expect(result.album_name).to.equal("Anh Muốn Quay Lại... Đến Khi Nào");
  expect(result.album_artist).to.equal('["Khắc Việt"]');
  expect(result.topic).to.equal('["Việt Nam","Nhạc Trẻ"]');
  expect(parseInt(result.plays, 10)).to.match(/\d+/);
  expect(parseInt(result.released_year, 10)).to.equal(2013);
  expect(parseInt(result.nsongs, 10)).to.equal(2);
  expect(result.album_thumbnail).to.equal('http://image.mp3.zdn.vn/thumb/165_165/covers/5/2/5284f196b781e762b443f762a612172f_1365388107.jpg');
  expect(result.description).to.equal('“Đến khi nào”. “Anh muốn quay lại” là nỗi nhớ người yêu da diết được Khắc Việt chuyển tải qua giai điệu sâu lắng từ đầu đến cuối. Đúng như tựa đề, “Anh muốn quay lại” như một đề nghị muộn màng khi tình cảm đã chia ly. Trong khi đó “Đến khi nào” lại là một tình yêu rộng lượng của người con trai sẵn sàng hy sinh để đem lại hạnh phúc cho người mình yêu. Việc sử dụng điệp từ “Đến khi nào” nhiều lần trong ca khúc cùng tên khiến cho người nghe đồng cảm nhiều hơn với tình yêu chung thủy của chàng trai trong ca khúc này. ');
  expect(result.created).to.equal("2013-4-8 9:28:27");
  return done();
});
```

<a name="the-website-mp3zingvn-video-id-zwz9zo0u"></a>
## Video ID: ZWZ9ZO0U
should be called "Kiếp Phong Trần" by "Lâm Hùng" and has certain properties .

```js
var link, vid;
zing.connect();
vid = 1381585668;
link = "http://mp3.zing.vn/video-clip/joke-link/" + (zing._convertToId(vid)) + ".html";
return getFileByHTTP(link, function(data) {
  var video;
  video = zing._processVideo(vid, data);
  expect(video.vid).to.equal(1381585668);
  expect(video.title).to.equal('Kiếp Phong Trần');
  expect(video.artists).to.equal('["Lâm Hùng"]');
  expect(video.topic).to.equal('["Việt Nam","Nhạc Trẻ"]');
  expect(parseInt(video.plays, 10)).to.be.at.least(1014646);
  expect(video.thumbnail).to.equal('http://image.mp3.zdn.vn/thumb/240_135/thumb_video/1/e/1ebf84dd6270b3978273b47f980c854a_1340685814.jpg');
  expect(video.link).to.match(/http:\/\/mp3.zing.vn\/html5\/video\/[a-zA-Z0-9]{24}/);
  expect(video.lyric).to.equal('Kiếp phong trần bạn đường sương gió, giang hồ phiêu lãng vũ trụ là nhà. Ánh trăng vàng làm đèn đêm thâu, tựa mình trên cát sương giăng làm màn. 2. Nắng chan hoà miền trời thanh câm tú, ngỡ ngàng tựa như bước trên bồng lai. Mong quên đời phàm trần còn nhiều trên vai, tranh giành như thế tốt hơn làm người. ĐK1: Đời nam nhi chí trai dọc ngang núi sông, dù gian khó quyết không nao núng lòng. Đường ta đi chông gai không làm nhụt chí hiên ngang, đường thênh thang bước chân vui miệt mài. ĐK2: Đàn réo rắt chất ngất bầu không gian sẽ xoa dịu ta quên nỗi đau thương trầm luân. Đàn hỡi có nói giúp cho lòng ta xin nhân gian thôi hận thù cho nét môi tươi rạng ngời. Ta vui cùng non bồng lãng du, ta vui cùng bạn đường gió sương. Trọn niềm vui xóa tan đau thương sầu kiếp.\t\t"');
  expect(video.created).to.equal('2012-6-26');
  return done();
});
```

<a name="the-website-nhacsonet"></a>
# THE WEBSITE NHACSO.NET
<a name="the-website-nhacsonet-song-id-x1pzvkpybg"></a>
## Song ID: X1pZVkpYbg
should be official, 320kbps, "Nhạc Trữ Tình", and has lyric.

```js
var encoded_id, link, options,
  _this = this;
encoded_id = "X1pZVkpYbg";
link = "http://nhacso.net/nghe-nhac/link-joke." + encoded_id + "==.html";
options = {
  id: encode(encoded_id),
  song: {}
};
return getFileByHTTP(link, function(data) {
  nsSong = ns.processSong(data, options);
  expect(ns._decodeId(1285971)).to.equal("X1pZVkpYbg");
  expect(nsSong.official).to.equal(1);
  expect(nsSong.bitrate).to.equal(320);
  expect(nsSong.plays).to.match(/\d+/);
  expect(nsSong.topic).to.equal('Nhạc Trữ Tình');
  expect(nsSong.islyric).to.equal(1);
  expect(nsSong.lyric).to.equal("Em dấu yêu ơi anh đang quay về mười năm xa vắng\nanh đã đưa em, đưa em đi tìm một giấc mơ đời\nmười năm lạc loài phải không em\nmười năm hận thù trĩu trong tim\nta trót trao nhau thân, ta chót vong ân\nmang tuổi hoa niên, làm kiếp lưu đầy\nBóng tà ngả trên lưng đồi cỏ non\nGió hiền thoáng vi vu hàng lau xanh\nngoài kia là đồng thơm hương lúa mới\nbên lũy tre xanh ngả nghiêng hàng dừa\nvà đây là giòng sông ta thương mến,\nsoi bóng chung đôi những ngày ấu thơ\nAnh sẽ đưa em, đưa em xa rời vùng mây tăm tối\nAnh sẽ đưa em, đưa em đi về, về lối chân hiền\ncòn ai đợi chờ nữa không em\ncòn ai giận hờn nữa không em\nem hãy theo anh, men lối ăn năn\nta thoát cơn mê cùng giắt nhau về ");
  return done();
});
```

should be called "Vó Ngựa Trên Đồi Cỏ Non" and has certain properties.

```js
var id, link, options,
  _this = this;
id = 1285971;
link = "http://nhacso.net/flash/song/xnl/1/id/" + ns._decodeId(id);
options = {
  id: id
};
return getFileByHTTP(link, function(data) {
  var created, ts, _ref;
  ns.data = data;
  expect(ns.getValueXML(ns.data, "name", 1)).to.equal("Vó Ngựa Trên Đồi Cỏ Non");
  expect(ns.getValueXML(ns.data, "artist", 0)).to.equal("Trường Vũ");
  expect(parseInt(ns.getValueXML(ns.data, "artistlink", 0).replace(/\.html/g, '').replace(/^.+-/g, ''), 10)).to.equal(2428);
  expect(ns.getValueXML(ns.data, "author", 0)).to.equal("Ngân Giang");
  expect(parseInt(ns.getValueXML(ns.data, "authorlink", 0).replace(/\.html/g, '').replace(/^.+-/g, ''), 10)).to.equal(963);
  expect(parseInt((_ref = ns.data.match(/totalTime.+totalTime/)) != null ? _ref[0].replace(/^.+>|<.+$/g, '') : void 0, 10)).to.equal(320);
  expect(ns.getValueXML(ns.data, "mp3link", 0)).to.equal("http://st01.freesocialmusic.com/mp3/2013/05/10/1178050012/136817005912_7480.mp3");
  ts = ns.getValueXML(ns.data, "mp3link", 0).match(/\/[0-9]+_/g)[0].replace(/\//, "").replace(/_/, "");
  ts = parseInt(ts) * Math.pow(10, 13 - ts.length);
  created = ns.formatDate(new Date(ts));
  expect(created).to.equal("2013-5-10 14:14:19");
  return done();
});
```

<a name="the-website-nhacsonet-album-id-wf5yuevy"></a>
## Album ID: WF5YUEVY
should be called "B-Sides And Other Things I Forgot" and has certain properties.

```js
var encoded_id, link, options,
  _this = this;
encoded_id = "WF5YUEVY";
link = "http://nhacso.net/nghe-album/ab." + encoded_id + ".html";
options = {
  id: encode(encoded_id)
};
return getFileByHTTP(link, function(data) {
  ns._updateAlbum = function() {};
  ns.getTotalSongsInAlbum = function() {};
  ns.onAlbumFail = function() {};
  album = ns.processAlbum(data, options);
  expect(album.albumid).to.equal(669367);
  expect(album.title).to.equal("B-Sides And Other Things I Forgot");
  expect(album.artist).to.equal("Blue Stahli");
  expect(album.artistid).to.equal(97145);
  expect(album.thumbnail).to.equal("http://st.nhacso.net/images/album/2013/05/09/1072071738/136807196518_99_120x120.jpg");
  expect(album.songs).to.eql([1285687, 1285688, 1285689, 1285690, 1285691, 1285692, 1285693, 1285694, 1285695, 1285696, 1285697, 1285698]);
  return done();
});
```

should contain 12 songs.

```js
var link,
  _this = this;
link = "http://nhacso.net/album/gettotalsong?listIds=" + album.albumid;
return getFileByHTTP(link, function(data) {
  var nsongs, strId;
  data = JSON.parse(data);
  strId = "nsn:album:total:song:id:" + album.albumid;
  nsongs = parseInt(data.result[strId].TotalSong, 10);
  expect(nsongs).to.equal(12);
  return done();
});
```

should be released in 2013 and has description .

```js
var link,
  _this = this;
link = "http://nhacso.net/album/getdescandissuetime?listIds=" + album.albumid;
return getFileByHTTP(link, function(data) {
  var description, released_date;
  data = JSON.parse(data).result[0];
  released_date = data.IssueTime;
  description = ns.processStringorArray(data.AlbumDesc);
  expect(parseInt(released_date, 10)).to.equal(2013);
  expect(description).to.equal("Label: FiXT\r\nGenre: Alternative");
  return done();
});
```

should have been played more than 42 times .

```js
var link,
  _this = this;
link = "http://nhacso.net/statistic/albumtotallisten?listIds=" + album.albumid;
return getFileByHTTP(link, function(data) {
  var plays;
  data = JSON.parse(data);
  plays = parseInt(data.result["" + album.albumid].totalListen, 10);
  expect(plays).to.be.above(42);
  return done();
});
```

<a name="the-website-nhacsonet-video-id-x15rv0n"></a>
## Video ID: X15RV0N
should be called "Người Yêu Cũ" and has certain properties.

```js
var encoded_id, link, options,
  _this = this;
encoded_id = "X15RV0N";
link = "http://nhacso.net/xem-video/joke-link." + encoded_id + "=.html";
options = {
  id: encode(encoded_id)
};
return getFileByHTTP(link, function(data) {
  ns.getVideoDurationAndSublink = function() {};
  video = ns.processVideo(data, options);
  expect(video.videoid).to.equal(16040);
  expect(video.title).to.equal("Người Yêu Cũ");
  expect(video.artists).to.equal('["Phan Mạnh Quỳnh"]');
  expect(video.topic).to.equal('Nhạc Trẻ');
  expect(video.plays).to.be.at.least(1310);
  expect(video.official).to.equal(1);
  expect(video.producerid).to.equal(0);
  expect(video.link).to.equal('http://st01.freesocialmusic.com/mp4/2013/05/09/1430055571/13680778242_4392.mp4');
  expect(video.thumbnail).to.equal('http://st.nhacso.net/images/video/2013/05/09/1430055571/136807791310_2665_190x110.jpg');
  expect(video.created).to.equal('2013-5-9 12:37:4');
  return done();
});
```

should have subtitle and 303 second long.

```js
var link,
  _this = this;
link = "http://nhacso.net/flash/video/xnl/1/id/" + ns._decodeId(video.videoid);
return getFileByHTTP(link, function(data) {
  var duration, sublink;
  duration = parseInt(ns.getValueXML(data, "duration", 0).replace(/<\/duration>|<duration>/g, ''), 10);
  sublink = ns.getValueXML(data, "subUrl", 0);
  expect(duration).to.equal(303);
  expect(sublink).to.equal("http://nhacso.net/flash/crypting/1/xnl/id/X15RV0M=");
  return done();
});
```

<a name="the-website-musicgovn"></a>
# THE WEBSITE MUSIC.GO.VN
<a name="the-website-musicgovn-song-id-183352"></a>
## Song ID: 183352
should be called "Xa Mất Rồi" by "Thủy Tiên" and has certain properties.

```js
var link;
link = "http://music.go.vn/Ajax/SongHandler.ashx?type=getsonginfo&sid=183352";
return getFileByHTTP(link, function(data) {
  var song;
  gm.connect();
  gm.connection.query = function() {};
  song = gm._storeSong(JSON.parse(data));
  expect(song.SongId).to.equal(183352);
  expect(song.SongName).to.equal('Xa Mất Rồi');
  expect(song.ArtistId).to.equal(22054);
  expect(song.ArtistName).to.equal('Thủy Tiên');
  expect(song.ArtistDisplayName).to.equal('Thủy Tiên');
  expect(song.TopicId).to.equal(69);
  expect(song.TopicName).to.equal('Nhạc Trẻ');
  expect(song.GenreId).to.equal(50);
  expect(song.GenreName).to.equal('Dance / Electronic');
  expect(song.RegionId).to.equal(27);
  expect(song.RegionName).to.equal('Nhạc Việt Nam');
  expect(song.Thumbnail).to.equal('/Album/2013/5/9/91FDCFCE4056D4BBB89743E0806A6208.jpg');
  expect(song.Tags).to.equal('');
  expect(song.Lyric).to.equal('<p><span>Và giờ này ... Đôi tay em không thể nào giữ lấy</span><br /><span>Từng kỷ niệm ... Mà theo em dần chìm vào quên lãng</span><br /><span>Cho nỗi buồn... Từng đêm kéo đến ... Và khiến nỗi nhớ như dài thêm</span><br /><br /><span>Còn lại gì ... Từ khi anh ra đi xa em mãi?</span><br /><span>Còn lại gì ... Một mình giờ này lạc trong tê tái ?</span><br /><span>Hỡi người ơi ... Tình yêu chúng ta ... Giờ là khúc ca ... Chẳng thế viết tiếp</span><br /><br /><span>ĐK : Và đến lúc em rời xa ... Con tim anh mới nhận ra</span><br /><span>Khoảnh khắc có em kề bên ... Ôi bao nhiêu phút êm đềm ...</span><br /><span>Mình đã xa mất rồi ... xa mất rồi ...</span><br /><span>Tìm đâu hơi ấm những lúc ta mặn nồng ...</span><br /><br /><span>Khoảnh khắc xa rời nhau ... anh buông đôi tay thật mau</span><br /><span>Dù biết em còn yêu ... Nhưng anh chẳng muốn quay lại ...</span><br /><span>Bỏ mặc em với nỗi đau ... Với kỉ niệm</span><br /><span>Tìm đâu hơi ấm, ký ức của hôm nào</span><br /><span>Đã xa mất rồi ...</span></p>');
  expect(song.FilePath).to.equal('UserFiles/2013/5/9/zorba11/20130509105933.mp3');
  expect(song.Bitrate).to.equal(320);
  expect(song.Duration).to.equal(248);
  expect(song.FileSize).to.equal(9928620);
  expect(song.PlayCount).to.be.at.least(32);
  expect(song.CreateTime).to.equal('2013-05-09');
  expect(song.UpdateTime).to.equal('2013-05-09');
  return done();
});
```

<a name="the-website-musicgovn-album-id-18963"></a>
## Album ID: 18963
should be called "Có Bao Điều" by "Tiêu Châu Như Quỳnh" and has certain properties .

```js
var link;
link = "http://music.go.vn/Ajax/AlbumHandler.ashx?type=getinfo&album=18963";
return getFileByHTTP(link, function(data) {
  var album;
  gm.connect();
  gm.connection.query = function() {};
  album = gm._storeAlbum(JSON.parse(data));
  expect(album.AlbumId).to.equal(18963);
  expect(album.AlbumName).to.equal('Có Bao Điều');
  expect(album.MasterArtistId).to.equal(31996);
  expect(album.MasterArtistName).to.equal('Tiêu Châu Như Quỳnh');
  expect(album.TopicId).to.equal(69);
  expect(album.TopicName).to.equal('Nhạc Trẻ');
  expect(album.GenreId).to.equal(3);
  expect(album.GenreName).to.equal('Pop');
  expect(album.RegionId).to.equal(27);
  expect(album.RegionName).to.equal('Nhạc Việt Nam');
  expect(album.Duration).to.equal(1212);
  expect(album.ReleaseDate).to.equal('2013-01-01');
  expect(album.Tags).to.equal('');
  expect(album.Thumbnail).to.equal('/Album/2013/5/8/4DBA6D485070AE248339AEC2C3B9DB14.jpg');
  expect(album.Description).to.equal('<p><span>Album "C&oacute; bao điều" gồm 5 b&agrave;i h&aacute;t l&agrave; những giai điệu hiện đại thể hiện m&agrave;u sắc tươi tắn của tuổi trẻ, chứa chan t&igrave;nh cảm của một người con g&aacute;i y&ecirc;u đời.</span><br /><br /><span>Trong đ&oacute; c&oacute; 4 b&agrave;i do ch&iacute;nh Như Quỳnh s&aacute;ng t&aacute;c, ca kh&uacute;c "C&oacute; bao điều" viết về đề t&agrave;i x&atilde; hội với trăn trở của một c&ocirc; g&aacute;i trẻ qua những mảnh đời k&eacute;m may mắn v&agrave; niềm tin về một ng&agrave;y mai tươi s&aacute;ng hơn, "Đ&ocirc;i mắt đen" th&igrave; lại mang giai điệu nhẹ nh&agrave;ng, s&acirc;u lắng được Như Quỳnh s&aacute;ng t&aacute;c trong những năm học lớp 12 để d&agrave;nh tặng cho một người bạn th&acirc;n của m&igrave;nh, "Khoảng c&aacute;ch của đ&ocirc;i ta" chứa đựng cảm x&uacute;c day dứt khi hai người y&ecirc;u nhau m&agrave; kh&ocirc;ng thể đến với nhau do những định kiến khắc nghiệt của x&atilde; hội...</span></p>');
  expect(album.SongCount).to.equal(5);
  expect(album.PlayCount).to.be.at.least(1);
  expect(album.CreateTime).to.equal('2013-05-08');
  expect(album.UpdateTime).to.equal('2013-05-09');
  return done();
});
```

<a name="the-website-nhacvuivn"></a>
# THE WEBSITE NHAC.VUI.VN
<a name="the-website-nhacvuivn-song-id-183352"></a>
## Song ID: 183352
should be called "Anh Sẽ Quên" by "MT Phan" and has link property.

```js
var id, link;
id = 318186;
link = "http://hcm.nhac.vui.vn/asx2.php?type=1&id=" + id;
return getFileByHTTP(link, function(data) {
  var parser, xml2js,
    _this = this;
  nv.getSongStats = function() {};
  xml2js = require('xml2js');
  parser = new xml2js.Parser();
  return parser.parseString(data, function(err, result) {
    var song;
    song = result.rss.channel[0].item[0];
    song = nv._storeSong(id, song);
    expect(song.song_name).to.equal('Anh Sẽ Quên');
    expect(song.artist_name).to.equal('MT Phan');
    expect(song.link).to.equal('http://music-hcm.24hstatic.com/uploadmusic2/e4ee6c4db6d6f2cc130087823aff2a08/518d51cc/uploadmusic/id_chan/2-2013/huylun/Rap/NewTrack/128/Anh Se Quen - MT Phan.mp3');
    return done();
  });
});
```

should have author, plays, topic, lyric properties.

```js
var id, link;
id = 318186;
link = "http://hcm.nhac.vui.vn/-m" + id + "c2p1a1.html";
return getFileByHTTP(link, function(data) {
  var item, song;
  item = {
    song_name: "",
    artist_name: "",
    link: ""
  };
  song = nv.processSongCallback(id, data, item);
  expect(parseInt(song.plays, 10)).to.be.at.least(22);
  expect(song.topic).to.equal('Rap Việt');
  expect(song.author).to.equal('Rap Việt');
  expect(song.lyric).to.equal('Anh sẽ quên - MT Phan [TPR]<br>màng đêm lạnh lắm...một mình ỡ nơi góc tối.. lòng lại buồn<br>nhưng anh không muốn suy nghĩ nhiều... không muốn nhớ em khi cơn mưa tuông<br>và không mong một điều.... là được bên em như lúc trước<br>vì người đã thay đỗi rồi..em lẵng lơ anh thẫn thờ...anh không ngờ được<br>ây giờ em khác xưa quá....anh nhìn mãi mà không ra<br>lời nói cữ chĩ đã thay đỗi... anh không hiễu được em... những suy nghĩ sâu xa<br>cãm giác trong anh vẫn đâu buồn... và anh sẽ cố gắn quên<br>quên đi em quên đi mọi thứ giữa 2 chúng ta.. lúc còn kề bên<br>hạnh phúc mãi bên nhau...thì cũng chỉ là lời hứa mà thoi<br>nếu như ngày xưa ta không yêu... thì bây giờ không cần nói<br>nếu như anh không gặp em... thì anh cũng đã khác xưa rồi<br>anh không trách gì em.... chỉ trách số phận mà mình đã chia 2 lối<br>không thễ bên nhau thật lâu.... trong khi thời gian đó qua rất nhanh<br>anh cũng quá ngu ngốc.. đã đễ em đi khi lòng này không đành<br>nhưng mà cãm ơn em nha... đã tạo cho anh cãm xúc buồn<br>để viết lên khúc nhạc....và đó là những đều mà anh muốn <br>và khoảnh khắc đó... em đã quên rồi<br>để mây kia mang mưa về nơi cuối trời<br>đễ hôm nay... tình ta<br>cũng đã không như lúc đầu<br>ồi cơn mưa kia... đã mang em đi<br>về một nơi thật xa ỡ nơi cuối trời<br>chỉ mong mưa<br>sẽ xóa đi.. kĩ niệm đau<br>những kĩ niệm đau cũa ngày đó....thì anh vẫn nhớ mà<br>là lúc mà em đã ra đi... em bỏ lại tất cã<br>để lại bao nhiêu kí ức ngày xưa rồi anh ôm trọn vào tim<br>nỗi nhớ vẫn bên anh.... những lúc vui buồn khi tình cãm đã lặng im<br>anh đã tìm về nơi đó..... nơi anh đã được bên em<br>nhìn cảnh vật ngày xưa nhưng giờ vắng lặng.. anh lại đau thêm<br>mưa rơi lất tất...lá thu cũng đã rơi đầy trên con đường mưa<br>anh nhìn thật lâu đễ rồi không thễ kìm được nước mắt nữa<br>nhiều lần anh đã mơ... rồi anh hy vọng em sẽ về<br>nhưng không.. chĩ là do anh tưỡng tượng ra trong cơn mê<br>và mưa mùa thu vẫn cứ rơi thật sự là anh rất nhớ đó<br>mưa ơi mưa đã quên rồi hay là mưa không còn nhớ rõ<br>mưa cố làm cho anh vui... rồi mưa lại cố làm anh thật buồn<br>mưa đến làm mát con tim... rồi mưa cũng đã tuông rất nhanh<br>lời cuối anh muốn nói...là anh cũng thật sự xin lỗi em<br>và đây sẽ là bài hát cuối cùng mà anh viết về em');
  return done();
});
```

<a name="the-website-nhacvuivn-album-id-26989"></a>
## Album ID: 26989
should be called "April's Spring" by "Forty" and has certain properties .

```js
var id, link;
id = 26989;
link = "http://hcm.nhac.vui.vn/-a" + id + "p1.html";
return getFileByHTTP(link, function(data) {
  var result;
  result = nv.processAlbumData(id, data);
  expect(result.album.aid).to.equal(26989);
  expect(result.album.album_name).to.equal('April\'s Spring');
  expect(result.album.album_artist).to.equal('Forty');
  expect(result.album.topic).to.equal('Nhạc Hàn Quốc');
  expect(parseInt(result.album.plays, 10)).to.be.at.least(39);
  expect(parseInt(result.album.nsongs, 10)).to.equal(2);
  expect(result.album.thumbnail).to.equal('http://nv-ad-hcm.24hstatic.com/upload/album/2-2013/1366001419_Aprils-Spring-Album-40-(Forty).jpg');
  expect(result.album.created).to.equal('2013-4-1 11:50:19');
  expect(result.songids).to.eql(['314212', '314211']);
  return done();
});
```

<a name="the-website-chachavn"></a>
# THE WEBSITE CHACHA.VN
<a name="the-website-chachavn-song-id-614150"></a>
## Song ID: 614150
should be called "Lòng mẹ" by "Khánh Ly" and has certain properties.

```js
var id, link;
id = 614150;
link = "http://www.chacha.vn/song/play/" + id;
return getFileByHTTP(link, function(data) {
  var song;
  data = JSON.parse(data);
  chacha.connect();
  chacha.connection.query = function() {};
  chacha.end();
  song = chacha._storeSong(data);
  expect(parseInt(song.songid, 10)).to.equal(614150);
  expect(song.song_name).to.equal('Lòng mẹ');
  expect(song.artistid).to.equal(206);
  expect(song.artist_name).to.equal('Khánh Ly');
  expect(song.duration).to.equal(335);
  expect(song.bitrate).to.equal(128);
  expect(song.thumbnail).to.equal('http://s2.chacha.vn/artists//s5/206/206.jpg?v=0');
  expect(song.link).to.equal('http://audio.chacha.vn/songs/output/74/614150/2/s/ - .mp3?s=1');
  return done();
});
```

<a name="the-website-chachavn-album-id-9456"></a>
## Album ID: 9456
should be called "Xin Còn Gọi Tên Nhau" by "Tình Khúc Trường Sa" and has certain properties .

```js
var id, link;
id = 9456;
link = "http://www.chacha.vn/album/fake-link," + id + ".html";
return getFileByHTTP(link, function(data) {
  var album, options;
  options = {
    id: id
  };
  album = chacha.processAlbum(data, options);
  expect(album.albumid).to.equal(9456);
  expect(album.album_name).to.equal('Xin Còn Gọi Tên Nhau');
  expect(album.album_artist).to.equal('Tình Khúc Trường Sa');
  expect(album.nsongs).to.equal(11);
  expect(album.thumbnail).to.equal('http://s2.chacha.vn/albums//s2/1/9456/9456.jpg');
  expect(album.plays).to.be.at.least(93);
  expect(album.description).to.equal("");
  expect(album.songs).to.eql(['535549', '611624', '611630', '611634', '443173', '611636', '611638', '611642', '611644', '611650', '611652']);
  return done();
});
```

<a name="the-website-nghenhacinfo"></a>
# THE WEBSITE NGHENHAC.INFO
<a name="the-website-nghenhacinfo-song-id-12600"></a>
## Song ID: 12600
should be called "Cây guitar ngày hôm qua" by "Quách Thành Danh" and has certain properties.

```js
var id, link;
id = 12600;
link = "http://nghenhac.info/joke/" + id + "/joke.html";
return getFileByHTTP(link, function(data) {
  var options, song;
  options = {
    id: id
  };
  song = nghenhac.processSong(data, options);
  expect(song.id).to.equal(12600);
  expect(song.encoded_id).to.equal("F95CF637BF2C1067");
  expect(song.name).to.equal('Cây guitar ngày hôm qua');
  expect(song.artist_id).to.equal('6303');
  expect(song.artist).to.equal('Quách Thành Danh');
  expect(song.author).to.equal('');
  expect(song.albumid).to.equal('40');
  expect(song.topic).to.equal('["Nhạc Hải Ngoại"]');
  expect(song.plays).to.be.at.least(40);
  expect(song.lyric).to.equal('Cây đàn guitar của ngày hôm qua,đã mua khi tôi lên mươ.Chiều chiều ra sân bâng quơ hát chơi lòng hay ước mơ xa vời.<br>   Tôi mơ làm cánh chim trời, phiêu du vờn bay khắp nơi,sánh bước bên em tôi đâu ngờ tới .<br>   Cây đàn guitar của ngày hôm qua, bạn thân yêu trong cuộc đời .<br>   Buồn buồn ra sân bâng quơ hát chơi mẹ tôi lắng nghe miệng cười .<br>   Tôi mơ một đêm trăng rằm guitar cùng em hát ca,ước muốn xa xôi tôi đâu ngờ tới .Ôi guitar của tôi.<br>   Tháng năm vụt qua mau, mẹ tôi nay tóc điểm bạc màu sương gió . Có ai nào ngờ đâu em đã đến,đến bên tôi cho đời xanh mãi .<br>   Tháng năm dần trôi mau,mẹ tôi nay tóc điểm bạc màu sương gió .Có ai nào ngờ đâu emđã đến ,đến bên tôi cho đời xanh mãi .<br>  Gay đàn cuitar của ngày hôm qua giờ đây xác thân hao gầy . Dòng đời cứ thế bon chen khắp nơi một hôm bước chân rã rời .<br>  khi tim mình thôi mơ mộng trên môi can khô tiếng ca<br>  Nhức nhối trong tim hư danh tàn úa . Ôi guitar của tôi . Ôi guitar của tôi..........<br>');
  expect(song.link).to.equal('http://data20.nghenhac.info/magpie/anhso/magolon.net/qtd/qtd_cayguitarngayhomqua.mp3');
  return done();
});
```

<a name="the-website-nghenhacinfo-album-id-21159"></a>
## Album ID: 21159
should be called "Tay đấm huyền thoại IV (Rocky IV)" by "Various Artists" and has certain properties.

```js
var id, link;
id = 21159;
link = "http://nghenhac.info/Album/joke-link/" + id + "/.html";
return getFileByHTTP(link, function(data) {
  var album, options;
  options = {
    id: id
  };
  album = nghenhac.processAlbum(data, options);
  expect(album.id).to.equal(21159);
  expect(album.encoded_id).to.equal('2DE1BC9C93DC64BE');
  expect(album.name).to.equal('Tay đấm huyền thoại IV (Rocky IV)');
  expect(album.artist).to.equal('Various Artists');
  expect(album.topic).to.equal('["Nhạc Phim","Quốc Tế"]');
  expect(album.nsongs).to.be.at.least(10);
  expect(album.plays).to.at.least(0);
  expect(album.thumbnail).to.equal('http://img.nghenhac.info/Album/21159.jpg');
  expect(album.songs).to.eql(['287141', '287140', '287139', '287138', '287137', '287136', '287135', '287134', '287133', '287132']);
  return done();
});
```

<a name="the-website-keengvn"></a>
# THE WEBSITE KEENG.VN
<a name="the-website-keengvn-album-id-e33i4mqg"></a>
## Album ID: E33I4MQG
should be called "Bring The Rain" and has 7 songs.

```js
var id, link;
id = "E33I4MQG";
link = "http://www.keeng.vn/album/get-album-xml?album_identify=" + id;
return getFileByHTTP(link, function(data) {
  var Encoder, album, encoder, i, ids, locations, song, songs, titles, _i, _ref;
  album = {
    id: "E33I4MQG",
    title: "Bring The Rain",
    artist_name: "Candyland"
  };
  Encoder = require('node-html-encoder').Encoder;
  encoder = new Encoder('entity');
  data = data.replace(/\r/g, '');
  titles = data.match(/\<title\>.+\<\/title\>/g);
  locations = data.match(/\<location\>.+\<\/location\>/g);
  ids = data.match(/\<info\>.+\<\/info\>/g);
  songs = [];
  if (locations !== null) {
    for (i = _i = 0, _ref = locations.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      song = {
        albumid: album.id,
        album_name: encoder.htmlDecode(album.title),
        songid: ids[i + 1].replace(/\<info\>/, '').replace(/<\/info\>/, '').trim(),
        song_name: encoder.htmlDecode(titles[i + 1].replace(/\<title\>/, '').replace(/<\/title\>/, '').trim()),
        song_link: locations[i].replace(/\<location\>/, '').replace(/<\/location\>/, '').trim(),
        artist_name: encoder.htmlDecode(album.artist_name)
      };
      if (song.song_link.match(/\d{4}\/\d{2}\/\d{2}/) !== null) {
        song.created = song.song_link.match(/\d{4}\/\d{2}\/\d{2}/)[0].replace(/\//g, '-');
      }
      songs.push(song);
    }
  }
  expect(songs.length).to.equal(7);
  expect(songs[0].albumid).to.equal("E33I4MQG");
  expect(songs[0].album_name).to.equal("Bring The Rain");
  expect(songs[0].songid).to.equal("2VNI1NTP");
  expect(songs[0].song_name).to.equal('It\'s A Shark! (Original Mix)');
  expect(songs[0].song_link).to.equal('http://media.keeng.vn/medias_2/audio/2013/05/10/4d5a17db7f5a68275537e06c18a8bb7adbefd21b.mp3');
  expect(songs[0].artist_name).to.equal("Candyland");
  expect(songs[0].created).to.equal('2013-05-10');
  return done();
});
```

<a name="the-website-nhaccuatuicom"></a>
# THE WEBSITE NHACCUATUI.COM
<a name="the-website-nhaccuatuicom-song-id-w5jmxhzr08sb"></a>
## Song ID: W5JMxHZr08Sb
should be called "Ván Cờ Cuối Cùng" by "Afan","YunjBoo" and has certain properties.

```js
var link, song;
song = {
  id: 2529341,
  key: "W5JMxHZr08Sb"
};
link = "http://www.nhaccuatui.com/bai-hat/joke-link." + song.key + ".html";
return getFileByHTTP(link, function(data) {
  var options;
  options = {
    id: song.id,
    key: song.key
  };
  nhaccuatui.processSimilarSongs = function() {};
  song = nhaccuatui.processSong(data, options);
  expect(song.id).to.equal(2529341);
  expect(song.key).to.equal("W5JMxHZr08Sb");
  expect(song.title).to.equal('Ván Cờ Cuối Cùng');
  expect(song.artists).to.equal('["Afan","YunjBoo"]');
  expect(song.topic).to.equal('Rap Việt');
  expect(song.bitrate).to.equal('320');
  expect(song.type).to.equal('song');
  expect(song.link_key).to.equal('d4304846929dab954e4f823d40a2d2a6');
  expect(song.lyric).to.equal('Mel:\n<br />Ngày đánh mất tình yêu em mới hiểu\n<br />Và em biết em đã sai thật nhiều.\n<br />Buông đôi tay, dẫu đang nắm thật chặt\n<br />Tìm vui mới …với những nối đau.\n<br />Đêm đêm dòng lệ ướt trên mi\n<br />Vì ngày qua đã không, cố giữ lấy.\n<br />Nuốt nước mắt, sâu trong lòng\n<br />Xin người thứ tha…\n<br />\n<br />Verse 1:\n<br />Thôi baby àh..- mọi chuyện đã vậy rồi\n<br />Có hối hận..- hay tiếc nuối..-cũng ko thay đổi\n<br />Từng là người mà em yêu nhất…- nay bây giờ cũng chính làm em đau\n<br />Hãy lau khô những giọt nước mắt..- để anh ko thấy em thêm sầu\n<br />Ván cờ ngày hôm nay….- là do anh sai đi nước bước\n<br />Ko thể lường trước mọi việc xảy ra..- quên em đi..-là bắt buộc\n<br />Vì ta đã từng ..- Đúng\n<br />Yêu nhau thật nhìu ..-Đúng\n<br />Xoá tan 1 phút chỉ vì câu nói anh ko còn yêu….-huh’\n<br />Em hãy đi đi..-anh sẽ chờ đợi dù rất đau đớn\n<br />Nói lời tạm biệt..-gởi vài lời chúc..- dù biết ai đó đang rất giận hờn\n<br />Anh sẽ ko vậy đâu..-sẽ ko mềm lòng đau\n<br />Buông tay em yêu là cách tốt nhất..-để cho sợi dây kia..-ko còn rời nhau\n<br />Thắc mắc vì tại sao..- yêu nhau rồi như thế\n<br />Trả lời 1 câu rằng : Vì Anh Đây Ko Thể\n<br />Afan à…- mày rất ngu ngốc\n<br />Có rồi ko biết gìn giữ..-để bây giờ lạc mất..- rồi mày ngồi khóc …..! \n<br />\n<br />\n<br />Mel:\n<br />Ngày đánh mất tình yêu em mới hiểu\n<br />Và em biết em đã sai thật nhiều.\n<br />Buông đôi tay, dẫu đang nắm thật chặt\n<br />Tìm vui mới …với những nối đau.\n<br />Đêm đêm dòng lệ ướt trên mi\n<br />Vì ngày qua đã không, cố giữ lấy.\n<br />Nuốt nước mắt, sâu trong lòng\n<br />Xin người thứ tha…\n<br />\n<br />\n<br />Verse 2 :\n<br />Và ver 2 này..- trước tiên anh gởi lời xin lỗi\n<br />Xin lỗi tất cả..- vì tình yêu này..- anh ko muốn nói [Goodbye]\n<br />Trao nhau nhiều lắm…-rồi yêu nhìu lắm..-tại sao mình ko biết giữ\n<br />Để rồi 1 ngày cả 2 mất hết…-đợi chờ 1 lần để tha thứ\n<br />Ko cần nữa..-vì chính bản thân anh thay đổi\n<br />Em đã cố..-giải thích tất cả tại sao ko nghe…-anh là thằng tồi\n<br />Em…- đừng miễn cưỡng nữa ?\n<br />Vì cái tình cảm..-đã ko còn giá trị..-nó chỉ là thừa\n<br />Hãy cố đi tìm 1 người tốt hơn…- xin đừng bao giờ nhắc anh nữa\n<br />Khoảng trống mòn mỏi đợi chờ lấp đầy..-ko bao giờ ..-nó được chất chứa\n<br />Vì sao đêm nay…-Cái ngôi saoem thích nhất\n<br />Nó cũng xoá đi..-chạy theo thời gian..-mà bao lâu qua anh đã tích cực…rồi\n<br />Soi sáng cho em..-một con đường riêng..- và hạnh phúc\n<br />Bước chân anh đã chậm nhịp\n<br />quay lại nhìn anh thầm chúc\n<br />Tất cả trở lại ban đầu..- bàn tay ngày xưa..-nhường người đến sau\n<br />Kết thúc ở sau màn mưa…-nhìn lại quá khứ..-chỉ có mình anh ngồi thầm khắc sâu…!\n<br />\n<br />[Bridge]:\n<br />Sẽ còn sẽ còn sẽ còn\n<br />Những ký ức xưa…\n<br />Chỉ còn chỉ còn\n<br />Mình em với đêm\n<br />Từng nỗi nhớ thoáng qua đêm đêm\n<br />Một lần nỡ đánh mất con tim anh\n<br />Để giờ em bơ vơ ngậm ngùi\n<br />Bên em nỗi nhớ…!\n<br />\n<br />Mel :\n<br />Ngày đánh mất tình yêu em mới hiểu\n<br />Và em biết em đã sai thật nhiều.\n<br />Buông đôi tay, dẫu đang nắm thật chặt\n<br />Tìm vui mới …với những nối đau.\n<br />Đêm đêm dòng lệ ướt trên mi\n<br />Vì ngày qua đã không, cố giữ lấy.\n<br />Nuốt nước mắt, sâu trong lòng\n<br />Xin người thứ tha…');
  return done();
});
```

should be played at least 3816 times.

```js
var id, link;
id = 2529341;
link = "http://www.nhaccuatui.com/wg/get-counter?listSongIds=" + id;
return getFileByHTTP(link, function(data) {
  var song;
  data = JSON.parse(data);
  song = data.data.songs;
  expect(song[id]).to.be.at.least(3816);
  return done();
});
```

<a name="the-website-nhaccuatuicom-album-id-0nxnialooip2"></a>
## Album ID: 0nXnIALOOIP2
should be called "Tuyết Lạnh (2013)" by "Thúy Vy", "Lương Mạnh Hùng" and has certain properties.

```js
var album, link;
album = {
  id: 11997829,
  key: "0nXnIALOOIP2"
};
link = "http://www.nhaccuatui.com/playlist/joke-link." + album.key + ".html";
return getFileByHTTP(link, function(data) {
  var options;
  options = {
    id: album.id,
    key: album.key,
    plays: 0
  };
  album = nhaccuatui.processAlbum(data, options);
  expect(album.id).to.equal(11997829);
  expect(album.key).to.equal("0nXnIALOOIP2");
  expect(album.title).to.equal('Tuyết Lạnh (2013)');
  expect(album.artists).to.equal('["Thúy Vy","Lương Mạnh Hùng"]');
  expect(album.topic).to.equal('Trữ Tình');
  expect(album.nsongs).to.equal(3);
  expect(album.thumbnail).to.equal('http://p.img.nct.nixcdn.com/playlist/2013/04/25/e/5/8/5/1366902514487.jpg');
  expect(album.link_key).to.equal('1ffc9e71de0805c18a588165a200b008');
  expect(album.created).to.equal('2013-04-25 22:8:34');
  expect(album.songs).to.eql([
    {
      id: '2505185',
      key: 'MCFGGOJ52cLM'
    }, {
      id: '2505189',
      key: 'PZAjh6mFUDhR'
    }, {
      id: '2507968',
      key: 'pxdnb4Wgb9gv'
    }
  ]);
  return done();
});
```

should be played at least 1158 times.

```js
var id, link;
id = 11997829;
link = "http://www.nhaccuatui.com/wg/get-counter?listPlaylistIds=" + id;
return getFileByHTTP(link, function(data) {
  var album;
  data = JSON.parse(data);
  album = data.data.playlists;
  expect(album[id]).to.be.at.least(1158);
  return done();
});
```

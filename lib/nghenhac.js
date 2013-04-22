// Generated by CoffeeScript 1.4.0
(function() {
  var Encoder, Module, NN_CONFIG, Nghenhac, Utils, colors, encoder, events, fs, http, xml2js,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  http = require('http');

  xml2js = require('xml2js');

  Module = require('./module');

  Utils = require('./utils');

  colors = require('colors');

  fs = require('fs');

  events = require('events');

  Encoder = require('node-html-encoder').Encoder;

  encoder = new Encoder('entity');

  NN_CONFIG = {
    table: {
      Songs: "NNSongs",
      Albums: "NNAlbums",
      Songs_Albums: "NNSongs_Albums"
    },
    logPath: "./log/NNLog.txt"
  };

  Nghenhac = (function(_super) {

    __extends(Nghenhac, _super);

    function Nghenhac(mysqlConfig, config) {
      this.mysqlConfig = mysqlConfig;
      this.config = config != null ? config : NN_CONFIG;
      this.fetchAlbums = __bind(this.fetchAlbums, this);

      this.processAlbum = __bind(this.processAlbum, this);

      this.fetchSongs = __bind(this.fetchSongs, this);

      this.processSong = __bind(this.processSong, this);

      this.table = this.config.table;
      this.query = {
        _insertIntoNNSongs: "INSERT INTO " + this.table.Songs + " SET ?",
        _insertIntoNNAlbums: "INSERT INTO " + this.table.Albums + " SET ?",
        _insertIntoNNSongs_Albums: "INSERT INTO " + this.table.Songs_Albums + " SET ?"
      };
      this.utils = new Utils();
      this.parser = new xml2js.Parser();
      this.eventEmitter = new events.EventEmitter();
      Nghenhac.__super__.constructor.call(this, this.mysqlConfig);
      this.logPath = this.config.logPath;
      this.log = {};
      this._readLog();
    }

    Nghenhac.prototype.getFileByHTTP = function(link, onSucess, onFail, options) {
      var _this = this;
      return http.get(link, function(res) {
        var data;
        res.setEncoding('utf8');
        data = '';
        if (res.statusCode !== 302) {
          res.on('data', function(chunk) {
            return data += chunk;
          });
          return res.on('end', function() {
            return onSucess(data, options);
          });
        } else {
          return onFail("The link is temporary moved", options);
        }
      }).on('error', function(e) {
        return onFail("Cannot get file from server. ERROR: " + e.message, options);
      });
    };

    Nghenhac.prototype.processSong = function(data, options) {
      var a, albumid, artist, artist_id, author, b, encoded_id, link, lyric, name, plays, points, song, times, topic, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      song = {
        id: options.id,
        encoded_id: "",
        name: "",
        artist_id: 0,
        artist: "",
        author: "",
        albumid: 0,
        topic: "",
        plays: 0,
        lyric: "",
        link: ""
      };
      a = ["Nhac-tre", "Nhac-hai-ngoai", "Nhac-Viet-Nam", "Nhac-trinh", "Nhac-tien-chien", "Nhac-dan-toc", "Nhac-do", "Nhac-Cach-mang", "Nhac-Tru-tinh", "Nhac-Vang", "Nhac-thieu-nhi", "Nhac-que-huong", "Tat-ca", "Nhac-Au-My", "Nhac-phim", "Viet-Nam", "Han-Quoc", "Trung-Quoc", "Quoc-te", "Quang-cao", "Nhac-khong-loi", "Hoa-tau", "Giao-huong", "Rap-Viet", "Rock-Viet", "Nhac-Han", "Nhac-Hoa", "Nhac-Nhat", "Flash-music", "Nhac-Phap", "TeenPops", "RB", "RocknRoll", "NewAge"];
      b = ["Nhạc Trẻ", "Nhạc Hải Ngoại", "Nhạc Việt Nam", "Nhạc Trịnh", "Nhạc Tiền Chiến", "Nhạc Dân Tộc", "Nhạc Đỏ", "Nhạc Cách Mạng", "Nhạc Trữ Tình", "Nhạc Vàng", "Nhạc Thiếu Nhi", "Nhạc Quê Hương", "Tất cả", "Nhạc Âu Mỹ", "Nhạc Phim", "Việt Nam", "Hàn Quốc", "Trung Quốc", "Quốc Tế", "Quảng Cáo", "Nhạc Không Lời", "Hòa Tấu", "Giao Hưởng", "Rap Việt", "Rock Việt", "Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Flash music", "Nhạc Pháp", "Teen Pop", "R&B", "Rock & Roll", "New Age"];
      encoded_id = (_ref = data.match(/ashx\?p=[a-zA-Z0-9]+/)) != null ? _ref[0] : void 0;
      if (encoded_id !== void 0) {
        song.encoded_id = encoded_id.replace(/ashx\?p=/g, '');
      }
      name = (_ref1 = data.match(/Ca\skhúc:.+/g)) != null ? _ref1[0] : void 0;
      if (name !== void 0) {
        song.name = encoder.htmlDecode(name.replace(/<\/span>.+$/g, '').replace(/^.+>/g, ''));
      }
      artist = (_ref2 = data.match(/Trình\sbày:.+/g)) != null ? _ref2[0] : void 0;
      if (artist !== void 0) {
        artist_id = (_ref3 = artist.match(/Song\/\d+/g, '')) != null ? (_ref4 = _ref3[0].match(/\d.+/g)) != null ? _ref4[0] : void 0 : void 0;
        if (artist_id !== void 0) {
          song.artist_id = artist_id;
        }
        artist = artist.replace(/<\/a>.+$/g, '').replace(/^.+>/g, '');
        if (artist !== "Chưa xác định") {
          song.artist = encoder.htmlDecode(artist);
        }
      }
      author = (_ref5 = data.match(/Tác\sgiả:.+/g)) != null ? _ref5[0] : void 0;
      if (author !== void 0) {
        author = author.replace(/<\/a>.+$/g, '').replace(/^.+>/g, '');
        if (author !== "Chưa xác định") {
          song.author = encoder.htmlDecode(author);
        }
      }
      albumid = (_ref6 = data.match(/Album:.+/g)) != null ? _ref6[0] : void 0;
      if (albumid !== void 0) {
        albumid = (_ref7 = albumid.match(/\/Album\/.+\/\d+/g)) != null ? (_ref8 = _ref7[0]) != null ? (_ref9 = _ref8.match(/\d+/)) != null ? _ref9[0] : void 0 : void 0 : void 0;
        if (albumid !== void 0) {
          song.albumid = albumid;
        }
      }
      topic = (_ref10 = data.match(/href.+Index\.html.+»\sXem\stất\scả/)) != null ? _ref10[0] : void 0;
      if (topic !== void 0) {
        topic = topic.replace(/href=\"\//g, '').replace(/\/Index.+$/g, '').split(/\//);
        song.topic = JSON.stringify(topic.map(function(v) {
          if (a.indexOf(v) > -1) {
            return b[a.indexOf(v)];
          } else {
            return v;
          }
        }));
      }
      plays = (_ref11 = data.match(/Bầu\schọn:.+/)) != null ? _ref11[0] : void 0;
      if (plays !== void 0) {
        points = (_ref12 = plays.match(/\d+\sđiểm/)) != null ? _ref12[0] : void 0;
        times = (_ref13 = plays.match(/\d\slần/)) != null ? _ref13[0] : void 0;
        song.plays = parseInt(points, 10) + parseInt(times, 10);
      }
      lyric = (_ref14 = data.match(/id=\"lyric\".+/g, '')) != null ? _ref14[0] : void 0;
      if (lyric !== void 0) {
        song.lyric = encoder.htmlDecode(lyric.replace(/<\/div>$/g, '').replace(/^.+\">/g, ''));
      }
      link = (_ref15 = data.match(/mp3:\s\'http:\/\/.+/g, '')) != null ? _ref15[0] : void 0;
      if (link !== void 0) {
        song.link = link.replace(/^.+http/g, 'http').replace("'", "");
      }
      this.eventEmitter.emit('result', song);
      return song;
    };

    Nghenhac.prototype._fetchSong = function(id) {
      var link, onFail, options,
        _this = this;
      options = {
        id: id
      };
      link = "http://nghenhac.info/joke/" + id + "/joke.html";
      onFail = function(err) {
        _this.stats.totalItemCount += 1;
        _this.stats.failedItemCount += 1;
        _this.utils.printRunning(_this.stats);
        if (_this.stats.totalItems === _this.stats.totalItemCount) {
          return _this.utils.printFinalResult(_this.stats);
        }
      };
      return this.getFileByHTTP(link, this.processSong, onFail, options);
    };

    Nghenhac.prototype.fetchSongs = function(range0, range1) {
      var id, _i, _ref, _results,
        _this = this;
      if (range0 == null) {
        range0 = 0;
      }
      if (range1 == null) {
        range1 = 0;
      }
      this.connect();
      console.log(" |" + ("Fetching songid: " + range0 + ".." + range1 + " to table: " + this.table.Songs).magenta);
      this.stats.totalItems = range1 - range0 + 1;
      _ref = [range0, range1], this.stats.range0 = _ref[0], this.stats.range1 = _ref[1];
      this.stats.currentTable = this.table.Songs;
      this.eventEmitter.on('result', function(song) {
        _this.stats.totalItemCount += 1;
        _this.stats.passedItemCount += 1;
        _this.stats.currentId = song.id;
        _this.utils.printRunning(_this.stats);
        if (_this.stats.totalItems === _this.stats.totalItemCount) {
          _this.utils.printFinalResult(_this.stats);
        }
        return _this.connection.query(_this.query._insertIntoNNSongs, song, function(err) {
          if (err) {
            return console.log("Cannt insert song: " + song.id + " into table. ERROR : " + err);
          }
        });
      });
      _results = [];
      for (id = _i = range0; range0 <= range1 ? _i <= range1 : _i >= range1; id = range0 <= range1 ? ++_i : --_i) {
        _results.push(this._fetchSong(id));
      }
      return _results;
    };

    Nghenhac.prototype.processAlbum = function(data, options) {
      var a, album, artist, b, encoded_id, name, plays, songs, thumbnail, topic, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      album = {
        id: options.id,
        encoded_id: "",
        name: "",
        artist: "",
        topic: "",
        nsongs: 0,
        plays: 0,
        thumbnail: "",
        songs: []
      };
      a = ["Nhac-tre", "Nhac-hai-ngoai", "Nhac-Viet-Nam", "Nhac-trinh", "Nhac-tien-chien", "Nhac-dan-toc", "Nhac-do", "Nhac-Cach-mang", "Nhac-Tru-tinh", "Nhac-Vang", "Nhac-thieu-nhi", "Nhac-que-huong", "Tat-ca", "Nhac-Au-My", "Nhac-phim", "Viet-Nam", "Han-Quoc", "Trung-Quoc", "Quoc-te", "Quang-cao", "Nhac-khong-loi", "Hoa-tau", "Giao-huong", "Rap-Viet", "Rock-Viet", "Nhac-Han", "Nhac-Hoa", "Nhac-Nhat", "Flash-music", "Nhac-Phap", "TeenPops", "RB", "RocknRoll", "NewAge"];
      b = ["Nhạc Trẻ", "Nhạc Hải Ngoại", "Nhạc Việt Nam", "Nhạc Trịnh", "Nhạc Tiền Chiến", "Nhạc Dân Tộc", "Nhạc Đỏ", "Nhạc Cách Mạng", "Nhạc Trữ Tình", "Nhạc Vàng", "Nhạc Thiếu Nhi", "Nhạc Quê Hương", "Tất cả", "Nhạc Âu Mỹ", "Nhạc Phim", "Việt Nam", "Hàn Quốc", "Trung Quốc", "Quốc Tế", "Quảng Cáo", "Nhạc Không Lời", "Hòa Tấu", "Giao Hưởng", "Rap Việt", "Rock Việt", "Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Flash music", "Nhạc Pháp", "Teen Pop", "R&B", "Rock & Roll", "New Age"];
      encoded_id = (_ref = data.match(/PlayAlbumJson\.ashx\?p\=[0-9a-zA-Z]+/g)) != null ? _ref[0] : void 0;
      if (encoded_id !== void 0) {
        album.encoded_id = encoded_id.replace(/PlayAlbumJson\.ashx\?p\=/g, '');
      }
      name = (_ref1 = data.match(/\<span\>Nghe\sAlbum.+\<\/span\>/g)) != null ? _ref1[0] : void 0;
      if (name !== void 0) {
        album.name = name.replace(/\<span\>Nghe\sAlbum\s:/g, '').replace(/\<\/span\>/g, '').trim();
      }
      artist = (_ref2 = data.match(/Trình\sbày:.+/g)) != null ? _ref2[0] : void 0;
      if (artist !== void 0) {
        album.artist = artist.replace(/<a\/>.+$/g, '').replace(/^.+>/g, '');
      }
      topic = (_ref3 = data.match(/href.+Index\.html.+a_Genreviewall/)) != null ? _ref3[0] : void 0;
      if (topic !== void 0) {
        topic = topic.replace(/href=\"\//g, '').replace(/\/Album\/1\/Index.+$/g, '').split(/\//);
        album.topic = JSON.stringify(topic.map(function(v) {
          if (a.indexOf(v) > -1) {
            return b[a.indexOf(v)];
          } else {
            return v;
          }
        }));
      }
      songs = data.match(/<a\sclass=\"link-black\"\stitle=\"Nghe.+/g);
      if (songs !== null) {
        album.nsongs = songs.length;
        album.songs = songs.map(function(v) {
          var t, _ref4;
          t = (_ref4 = v.match(/\/\d+\//g)) != null ? _ref4[0] : void 0;
          if (t !== void 0) {
            return t.replace(/\//g, '');
          } else {
            return 0;
          }
        });
      }
      if (data.match(/Chưa\sbầu\schọn\slần\snào/g) === null) {
        plays = (_ref4 = data.match(/Bầu\schọn\:.+/g)) != null ? _ref4[0] : void 0;
        if (plays !== void 0) {
          album.plays = plays.replace(/\<.+\>/g, '').replace(/Bầu\schọn\:\s\(/g, '').replace(/\slần\)/g, '').replace(/\sđiểm/g, '').trim().split(',').reduce(function(x, y) {
            return parseInt(x, 10) + parseInt(y, 10);
          });
        }
      }
      thumbnail = (_ref5 = data.match(/AlbumImage.+/g)) != null ? _ref5[0] : void 0;
      if (thumbnail !== void 0) {
        album.thumbnail = thumbnail.replace(/\"\s\/><\/div>/g, '').replace(/^.+\"/g, '');
      }
      this.eventEmitter.emit('result-album', album);
      return album;
    };

    Nghenhac.prototype._fetchAlbum = function(id) {
      var link, onFail, options,
        _this = this;
      options = {
        id: id
      };
      link = "http://nghenhac.info/Album/joke-link/" + id + "/.html";
      onFail = function(err) {
        _this.stats.totalItemCount += 1;
        _this.stats.failedItemCount += 1;
        _this.utils.printRunning(_this.stats);
        if (_this.stats.totalItems === _this.stats.totalItemCount) {
          return _this.utils.printFinalResult(_this.stats);
        }
      };
      return this.getFileByHTTP(link, this.processAlbum, onFail, options);
    };

    Nghenhac.prototype.fetchAlbums = function(range0, range1) {
      var id, _i, _ref,
        _this = this;
      if (range0 == null) {
        range0 = 0;
      }
      if (range1 == null) {
        range1 = 0;
      }
      this.connect();
      console.log(" |" + ("Fetching albumid: " + range0 + ".." + range1 + " to table: " + this.table.Albums).magenta);
      this.stats.totalItems = range1 - range0 + 1;
      _ref = [range0, range1], this.stats.range0 = _ref[0], this.stats.range1 = _ref[1];
      this.stats.currentTable = this.table.Albums;
      this.eventEmitter.on('result', function(album) {
        var songs;
        _this.stats.totalItemCount += 1;
        _this.stats.passedItemCount += 1;
        _this.stats.currentId = album.id;
        _this.utils.printRunning(_this.stats);
        if (_this.stats.totalItems === _this.stats.totalItemCount) {
          _this.utils.printFinalResult(_this.stats);
        }
        songs = album.songs;
        delete album.songs;
        return _this.connection.query(_this.query._insertIntoNNAlbums, album, function(err) {
          var sid, _i, _len, _results;
          if (err) {
            return console.log("Cannt insert album: " + album.id + " into table. ERROR : " + err);
          } else {
            _results = [];
            for (_i = 0, _len = songs.length; _i < _len; _i++) {
              sid = songs[_i];
              _results.push((function(sid) {
                return _this.connection.query(_this.query._insertIntoNNSongs_Albums, {
                  aid: album.id,
                  sid: sid
                }, function(err1) {
                  if (err1) {
                    return console.log("cannt insert song: " + sid + " - album: " + album.id + " into table. ERROR: " + err1);
                  }
                });
              })(sid));
            }
            return _results;
          }
        });
      });
      for (id = _i = range0; range0 <= range1 ? _i <= range1 : _i >= range1; id = range0 <= range1 ? ++_i : --_i) {
        this._fetchAlbum(id);
      }
      return null;
    };

    Nghenhac.prototype._updateAlbum = function(id) {
      var link, onFail, options,
        _this = this;
      options = {
        id: id
      };
      link = "http://nghenhac.info/Album/joke-link/" + id + "/.html";
      onFail = function(err, options) {
        _this.stats.totalItemCount += 1;
        _this.stats.failedItemCount += 1;
        _this.temp.totalFail += 1;
        _this.utils.printUpdateRunning(options.id, _this.stats, "Fetching...");
        if (_this.temp.totalFail < 100) {
          return _this._updateAlbum(options.id + 1);
        } else {
          if (_this.stats.passedItemCount === 0) {
            console.log("");
            return console.log("Album up-to-date");
          } else {
            _this.utils.printFinalResult(_this.stats);
            return _this._writeLog(_this.log);
          }
        }
      };
      return this.getFileByHTTP(link, this.processAlbum, onFail, options);
    };

    Nghenhac.prototype.updateAlbums = function() {
      var _this = this;
      this.connect();
      this._readLog();
      this.temp = {
        totalFail: 0
      };
      this.stats.currentTable = this.table.Albums;
      console.log(" |" + ("Updating Albums to table: " + this.table.Albums).magenta);
      this.eventEmitter.on('result-album', function(album) {
        var songs;
        _this.stats.totalItemCount += 1;
        _this.stats.passedItemCount += 1;
        _this.log.lastAlbumId = album.id;
        _this.temp.totalFail = 0;
        _this.utils.printUpdateRunning(album.id, _this.stats, "Fetching...");
        songs = album.songs;
        delete album.songs;
        _this.connection.query(_this.query._insertIntoNNAlbums, album, function(err) {
          var sid, _i, _len, _results;
          if (err) {
            return console.log("Cannot insert album: " + album.id + " into table. ERROR : " + err);
          } else {
            _results = [];
            for (_i = 0, _len = songs.length; _i < _len; _i++) {
              sid = songs[_i];
              _results.push((function(sid) {
                return _this.connection.query(_this.query._insertIntoNNSongs_Albums, {
                  aid: album.id,
                  sid: sid
                }, function(err1) {
                  if (err1) {
                    return console.log("Cannot insert song: " + sid + " - album: " + album.id + " into table. ERROR: " + err1);
                  }
                });
              })(sid));
            }
            return _results;
          }
        });
        return _this._updateAlbum(album.id + 1);
      });
      return this._updateAlbum(this.log.lastAlbumId + 1);
    };

    Nghenhac.prototype._updateSong = function(id) {
      var link, onFail, options,
        _this = this;
      options = {
        id: id
      };
      link = "http://nghenhac.info/joke/" + id + "/joke.html";
      onFail = function(err, options) {
        _this.stats.totalItemCount += 1;
        _this.stats.failedItemCount += 1;
        _this.temp.totalFail += 1;
        _this.utils.printUpdateRunning(options.id, _this.stats, "Fetching...");
        if (_this.temp.totalFail < 100) {
          return _this._updateSong(options.id + 1);
        } else {
          if (_this.stats.passedItemCount === 0) {
            console.log("");
            console.log("Song up-to-date");
          } else {
            _this.utils.printFinalResult(_this.stats);
            _this._writeLog(_this.log);
          }
          _this.resetStats();
          return _this.updateAlbums();
        }
      };
      return this.getFileByHTTP(link, this.processSong, onFail, options);
    };

    Nghenhac.prototype.update = function() {
      var _this = this;
      this.connect();
      this._readLog();
      this.temp = {
        totalFail: 0
      };
      this.stats.currentTable = this.table.Songs;
      console.log(" |" + ("Updating Songs to table: " + this.table.Songs).magenta);
      this.eventEmitter.on('result', function(song) {
        _this.stats.totalItemCount += 1;
        _this.stats.passedItemCount += 1;
        _this.log.lastSongId = song.id;
        _this.temp.totalFail = 0;
        _this.utils.printUpdateRunning(song.id, _this.stats, "Fetching...");
        _this.connection.query(_this.query._insertIntoNNSongs, song, function(err) {
          if (err) {
            return console.log("Cannt insert song: " + song.id + " into table. ERROR : " + err);
          }
        });
        return _this._updateSong(song.id + 1);
      });
      return this._updateSong(this.log.lastSongId + 1);
    };

    Nghenhac.prototype.showStats = function() {
      return this._printTableStats(NN_CONFIG.table);
    };

    return Nghenhac;

  })(Module);

  module.exports = Nghenhac;

}).call(this);
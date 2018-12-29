var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, views, topic, subscriptions) {
        var _this = this;
        this.gettitle = function () {
            return _this.title;
        };
        this.getviews = function () {
            return _this.views;
        };
        this.gettopic = function () {
            return _this.topic;
        };
        this.getsubscriptions = function () {
            return _this.subscriptions;
        };
        this.title = title;
        this.views = views;
        this.topic = topic;
        this.subscriptions = subscriptions;
    }
    return YoutubeVideo;
}());
var tedx = new YoutubeVideo("jyothireddy", 2000, "inspiration", 5000);
console.log(tedx.gettitle());
console.log(tedx.getviews());
console.log(tedx.gettopic());
console.log(tedx.getsubscriptions());


(function(w){
    var Lazyload = function(parent){
        this.oParent = document.querySelector(parent)
        this.img = this.oParent.querySelectorAll('img');
        if(!this.oParent){
            this.oParent = 'body'
        }else{
            this.init()
            this.scroll()
        }
    }

    Lazyload.prototype.init = function(){
        // 记住图片加载到的位置
        var count = 0;
        // 浏览器窗口的高度
        var w_height = document.body.clientHeight || document.documentElement.clientHeight;
        // 窗口滚动的高度
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        for(var i = count; i < this.img.length; i++){
            if((this.img[i].offsetTop < w_height + scrollTop) && this.img[i].getAttribute('src') == ''){
                this.img[i].src = this.img[i].getAttribute('data-src')
            }
            count = i + 1;
        }
    }
    Lazyload.prototype.scroll = function(){
        let _this = this
        window.onscroll = function(){
            _this.init()
        }
    }

    window.lazyload = Lazyload
})(window)
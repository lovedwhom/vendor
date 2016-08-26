/**
 * Created by cuijn on 2016/6/17.
 */
//为包装集添加的方法
$.fn.extend({
    randomColor: function () {
        function randomColor() {
            var color = Math.floor(Math.random() * 0xFFFFFF);
            color = '000000' + color.toString(16);
            return '#' + color.slice(-6);
        }

        //在这里，this指针，指向包装集对象
        //遍历包装集中的每个元素,把每个元素分别指定一个随机色
        this.each(function (index, el) {
            setInterval(function () {
                $(el).animate({
                    'backgroundColor': randomColor()
                });
            }, 1000);
        })

        return this;
    },
    fall: function () {
        function fall($el, speedH) {
            var v0 = 0;
            var vh = speedH;
            var start_time = new Date();
            var start_top = $el.offset().top;
            var a = 50;
            var bottom = $(window).height() - $el.height();
            var right = $(window).width() - $el.width();
            var offset_time = 10;
            var id = setInterval(function () {
                var currentV = $el.offset().top;
                var currentH = $el.offset().left;
                var s, v;
                if (currentV >= bottom) {
                    $el.offset({
                        top: bottom
                    });
                    console.log('v0=' + v0);
                    if (Math.abs(v0) < 1) {
                        clearInterval(id);
                        return;
                    }

                    v0 = -v0 * 0.85;
                }
                if (currentH > right || currentH < 0) {
                    vh *= -1;
                }


                // v = v0+gt
                v = v0 + a * offset_time / 1000;
                v0 = v;

                $el.offset({
                    top: currentV + v,
                    left: currentH + vh
                });

            }, offset_time);
        }

        fall(this, 10);

        return this;
    }
})

//添加一个jquery的工具函数（extend不能加fn，否则就把方法添加到包装集中了）
$.extend({
    captcha: function (count) {
        var captchaArr = [];

        for (var i = 0; i < 10; i++) {
            captchaArr.push(i);
        }

        for (var i = 0; i < 26; i++) {
            //push一个大写字母(65-90)
            captchaArr.push(String.fromCharCode(65 + i));

            //push一个小写字母(97-122)
            captchaArr.push(String.fromCharCode(97 + i));
        }

        //alert(captchaArr);
        //return console.log(str);
        function randomIndex() {
            return Math.floor(Math.random() * captchaArr.length);
        }

        var ret = [];
        for (var i = 0; i < count; i++) {
            var randomCode = captchaArr[randomIndex()];
            ret.push(randomCode);
        }

        return ret;
    }
})

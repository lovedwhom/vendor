/**
 * Created by my on 2016/7/28.
 */
var scale = 1 / window.devicePixelRatio;
var meta = document.createElement('meta');
meta.setAttribute('name','viewport');
meta.setAttribute('content','initial-scale=' +scale+',maximum-scale='+scale +',minimum-scale='+scale +',user-scalable=no');
document.querySelector('head').appendChild(meta);

var fontSize = document.documentElement.clientWidth / 6.4;
document.querySelector('html').style.fontSize=fontSize +'px';/**
 * Created by my on 2016/7/28.
 */

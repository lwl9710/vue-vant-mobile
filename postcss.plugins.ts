import postcssPxtorem from "postcss-pxtorem";
import autoprefixer from "autoprefixer";

// 单位转换
export function createPostcssPxtoremPlugin() {
  return postcssPxtorem({
    rootValue: ({ file }) => file.indexOf("vant") === -1 ? 75 : 37.5, //结果为：设计稿元素尺寸/75，比如元素宽750px,最终页面会换算成 10rem
    propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
    unitPrecision: 5, //保留rem小数点多少位
    //selectorBlackList: ['.radius'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
    replace: true, //这个真不知到干嘛用的。有知道的告诉我一下
    mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
    minPixelValue: 12, //px小于12的不会被转换
  });
}

// 兼容浏览器，添加前缀
export function createAutoPrefixerPlugin() {
  return autoprefixer({
    overrideBrowserslist: [
      "Android 4.1",
      "iOS 7.1",
      "Chrome > 31",
      "ff > 31",
      "ie >= 8",
      "last 10 versions", // 所有主流浏览器最近10版本用
    ],
    grid: true,
  });
}
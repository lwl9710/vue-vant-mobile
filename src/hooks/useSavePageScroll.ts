import { onMounted, onUpdated } from "vue";
import { onBeforeRouteLeave } from "vue-router";

interface Position {
  left: number;
  top: number;
} 

// 记录位置信息
const PAGE_SCROLL_MAP: StringObject<Position> = {};

// 获取页面记录的位置信息
export function getPagePosition(fullPath: string): Position {
  return PAGE_SCROLL_MAP[fullPath] || { left: 0, top: 0 };
}

// 删除页面记录的位置信息
export function removePagePosition(fullPath: string): void {
  delete PAGE_SCROLL_MAP[fullPath];
}

// 增加页面滚动信息记录
export default function useSavePageScroll(key: string) {
  onBeforeRouteLeave(() => {
    const pageMainEl = document.getElementsByClassName("page-main")[0];
    PAGE_SCROLL_MAP[key] =  {
      left: pageMainEl.scrollLeft,
      top: pageMainEl.scrollTop
    }
  });
  onUpdated(() => {
    const pageMainEl = document.getElementsByClassName("page-main")[0];
    const position = getPagePosition(key);
    pageMainEl.scrollLeft = position.left;
    pageMainEl.scrollTop = position.top;
  });
};
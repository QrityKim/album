$(function () {
  "use strict";

  class Accordion {
    constructor(options) {
      this.config = Accordion.mergeConfig(options);
      this.$accordion = $(this.config.selector);
      // jquery selector로 accordion을 선택한다.
      this.init();
      this.$accordion.addEventListener("click", this.toggle.bind(this));
      // 이벤트 핸들러 내부의 this는 현재 가르키고있는 요소가 된다.
    }

    static mergeConfig(options) {
      const config = {
        selector: "#accordion",
        multi: true
      };

      return {...config, ...options};
    }

    init() {
      const $ActiveSubmenu = this.$accordion.$(".active .submenu");
      if ($ActiveSubmenu) $ActiveSubmenu.style.height = $ActiveSubmenu.scrollHeight + "px";
    }

    toggle(event) {
      if (!event.target.classList.constains("menu")) return;

      const $targetItem = event.target.parentNode;

      if (!this.config.multi) {
        [].filter.call(
          this.$accordion.childNodes,
          li => li.nodeType === Node.ELEMENT_NODE && li !== $targetItem && li.classList.contains("active")
        ).forEach(li => {
          li.classList.remove("active");
          li.querySelector(".submenu").style.height = "0";
        });
      }

      $targetItem.classList.toggle("active");
      const $submenu = $targetItem.querySelector(".submenu");
      $submenu.style.height = $target.classList.contains("active") ? $submentu.scrollHeight + "px" : "0";
    }
  }

  window.onload = function () {
    const accordion = new Accordion({multi: false});
  };
});

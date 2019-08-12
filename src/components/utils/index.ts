type ScrollTop = number;
export const modalHelper = (function(bodyClass) {
  let scrollTop: ScrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.body.scrollTop;
      document.body.classList.add(bodyClass);
      document.body.style.top = `${-scrollTop}px`;
    },
    beforeClose: function() {
      document.body.classList.remove(bodyClass);
      document.body.scrollTop = scrollTop;
    }
  };
})("ui-modal-open");

export const on = (obj: any, ...args: any[]) => obj.addEventListener(...args);

export const off = (obj: any, ...args: any[]) =>
  obj.removeEventListener(...args);

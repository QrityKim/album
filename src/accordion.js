
  class Carousel {
    constructor() {
      this.carousel = document.querySelector(".gallery");
      this.container = this.carousel.querySelector(".slide-container");
      // this.item = $(".gallery .slides");
      this.item = this.carousel.querySelector('.slides');
      this.prev = this.carousel.querySelector(".prev");
      this.next = this.carousel.querySelector(".next");
      this.itemWidth = this.item.offsetWidth;
      this.itemHeight = this.item.offsetHeight;
      this.itemLength = this.carousel.querySelectorAll(".slides").length;

      this.offset = 0;
      this.currentItem = 1;

      // 설정 정보
      this.config = {
        duration: 200,
        easing: 'ease-out'
      };

      this.init();
      this.attachEvent();
    }

    init() {
      this.carousel.style.width = this.itemWidth + 'px';
        this.carousel.style.height = this.itemHeight + 'px';

        // carousel 요소의 width/height의 셋팅이 완료되면 carousel 요소를 보여준다.
        this.carousel.style.opacity = 1;
      this.checkMovable();
    }

    attachEvent() {
        this.prev.addEventListener('click', this.moveToPrev.bind(this));
        this.next.addEventListener('click', this.moveToNext.bind(this));
    }

    moveToPrev() {
        // carousel-container 요소를 오른쪽으로 이동시키기 위해 이동거리를 캐러셀 아이템의 너비만큼 증시킨다.
        this.offset += this.itemWidth;
        // 이전 슬라이더로 이동하기 위해 carousel-container 요소를 오른쪽으로 이동시킨다.
        this.move();
        // 현재 표시 중인 캐러셀 아이템 인덱스(1~4)
        this.currentItem--;
        // prev, next 버튼 활성화/비활성화 결정
        this.checkMovable();
    }

      /*
        next 버튼 이벤트 핸들러
        다음 슬라이더로 이동하기 위해 carousel-container 요소를 왼쪽으로 이동시킨다.
      */
      moveToNext() {
        // carousel-container 요소를 왼쪽으로 이동시키기 위해 이동거리를 캐러셀 아이템의 너비만큼 감소시킨다.
        this.offset -= this.itemWidth;
        // 다음 슬라이더로 이동하기 위해 carousel-container 요소를 왼쪽으로 이동시킨다.
        this.move();
        // 현재 표시 중인 캐러셀 아이템 인덱스(1~4)
        this.currentItem++;
        // prev, next 버튼 활성화/비활성화 결정
        this.checkMovable();
      }

      // offset 만큼 carousel-container 요소를 이동시킨다.
      move() {
        this.container.style.transition = `transform ${this.config.duration}ms ${this.config.easing}`;
        this.container.style.transform = `translate3D(${this.offset}px, 0, 0)`;
      }

      // prev, next 버튼 활성화/비활성화 결정
      checkMovable() {
        if (this.currentItem === 1) {
          this.prev.disabled = true;
          this.prev.classList.add('disabled');
        } else {
          this.prev.disabled = false;
          this.prev.classList.remove('disabled');
        }

        if (this.currentItem === this.itemLength) {
          this.next.disabled = true;
          this.next.classList.add('disabled');
        } else {
          this.next.disabled = false;
          this.next.classList.remove('disabled');
        }
      }
  }

  window.onload = function () {
    const carousel = new Carousel();
  };

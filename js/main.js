  (function() {

    'use strict';
  
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:76.438em)' );
  
    // keep track of swiper instances to destroy later
    let mySwiper;
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const breakpointChecker = function() {
  
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
  
        // clean up old instances and inline styles when available
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
      // or/and do nothing
      return;
  
        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {
  
          // fire small viewport version of swiper
          return enableSwiper();
  
        }
  
    };
    
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const enableSwiper = function() {
  
      mySwiper = new Swiper ('.swiper-container', {
        loop: true,
      
      slidesPerView: 1,
      spaceBetween: 100,

      centeredSlides: true,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      });

      swiper.on('slideChange', function () {
        document.getElementById('pic').style.transform = `rotate(${this.d = (this.d | 0) + 80}deg)`;//крутим гексагон
      });
  
    };
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
  
    // kickstart
    breakpointChecker();
  
  
  
  })(); /* IIFE end */
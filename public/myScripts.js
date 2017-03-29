$(function() {

  var menuCloud = $('.menuCloud'),
    navLink = $('.nav-menu a'),
    testSVG = $('.testSVG'),
    hlContainer = $('.homeLogo-container'),
    comp = $('.comp'),
    read = $('.read'),
    home = $('.home'),
    search = $('.search'),
    navback = $('.navback'),
    navMenu = $('.nav-menu'),
    deskNav = $('.deskNav'),
    tinyCloud = $('img.logoBtn'),
    login = $('.login'),
    logout = $('.logout');

  //desk gsap //


  /*********CLOUD FLOAT ANIMATION*******************/
  var float = new TimelineMax({
    repeat: -1,
    yoyo: true
  }); //endless loop

  float.from(menuCloud, 3, {
    y: 20,
    ease: Power1.easeInOut
  });


  /*MOBILE nav menu********************************/
  var navOpen = new TimelineLite({
    paused: true
  });

  navOpen.from(navMenu, .1, {
      autoAlpha: 0,
      y: 3000,
      ease: Power3.easeOut
    })
    .from(navback, 1, {
      autoAlpha: 0,
      ease: Power3.easeOut
    })
    .from(home, .2, {
      y: 100,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '.1+=')
    .from(read, .2, {
      y: 100,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '.2+=')
    .from(comp, .2, {
      y: 100,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '.3+=')
    .from(search, .2, {
      y: 100,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '.4+=')
    .from(login, .2, {
      y: 100,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '.5+=')
    .from(logout, .2, {
      y: 100,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '.6+=')

  menuCloud.on('click', function() {
    console.log("clicked on open");
    navOpen.play();
  })



});

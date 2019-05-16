$(function() {
  $("#main-nav-bar").load(`${root}components/navBar.html`);
  $("#footer").load(`${root}components/footer.html`);

  var iconsURL = [
    `${root}assets/SVG/JS.html`,
    `${root}assets/SVG/React-icon.html`,
    `${root}assets/SVG/sass.html`,
    `${root}assets/SVG/npm.html`,
    `${root}assets/SVG/sketch.html`,
    `${root}assets/SVG/adobe-creative.html`,
    `${root}assets/SVG/git.html`
  ];

  createIconsHomeContent(iconsURL);

  function createIconsHomeContent(iconsURL) {
    $.each(iconsURL, function(index, value) {
      $("#home-content-icons").append($("<span>").load(value));
    });
  }
});
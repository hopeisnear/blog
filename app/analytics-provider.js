export function initAnalytics() {
  window.ga =
    window.ga ||
    function init(args) {
      (ga.q = ga.q || []).push(...args);
    };
  ga.l = +new Date();
  ga('create', 'UA-126291608-1', 'auto');
  ga('send', 'pageview');
}

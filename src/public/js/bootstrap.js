(function () {
  var collapseElements = document.querySelectorAll('[data-toggle="collapse"]');
  var CLASS_SHOW = 'show';
  var CLASS_COLLAPSE = 'collapse';
  var CLASS_COLLAPSING = 'collapsing';
  var CLASS_COLLAPSED = 'collapsed';
  var ANIMATION_TIME = 350; // 0.35s

  function handleCollapseElementClick(e) {
    var el = e.currentTarget;
    var collapseTargetId = el.dataset.target || el.href || null;
    if (collapseTargetId) {
      var targetEl = document.querySelector(collapseTargetId);
      var isShown = targetEl.classList.contains(CLASS_SHOW) || targetEl.classList.contains(CLASS_COLLAPSING);
      if(!isShown) {
        targetEl.classList.remove(CLASS_COLLAPSE);
        targetEl.classList.add(CLASS_COLLAPSING);
        targetEl.style.height = 0
        targetEl.classList.remove(CLASS_COLLAPSED);
        setTimeout(function() {
          targetEl.classList.remove(CLASS_COLLAPSING);
          targetEl.classList.add(CLASS_COLLAPSE, CLASS_SHOW);
          targetEl.style.height = '';
        }, ANIMATION_TIME)
        targetEl.style.height = targetEl.scrollHeight + 'px';
      } else {
        targetEl.style.height = targetEl.getBoundingClientRect().height + 'px';
        targetEl.offsetHeight; // force reflow
        targetEl.classList.add(CLASS_COLLAPSING);
        targetEl.classList.remove(CLASS_COLLAPSE, CLASS_SHOW);
        targetEl.style.height = '';
        setTimeout(function(){
          targetEl.classList.remove(CLASS_COLLAPSING);
          targetEl.classList.add(CLASS_COLLAPSE);
        }, ANIMATION_TIME)
      }
    }
  };

  collapseElements.forEach(function(el) {
    el.addEventListener('click', handleCollapseElementClick)
  });

})();
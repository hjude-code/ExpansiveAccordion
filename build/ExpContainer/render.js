/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/ExpContainer/render.js ***!
  \************************************/
const accordionGroups = document.querySelectorAll('.wp-block-exp-acc-exp-container');
function calculatePanelSizes(accordionGroup) {
  let groupW = accordionGroup.getBoundingClientRect().width;
  let groupH = accordionGroup.getBoundingClientRect().height;
  let headersW = 0;
  let headersH = 0;
  const accordionPanelHeaders = accordionGroup.querySelectorAll('.wp-block-exp-acc-exp-panel .panel-header');
  accordionPanelHeaders.forEach(panelHeader => {
    headersW += panelHeader.getBoundingClientRect().width;
    headersH += panelHeader.getBoundingClientRect().height;
  });
  let availContentW = Math.round(groupW - headersW);
  let availContentH = Math.round(groupH - headersH);
  accordionGroup.style.setProperty('--availContentW', `${availContentW}px`);
  accordionGroup.style.setProperty('--availContentH', `${availContentH}px`);
}
function calculatePanelContentSize(panel) {
  const panelContent = panel.querySelector('.panel-content');
  const panelContentW = panelContent.getBoundingClientRect().width;
  const panelContentH = panelContent.getBoundingClientRect().height;
  panel.style.setProperty('--panelContentW', panelContentW + "px");
  panel.style.setProperty('--panelContentH', panelContentH + "px");
}
accordionGroups.forEach(accordionGroup => {
  const accordionPanels = accordionGroup.querySelectorAll('.wp-block-exp-acc-exp-panel');
  calculatePanelSizes(accordionGroup);
  let activePanel;
  accordionPanels.forEach(panel => {
    calculatePanelContentSize(panel);
    const panelHeader = panel.querySelector('.panel-header');
    panelHeader.addEventListener('click', () => {
      if (activePanel && activePanel !== panel) {
        activePanel.classList.remove('is-panel-open');
      }
      panel.classList.toggle('is-panel-open');
      activePanel = panel;
    });
  });
});
window.addEventListener('resize', () => {
  accordionGroups.forEach(accordionGroup => {
    calculatePanelSizes(accordionGroup);
  });
});
/******/ })()
;
//# sourceMappingURL=render.js.map
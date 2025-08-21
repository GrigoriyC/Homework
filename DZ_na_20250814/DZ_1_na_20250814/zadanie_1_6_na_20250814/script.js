alert("Задание 6.\n\nСоздать html-страницу с несколькими кнопками.\nПри наведении на кнопку, должна появляться подсказка с текстом. По умолчанию – подсказка появляется сверху от кнопки. Но если она не помещается сверху от кнопки, тогда отображается снизу.\n")

let tooltipElement;

document.onmouseover = function (e) {
  let target = e.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElement = document.createElement("div");
  tooltipElement.className = "tooltip";
  tooltipElement.innerHTML = tooltipHtml;
  document.body.append(tooltipElement);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElement.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElement.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElement.style.left = left + "px";
  tooltipElement.style.top = top + "px";
};

document.onmouseout = function (e) {
  if (tooltipElement) {
    tooltipElement.remove();
    tooltipElement = null;
  }
};

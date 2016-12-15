function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  const main = document.getElementsByTagName('main')[0];
  const firstChild = main.children[3];
  const target = firstChild.getElementsByClassName('target');
  return target[0];
};

function increaseRankBy(n) {
  const list = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(++list[i]);
  }
};

function deepestChild() {
  const list = document.getElementById('grand-node');
  return list;
};

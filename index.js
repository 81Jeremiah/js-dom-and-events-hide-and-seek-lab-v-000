function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lists.length; i++) {
  lists[i].innerHTML = parseInt(lists[i].innerHTML) + n
  }
  return lists;
}

function deepestChild() {
  const node = document.getElementById("grand-node").querySelectorAll("div")
  return node[node.length - 1]
}

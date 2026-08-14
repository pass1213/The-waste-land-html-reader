const list=[
{t:"",a:"",nihao}
{t'nihao'}
]

let i=0;

// 获取页面元素
const t = document.getElementById('t')
const a = document.getElementById('a')
const c = document.getElementById('c')

// 显示函数
function show(){
  let p = list[i]
  t.innerText = p.t
  a.innerText = p.a
  c.innerText = p.c
}

// 按钮
document.getElementById('pre').onclick = function(){
  i = i-1
  if(i<0) i = list.length-1
  show()
}
document.getElementById('nex').onclick = function(){
  i = i+1
  if(i>=list.length) i=0
  show()
}

show() // 一打开就显示

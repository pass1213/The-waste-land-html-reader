const list=[
{t:"静夜思",a:"李白",c:`床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。`},
  {t:"相思",a:"王维",c:`红豆生南国，
春来发几枝。
愿君多采撷，
此物最相思。`}
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

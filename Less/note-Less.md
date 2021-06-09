# Less知识点实践总结

## 我所理解的less的一些好处
	函数式编程css
	自定义变量用于整体主题调整
	嵌套语法简化开发复杂度

## mixin的写法
	.defaultBorder(@width: 10px, @style: solid, @color: red){
	  border: @width @style @color;
	}

## when条件判断函数
	.area(@width) when(@width <= 200px){
	  width: @width;
	  background-color: yellow;
	}
	@media screen and (max-width: 200px){
	  .when{
		.area(100px);
	  }
	}
	@media screen and (min-width: 201px){
	  .when{
		.area(210px);
	  }
	}
	
## loop循环函数，原博说基本不会用，感觉在某些很独特的情况下还是可以用用的
	.widthFun(100);
	 
	.widthFun(@n, @i:10) when (@i <= @n){
	  width-@{i}{
		  width: (@i * 100% / @n);
	  }
	  .widthFun(@n,(@i+10))
	}
---
	**上面这段loop编程成css:**
	width-10 {
	  ·width: 10%;
	}
	width-20 {
	  ·width: 20%;
	}
	width-30 {
	  ·width: 30%;
	}
	width-40 {
	  ·width: 40%;
	}
	width-50 {
	  ·width: 50%;
	}
	width-60 {
	  ·width: 60%;
	}
	width-70 {
	  ·width: 70%;
	}
	width-80 {
	  ·width: 80%;
	}
	width-90 {
	  ·width: 90%;
	}
	width-100 {
	  ·width: 100%;
	}

## 常用的数值计算函数
	//unit()对数值连接单位/去除单位
	width: unit(@num, px);
---
	//round()对数值四舍五入取整数
	width: round(@num);
---
	//ceil()对数值向下取整数
	width: ceil(@num);
---
	//floor()对数值向上取整数
	width: floor(@num);
---
	//percentage()把小数转化为百分比
	width: percentage(@num);
---
	//abs()对数值取绝对值
	width: unit(abs(@num));
---
	//lighten()颜色提亮
	color: lighten(@color, 10%);
---
	//darken()颜色变暗
	background-color: darken(@bgColor, 20%);

## less的匹配模式(原博说类似于函数重载)，此处为原博的示例，方向不同的样式三角形
	.sanjiao(down ,@w: 100px, @c:#ff6600){
	  border-width: @w;
	  border-color: @c transparent transparent transparent;
	  border-style: solid;
	}
	.sanjiao(top ,@w: 100px, @c:#ff6600){
	  border-width: @w;
	  border-color: transparent transparent @c transparent;
	  border-style: solid;
	}
	.sanjiao(left ,@w: 100px, @c:#ff6600){
	  border-width: @w;
	  border-color: transparent  @c  transparent transparent;
	  border-style: solid;
	}
	.sanjiao(right ,@w: 100px, @c:#ff6600){
	  border-width: @w;
	  border-color: transparent transparent transparent @c ;
	  border-style: solid;
	}
	#tranigle{
	  width: 0;
	  height: 0;
	  overflow: hidden;
	  .sanjiao(right)
	}

## less中的论据---直接使用函数默认数值
	.border(@s: solid, @c :#ff6600, @h:10px){
	  border: @arguments;
	}
	
## less中免编译，具体的使用场景就是calc在less中的使用，calc在scss中可以按照css的样式直接去写
	.width{
	  width: calc(300px * 0.3);     //css3中的计算属性 calc
	  width: ~'calc(300px * 0.3)';  //~'XXX'指示less不要编译XXX而是直接把XXX写入css文件中
	}

## less中的!important
	.sss{
	  width: 100px;
	  height: 100px;
	  border: 10px;
	}
	.box{
	  .sss !important; //编译成css后，每个.sss中的属性后面都加上了 !important
	}

## less中的函数们---[参考官网](https://less.bootcss.com/functions/)
	.temp{
	  width: convert(9px, "mm");  //convert()进行长度单位转换 适合游戏场景svg
	}

### 参考文档
[官网](https://less.bootcss.com)</br>
[CSDN博客](https://www.jianshu.com/p/191d1e21f7ed/)


## less中运算符号都会被计算，使用属性一些特殊值的时候会出现一些问题
```
// border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
border-radius: ~"50% 50% 50% 50% / 60% 60% 40% 40%";
```
这个示例是在做egg形状的时候需要用到的属性，如果直接使用`/`会导致`50% / 60% `被计算成为0.8333333%显示在样式中，这样就会出现问题  
所以需要使用转义符来保证这个属性的值原样输出，一开始做的时候没有注意到这点，搜索`less转义符`，看到[这个介绍](https://www.cnblogs.com/96net/p/13879749.html)才反应过来  
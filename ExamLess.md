# Less知识点实践总结

## 说说你所理解的less的相对好处
	自定义主题颜色
	自定义变量用于整体调整
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
	***上面这段loop编程成css:***
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

[参考文档-1](https://less.bootcss.com/functions/)
[参考文档-2](https://www.jianshu.com/p/191d1e21f7ed/)
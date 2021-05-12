# CSS3知识点实践总结
	
## CSS3有哪些新特性？
	新增各种CSS选择器  （: not(.input)：所有 class 不是“input”的节点）
	圆角          （border-radius:8px）
	多列布局      （multi-column layout）
	阴影和反射    （Shadow\Reflect）
	文字特效      （text-shadow、）
	文字渲染      （Text-decoration）
	线性渐变      （gradient）
	旋转          （transform）
	缩放,定位,倾斜,动画,多背景
	
## CSS选择符有哪些？哪些属性可以继承？优先级是怎样的？
	1.id选择器（ # myid）
	2.类选择器（.myclassname）
	3.标签选择器（div, h1, p）
	4.相邻选择器（h1 + p）
	5.子选择器（ul > li）
	6.后代选择器（li a）
	7.通配符选择器（ * ）
	8.属性选择器（a[rel = "external"]）
	9.伪类选择器（a:hover, li:nth-child）
	
	可继承的样式： font-size font-family color, UL LI DL DD DT
	不可继承的样式：border padding margin width height
	
	优先级就近原则，同权重情况下样式定义最近者为准，同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）
	important 比 内联优先级高，载入样式以最后载入的定位为准
	
## CSS3新增伪类有那些？
	p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
	p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
	p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
	p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
	p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
	:after          在元素之前添加内容，也可以用来做清除浮动。
	:before         在元素之后添加内容
	:enabled        页面上可用状态的元素
	:disabled       控制表单控件的禁用状态。
	:checked        单选框或复选框被选中。

## 如何让未知宽高的子元素在未知宽高的父元素当中绝对居中？
	1.直接使用margin：0 auto 水平居中
	2.在已知子元素的宽高情况下可以使用topleft50%之后使用负margin拉回居中
	3.利用transform属性：translate（50%，50%），思路同上但是不需要知道子元素宽高
	4.利用flex的布局，然后使用align-items：center和justify-content：center，但是flex弹性盒子布局需要写大量的兼容
	
## 浮动有什么副作用？请你说一下如何清除浮动？
	还没时间去看一下理解实践一下这个
	
## 请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？
	一个用于页面布局的全新CSS3功能，Flexbox可以把列表放在同一个方向（从上到下排列，从左到右），并让列表能延伸到占用可用的空间
	采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。 它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。
	常规布局是基于块和内联流方向，而Flex布局是基于flex-flow流可以很方便的用来做局中，能对不同屏幕大小自适应。
	flex  flex-direction  justify-content  align-items

## 为什么要初始化CSS样式？
	因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异
	当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化
# mselect 
PC:下拉多选框

<img src="https://github.com/luoxt/mselect/blob/master/demo.png" />

## 使用
 
#### 引入css文件 JS文件 
```html
	<link href="mselect.css" rel="stylesheet" />
	<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="jquery.mselect.js"></script>
```


##### HTML部分
```html
	<input type="text" class="click_box" id="click_box" value="请选择" readonly/>
```
##### 参数
```js
	//下拉选项	
	var eara_option = {
		'000':"全部",
		'001':"北京市(京)",
		'002':"天津市(津)",
		'003':"河北省(冀)",
		....
	};
```
```js
	//默认选中选项
	var eara_str = [
		"001",
		"002"
		...
	]
```
##### 方法
```js
	$(document).ready(function () {
		$("#click_box").mselect(options, eara_str);
	});
```

## DEMO
demo.html

### Lab4 设计文档

------



#### **nav部分**

```
<nav class="navbar navbar-inverse">
   <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
         <li class="active">
```

用了这样的组合方式，形成左上角三个链接横向排列，且Home按键高亮。

```
<ul class="nav navbar-nav nav-pills navbar-right">
   <li role="presentation" class="dropdown">
```

用bootstrap中dropdown的框架，形成右上角my account的图标且下拉有菜单。

------

#### 头图部分

```
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
     <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
     <li data-target="#carousel-example-generic" data-slide-to="1"></li>
     <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>
```

用carousel-inner，listbox的框架，呈现出自动滚动的头图。点击左右箭头，可自动换图。

附页面截图

![](C:\Users\shxjygrace\Desktop\lab4截图1.png)

------

#### 图块

是两行三列的div方阵，用 col-xs-6 col-lg-4 的框架

附页面截图

![](C:\Users\shxjygrace\Desktop\lab4截图2.png)
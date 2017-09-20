window.onload = function () {
    var photo = document.getElementById("photo");
    var items = photo.getElementsByTagName("img");
    var name = document.getElementById("name");
    var links = name.getElementsByTagName("a");
    var rightMenu = document.getElementById("rightMenu");
    var menu1 = rightMenu.getElementsByClassName("menu1");
    var rightMenu2 = rightMenu.getElementsByClassName("rightMenu2");
    var idx = 0;     //下标，用来计算图片的显示或者隐藏
    var len = items.length;
    var stop;     //停止调用showTtem函数
    var stop2;    //停止调用event函数厉的showTtem函数
    var isCircle = false;   //判断鼠标是否进入小圆点，1为进入，0为不进入
    var isDiv = false;  //判断鼠标是否进入图片，1为进入，0为不进入
    var flag = true;   //定时器，5秒内只能触发一次函数
    var isOver = false;   //判断是否触发移出事件
    showItem();
    mouseEven();
    trigger();

    // 设置一张图片显示
    function showItem() {
        hideItems();
        items[idx].style.opacity = 1;
        links[idx].style.backgroundColor = "red";
        if (idx < len-1){
            idx ++;
        }else {
            idx = 0;
        }
        if (isCircle == false && isDiv == false){
            stop = setTimeout(showItem, 5000);
        }
    }

    // 把所有图片设置为透明
    function hideItems() {
        for (var i=0; i<len; i++){
            items[i].style.opacity = 0;
            links[i].style.backgroundColor = "#646464";
        }
    }

    // 事件函数
    function mouseEven() {
        for (var i = 0; i < links.length; i++) {
            links[i].index = i;
            links[i].onmouseover = function () {
                for (var i = 0; i < len; i++) {
                    items[i].style.opacity = 0;
                    links[i].style.backgroundColor = "#646464";
                }
                items[this.index].style.opacity = 1;
                links[this.index].style.backgroundColor = "red";
                idx = this.index;
                isDiv = true;
                if (isCircle == true || isDiv == true){
                    if (isOver == true){
                        clearTimeout(stop2);
                        clearTimeout(stop);
                    }else {
                        clearTimeout(stop);
                    }
                }
            }
            items[i].onmouseover = function () {
                isCircle = true;
                clearTimeout(stop);
            }
            items[i].onmouseout = function () {
                isCircle = false;
                isOver = true;
                if (isCircle == true || isDiv == true){
                    clearTimeout(stop);
                }else {
                    if (flag == true){
                        stop2 = setTimeout(showItem, 5000);
                        flag = false;
                        setTimeout(isflag, 5000);
                    }
                }
            }
            links[i].onmouseout = function () {
                isDiv = false;
            }
        }
    }

    function isflag() {
        flag = true;
    }

    //进入商品分类框时右侧边栏做出效果
    function trigger() {
        for (var i = 0; i < rightMenu2.length; i++) {
            rightMenu2[i].index = i;
            menu1[i].index = i;
            rightMenu2[i].onmouseover = function () {
                for (var i = 0; i < rightMenu2.length; i++) {
                    menu1[i].style.backgroundColor = "#black";
                    menu1[i].style.color = "white";
                }
                menu1[this.index].style.backgroundColor = "white";
                menu1[this.index].style.color = "#FF0036"
            }
            rightMenu2[i].onmouseout = function () {
                menu1[this.index].style.backgroundColor = "black";
                menu1[this.index].style.color = "white";
            }
            menu1[i].onmouseover = function () {
                for (var i = 0; i < menu1.length; i++) {
                    menu1[i].style.backgroundColor = "black";
                    menu1[i].style.color = "white";

                }
                menu1[this.index].style.backgroundColor = "white";
                menu1[this.index].style.color = "#FF0036";
            }
            menu1[i].onmouseout = function () {
                menu1[this.index].style.backgroundColor = "black";
                menu1[this.index].style.color = "white";
            }
        }

    }

}
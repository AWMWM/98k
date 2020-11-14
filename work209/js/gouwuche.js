function show() {

    $.ajax({
        type: "Get",

        url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
        data: {
            id: localStorage.getItem("u-id"),
        },
        async: false,
        success: function(res) {
            console.log(res.data);
            let products = res.data;
            var str = '';
            products.forEach(v => {
                var nums = v.pprice * v.pnum;
                str += `
                <div  li_id="${v.pid}" class="info" >
                <input class="checkboxs" type="checkbox">
                <img src="${v.pimg}" >
                <span class="span1">${v.pname}</span>
                <span class="jiage">${v.pprice}</span>
                <button class="jian">-</button>
                <div class="values">${v.pnum}</div>
                <button class="jia">+</button>
                <span class="xiaoji">0</span>
                <button class="delBtn">
                删除
                </button>
                </div>`

            })
            $('.main').html(str);




        }
    })

}
show();

var jian = document.getElementsByClassName('jian');
var values = document.getElementsByClassName('values');
var jiage = document.getElementsByClassName("jiage");
// console.log(jiage[0].innerText);
var fs = document.getElementsByClassName("fontsize");
var jia = document.getElementsByClassName("jia");
var lid = document.getElementsByClassName("info");
var delBtn = document.getElementsByClassName("delBtn");
var xiaoji = document.getElementsByClassName("xiaoji");
var count = document.getElementsByClassName("count");
console.log(count);
// console.log(jian);

for (let i = 0; i < delBtn.length; i++) {
    $(delBtn[i]).click(function() {
        let si = lid[i].getAttribute("li_id")
        $.ajax({
            type: "Get",
            url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
            data: {
                uid: localStorage.getItem("u-id"),
                pid: si
            },
            async: false,
        })
        show();
    })

}

for (let i = 0; i < delBtn.length; i++) {

    $(jia[i]).click(function() {
        // console.log($(danjia[i]).val());
        // console.log(count[i].innerText)

        // console.log(jiage[i].innerText);

        console.log(count[i].innerText);
        let paid = lid[i].getAttribute("li_id");
        values[i].innerText++;
        let co = jiage[i].innerText * values[i].innerText;
        // console.log(values[i].innerText);
        // let co = count[i].innerText * values.innerText;
        // console.log(values[i].innerText);
        // console.log($(values[i]).text());
        let si = lid[i].getAttribute("li_id")
        $(xiaoji).text(co);
        $(count).text(co);
        localStorage.setItem("fs", co);
        console.log(co);
        $.ajax({
            type: "Get",
            url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
            data: {
                uid: localStorage.getItem("u-id"),
                pid: si,
                pnum: values[i].innerText
            }
        })
    })
}

for (let i = 0; i < delBtn.length; i++) {
    $(jian[i]).click(function() {
        let paid = lid[i].getAttribute("li_id");
        values[i].innerText--;

        let co = jiage[i].innerText * values[i].innerText;

        if (values[i].innerText <= 1) {
            values[i].innerText = 1;
        }
        let si = lid[i].getAttribute("li_id")
        $(count).text(co);
        $(xiaoji).text(co);
        localStorage.setItem("fs", co);

        $.ajax({
            type: "Get",
            url: "http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
            data: {
                uid: localStorage.getItem("u-id"),
                pid: paid,
                pnum: values[i].innerText
            }
        })
    })
}
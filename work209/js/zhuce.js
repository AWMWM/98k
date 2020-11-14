$(".submit").click(function() {
    var zh = $(".text").val();
    var mi = $(".password").val();
    $.ajax({
        url: "http://jx.xuzhixiang.top/ap/api/reg.php",
        type: "GET",
        data: {
            username: $('.text').val(),
            password: $('.password').val()

        },
        success: function(res) {
            // console.log(res);

            // 根据注册响应结果判断，执行不同的数据提示
            if (zh != name && mi != "") {
                //注册成功
                alert("恭喜你！注册成功")

                //注册成功跳转到登录页面
                location.href = "/html/denlu.html";
                localStorage.setItem("id", res);


                localStorage.setItem("name", $(".text").val());
                localStorage.setItem("password", $(".password").val());

                localStorage.setItem("endTime", new Date().getTime() + 20 * 1000);

            } else {
                //注册失败
                alert("注册失败")
            }

        }
    })
})

// ajax账户重复
// $('.text').blur(function() {
//     $.ajax({
//         url: "http://jx.xuzhixiang.top/ap/api/reg.php",
//         type: "GET",
//         data: {
//             name: $('.text').val(),
//         },
//         success: function(res) {
//             //根据注册响应结果判断，执行不同的数据提示
//             if (res.msg === "用户名已经存在") {

//                 // $(".yzsjh").replaceWith("<p class='yzsjh'>手机号被注册</p>").removeClass('off');

//                 // console.log(name);
//                 // alert("用户已注册")

//             }
//         }
//     })
// }
// )
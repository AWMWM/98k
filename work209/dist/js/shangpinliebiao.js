//拿到商品
$.ajax({
    type: "Get",
    url: 'http://jx.xuzhixiang.top/ap/api/productlist.php?pagesize=12',
    data: {
        uid: 10096
    },
    success: function(res) {
        console.log(res.data)
        let html = ''
        res.data.forEach(v => {
            html += `<div id="list_1">
                <img src="${v.pimg}" alt="">
                <span>${v.pname}</span>
                <span>${v.pprice}</span>
<<<<<<< HEAD
                <a href="../html/xiangqing.html?product_id=${v.pid}"><button>详细信息</button></a>
            </div>`

        })

        $('#container_main').html(html);

    }


})

//存到地址栏
=======
                <a href="gouwuche.html"><button>加入购物车</button></a>
            </div>`

        })
        $('#container_main').html(html)
    }
})
>>>>>>> a106c478dc8a2831a657b45ae42e71dbf8673c3b

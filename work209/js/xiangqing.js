  $.ajax({

      url: 'http://jx.xuzhixiang.top/ap/api/detail.php',
      data: {
          id: location.search.split('=')[1],

      },

      success: function(res) {
          console.log(res.data);
          let html = '';

          html += `
                    <div id="main_left">  
                    <img src="${res.data.pimg}" alt="">
                                </div>
                    <div id="main_right">
                        <ul>
                            <span>${res.data.pname}</span>
                            <span>￥</span>
                            <span>${res.data.pprice}</span>
                            <button id="ttt" runat="server">加入购物车</button>
                        </ul>
                      
                    
                    </div>`


          $('.main').html(html);
      }

  });

  $(document).click(function(e) {
      var id = $(e.target).attr("id");
      console.log(id);
      $("#ttt").click(function() {
          alert("添加成功");
          $.ajax({
              type: "get",
              url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
              data: {
                  uid: localStorage.getItem("u-id"),
                  pid: location.search.split('=')[1],
                  pnum: 1,
              }
          })
          location.href = "gouwuche.html";
      });
  })

  //   $("#ttt").click(function() {
  //       alert("添加成功");
  //       $.ajax({
  //           type: "get",
  //           url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
  //           data: {
  //               uid: localStorage.getItem("u-id"),
  //               pid: location.search.split('=')[1],
  //               pnum: 1,
  //           }
  //       })
  //       location.href = "gouwuche.html";
  //   });
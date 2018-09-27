//'use strict';
// const cheerio=require('cheerio');
module.exports = app => {
    class TestController extends app.Controller {
        async getbaidu(){
            // const result = await this.ctx.curl('https://www.toutiao.com/search_content/?offset=0&format=json&keyword=%E5%B0%8F%E5%A7%90%E5%A7%90&autoload=true&count=20&cur_tab=1&from=search_tab', {
            //     // 必须指定 method
            //     method: 'GET',
            //
            //     // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            //     dataType: 'json',
            //     timeout: 30000,
            // });
            // console.log(result);
            // var $=cheerio.load(result);//用cheerio解析页面数据
            // var arr=[];
            //
            // $(".ulist.focuslistnews").each(function(index,element){//下面类似于jquery的操作，前端的小伙伴们肯定很熟悉啦
            //     var $eleItem=$(element).find('.bold-item a');
            //     var $eleItemSon=$(element).find('.bold-item ~ li a')
            //     arr.push(
            //         {
            //             title: $eleItem.text(),
            //             href: $eleItem.attr('href'),
            //             item:{
            //                 title: $eleItemSon.text(),
            //                 href: $eleItemSon.attr('href')
            //             }
            //         }
            //     );
            // });
         
            this.ctx.body = {
                success:true,
                data:{
                    name:'qiuxia'
                }

            }
        }
    }
  
    return TestController;
  };
    
    $(function(){

    //监听modal
        imgUploadInit();
    });
    
function imgUploadInit(){
    var key_name;
    var imgdom='<div class="uploadedimg" style="background-image:url()"></div>';
    var imgUploadInit = new Qiniu.uploader({
            runtimes: 'html5,flash,html4',    //上传模式,依次退化
            browse_button: 'uploadBtn',       //上传选择的点选按钮，**必需**
            uptoken_url: '/product/config/getUploadToken',
            domain: 'http://insightprivate.qiniudn.com',
        //bucket 域名，下载资源时用到，**必需**
            container:  document.getElementById('uploadBtn'),           //上传区域DOM ID，默认是browser_button的父元素，
            max_file_size: '1000kb',           //最大文件体积限制
            //flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
            max_retries: 3,                   //上传失败最大重试次数
            dragdrop:true,                   //开启可拖曳上传
            drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
            chunk_size: '4mb',                //分块上传时，每片的体积
            auto_start: true, 
            filters : {
            mime_types: [
                {title : "Image files", extensions : "jpg,gif,png"},
                    ]
            },                //选择文件后自动上传，若关闭需要自己绑定事件触发上传
            init: {},
            PostInit: function() {
                    
                
            },

            'FilesAdded': function(up, files) {
                plupload.each(files, function(file) {
                // 文件添加进队列后,处理相关的事情
                $(".imageContainer").append(imgdom);
                
                });
            },
            'BeforeUpload': function(up, file) {
               // 每个文件上传前,处理相关的事情
                
            },
            'UploadProgress': function(up, file) {
               // 每个文件上传时,处理相关的事情
                
            },
            'FileUploaded': function(up, file, info) {
           
                $.ajax({
                type: "POST",
                url: "/product/config/getUrl",
                data: {
                    hash: key_name,
                }, //
                dataType: "json",
                success:function(data){
                    var img_url = data.url;
               
                },
                error:function(){
                    alert("不好意思，出错了，请重新上传，或者联系刚刚");
                    }          
                });//ajax
               
            },
            'Error': function(up, err, errTip) {
                   //上传出错时,处理相关的事情
                   alert("不好意思，出错了，请重新上传，或者联系刚刚");
            },
            'UploadComplete': function() {
                   //队列文件处理完毕后,处理相关的事情
                    // this.destroy();
            },
            'Key': function(up, file) {
                // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                var myDate = new Date();
                var timestamp_ = myDate.getFullYear().toString()+(myDate.getMonth()+1).toString()+myDate.getDate().toString()+myDate.getHours().toString()+myDate.getMinutes().toString()+myDate.getSeconds().toString()+myDate.getMilliseconds().toString();
                var key_mini = "/test/ablum/"+timestamp_;
                key_name = key_mini;
                return key_mini;
            },
            'Destroy':function(up){
            // alert("d_succ");
            }
    
    });//uploader 
} //缩略图上传初始化


function big_img_var(){
        var key_name;
        var flag_src = 0;
        var uploader = new Qiniu.uploader({
            runtimes: 'html5,flash,html4',    //上传模式,依次退化
            browse_button: 'input_file',       //上传选择的点选按钮，**必需**
            uptoken_url: '/product/config/getUploadToken',
        //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
            //uptoken : '<Your upload token>',
        //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
    // unique_names: true,
        // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
    // save_key: true,
        // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
            domain: 'http://insightprivate.qiniudn.com',
        //bucket 域名，下载资源时用到，**必需**
            container:  document.getElementById('container_picture'),           //上传区域DOM ID，默认是browser_button的父元素，
            max_file_size: '500kb',           //最大文件体积限制
            //flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
            max_retries: 3,                   //上传失败最大重试次数
            dragdrop:false,                   //开启可拖曳上传
            drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
            chunk_size: '4mb',                //分块上传时，每片的体积
            auto_start: true, 
            filters : {
            mime_types: [
                {title : "Image files", extensions : "jpg,gif,png"},
                    ]
            },                //选择文件后自动上传，若关闭需要自己绑定事件触发上传
            init: {
        PostInit: function() {
            $('#myModal_editor').on('shown.bs.modal', function () {
            // uploader_mini = null;
            // uploader = null;
             //big_img_var();
            uploader.destroy();
            })
        },
        'FilesAdded': function(up, files) {
            plupload.each(files, function(file) {
                // 文件添加进队列后,处理相关的事情
            });
        },
        'BeforeUpload': function(up, file) {
               // 每个文件上传前,处理相关的事情
            $("#myModal_percent").modal("show");
        },
        'UploadProgress': function(up, file) {
               // 每个文件上传时,处理相关的事情
            $("#progress_percent").attr("aria-valuenow",file.percent).css("width",file.percent+"%");
            document.getElementById("progress_percent").innerHTML = ""+file.percent+"%";

            //$(".percent_container").innerHTML= '<span>' + file.percent + "%</span>";

        },
        'FileUploaded': function(up, file, info) {
               // 每个文件上传成功后,处理相关的事情
               // 其中 info 是文件上传成功后，服务端返回的json，形式如
               // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
               //var domain = up.getOption('domain');
               //var res = parseJSON(info);
               //var sourceLink = domain + res.key; 获取上传成功后的文件的Url
            
            $.ajax({
            type: "POST",
            url: "/product/config/getUrl",
            data: {
                hash: key_name,
            }, //
            dataType: "json",
            success:function(data){
                var img_url = data.url;
                for (i=1;i<4;i++)
                {
                    var flag = $("#img_"+i+"").attr("src");
                    if (flag == "" || flag == null)
                    {
                        $("#img_"+i+"").attr("src",img_url);
                        $("#img_"+i+"").css("display","block");
                        $("#pic_"+i+"").val(key_name);
                        
                        if(i==3)
                        {
                            $("#input_file").addClass('input_disable');
                        }
                        else
                        {
                            $("#input_file").removeClass('input_disable');
                        }  
                        i=5;

                    }
                    
                }
            },
            error:function(){
                alert("不好意思，出错了，请重新上传，或者联系刚刚");
                }
            
            });//ajax
            $("#myModal_percent").modal("hide");

        },
        'Error': function(up, err, errTip) {
               //上传出错时,处理相关的事情
               // alert("不好意思，出错了，请重新上传，或者联系刚刚");
               alert(errTip);
        },
        'UploadComplete': function() {

        },
        'Key': function(up, file) {
            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
            // 该配置必须要在 unique_names: false , save_key: false 时才生效
            var myDate = new Date();
            var timestamp_ = myDate.getFullYear().toString()+(myDate.getMonth()+1).toString()+myDate.getDate().toString()+myDate.getHours().toString()+myDate.getMinutes().toString()+myDate.getSeconds().toString()+myDate.getMilliseconds().toString();
            var key = "/default/standard/product/"+timestamp_;
            // do something with key here
            key_name = key;
            return key;
        },
        'Destroy':function(up){
        },
    }
});//uploader

}; 
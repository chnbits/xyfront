tinymce.PluginManager.add('editor135', function(editor, url) {
    var iframe1 = 'https://www.135editor.com/simple_editor.html?callback=true&appkey=';
    var openDialog = function () {
      return editor.windowManager.openUrl({
        title: '135编辑器',
        url: iframe1,
        size: 'large',
      });
    };

    // 接收135传来的数据
    window.addEventListener('message', function (event) {
        console.log('接收到来自135页面的数据');
        if (typeof event.data !== 'string') {
            if(event.data.ready) {
                console.log('135加载完成');
                // 获取135实例
                var editor135 = document.querySelector("iframe[src='https://www.135editor.com/simple_editor.html?callback=true&appkey=']");
                console.log('editor135', editor135) 
                editor135.contentWindow.postMessage(editor.getContent(),'*');
            }
            return;
        };
        editor.setContent(event.data); // 将135传递回来的内覆盖掉tinymce原来的内容
        editor.close();
    }, false);
    
    // 注册一个工具栏按钮名称
    editor.ui.registry.addButton('editor135', {
      text: '135',
      onAction: function () {
        openDialog();
      }
    });
  
    // 注册一个菜单项名称 menu/menubar
    editor.ui.registry.addMenuItem('editor135', {
      text: '135编辑器',
      onAction: function() {
        openDialog();
      }
    });
  
    return {
      getMetadata: function () {
        return  {
          // 插件名和链接会显示在“帮助”→“插件”→“已安装的插件”中
          name: "135编辑器",//插件名称
          url: "http://jiangruyi.com", //作者网址
        };
      }
    };
  });
tinymce.PluginManager.add('imagealbum', function(editor, url) {
    var openDialog = function () {
        editor.settings.openImageAlbum(editor);
    };

    editor.ui.registry.getAll().icons.imagealbum || editor.ui.registry.addIcon('imagealbum','<svg t="1609994112050" width="24" height="24" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21982" width="200" height="200"><path d="M753.7 750H158.4c-52.1 0-94.4-43.9-94.4-98V260c0-54.1 42.3-98 94.4-98h595.3c52.1 0 94.4 43.9 94.4 98v392c-0.1 54.1-42.3 98-94.4 98zM310.8 220.8c-40.1 0-72.6 32.9-72.6 73.5s32.5 73.5 72.6 73.5c40.1 0 72.6-32.9 72.6-73.5s-32.5-73.5-72.6-73.5z m479.1 139.1c0-28.1-13.6-55.7-51.4-51-37.7 4.8-154.1 163.8-256.9 254.8-59.5-42.3-136.4-90.4-154.1-101.9-17-11.1-28.9-25-51.4 0 0 0-150.9 150.5-154.1 178.4-3.2 27.9 23 51 51.4 51h565.1c28.4 0 51.4-22.8 51.4-51V359.9z" fill="#0A122D" p-id="21983"></path><path d="M848 862H288c-52.1 0-95.5-7.8-108-56h640c61.9 0 84-22.1 84-84V277.9c48.2 12.5 56 55.9 56 108.1v364c0 61.9-50.1 112-112 112z" fill="#0A122D" p-id="21984"></path></svg>');
    
    // 注册一个工具栏按钮名称
    editor.ui.registry.addButton('imagealbum', {
      // text: '相册',
      icon: 'imagealbum',
      tooltip: '打开相册选择图片',
      onAction: function () {
        openDialog();
      }
    });
  
    // 注册一个菜单项名称 menu/menubar
    editor.ui.registry.addMenuItem('imagealbum', {
      text: '相册',
      icon: 'imagealbum',
      onAction: function() {
        openDialog();
      }
    });
  
    return {
      getMetadata: function () {
        return  {
          // 插件名和链接会显示在“帮助”→“插件”→“已安装的插件”中
          name: "相册",//插件名称
          url: "https://jiangruyi.com", //作者网址
        };
      }
    };
  });

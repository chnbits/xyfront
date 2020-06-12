<?php
// 自动部署脚本，可以用于git的webhook实现推送代码后自动部署
// 请执行以下两条命令
// touch /etc/sudoers.d/www.conf
// echo "www-data ALL=(root) NOPASSWD: /usr/bin/git" >> /etc/sudoers.d/www.conf
exec('cd ' . dirname(__FILE__) . '&&sudo git pull 2>&1', $res, $rc);
if ($rc == 0) {
    echo '部署成功<br>';
} else {
    echo '部署失败<br>';
}
echo '<pre>';
var_dump($res);
echo '</pre>';

echo '提交记录：<pre>';
exec('cd ' . dirname(__FILE__) . '&&sudo git log -5 2>&1', $res1, $rc);
var_dump($res1);
echo '</pre>';

?>
<?php
    /*取输入框的值*/
    $name=$_POST['name'];
    $passwd=$_POST['passwd'];
	/*向页面输出 PHP获取的用户名 和 密码*/
    echo"用户名：$name<br>";
    echo"密码：$passwd";
    /*连接数据库*/
    $ip=mysqli_connect('123456','text');
    $cmd="insert into text(name ,passwd) values('$name','$passwd');";
    mysqli_query($ip,$cmd);

?>
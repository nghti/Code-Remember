<?php
    //cho biet thoi
    //echo phpinfo(); //thôn tin php
    
    /* xem thông tin */
    $file = $_SERVER['SCRIPT_FILENAME'];
    $user = $_SERVER['HTTP_USER_AGENT'];
    $server = $_SERVER['SERVER_SOFTWARE'];  
?>

<?php
    // biến variables
    $var = 15;
    echo $var;
    ?>
    <br/>
    <?php
    /*chuoi string*/
    $string = "Trinh Hoang Tu";
    echo strlen($string); //in chuỗi => số
    echo strtoupper($string); //in chuỗi => hoa
    echo strtolower($string); //in chuỗi => thường
    echo ucfirst($string); //in hoa chỉ chữ đầu
    echo ucwords($string); //in hoa tất cả chữ đầu
    echo str_replace('Quen', 'Tu', $string); //thây thế chuỗi
    /*sử dụng hằng số => không muốn thay đổi*/
    define('USERNAME', 'Hoang Tu');      
    echo "Hello, " . USERNAME;
    /*mảng array*/
    $myArray = array(34, 39, 56, 67, 76, 
        array('a'=>'apple', 'b'=>'banana', 'c'=>'coconut')); 
    echo $myArray[5]['b'];
    echo " co' {$myArray[0]} {$myArray[5][a]}";
    
    echo count($myArray); 
    echo max($myArray);
    echo min($myArray);
    
    sort($myArray); //in nhỏ => lớn
    echo "<pre>";
        print_r($myArray);
    echo "</pre>";
    
    rsort($myArray); //in lớn => nhỏ
    echo "<pre>";
        print_r($myArray);
    echo "</pre>";
    
    echo implode('*', $myArray); //Implode:
    $myEmails = 'izwebz@yahoo.com, admin@yahoo.com, support@izwebz.com';
    $split = explode(',', $myEmails); //Explode:
    $last = end($split);// lay cuối cùng
    echo $last;
    /* mang_2*/
    $myEmails[] = 'nghti8020@gmail.com'; // thêm array         
    array_splice($myArray, 3, 0, 'oop');        
    unset($myArray[5]); // xóa array      
    array_splice($myArray,3 ,2);
    //ghép 2 array
    $merged = array_merge($myArray, $array);
    print_r($array + $myArray);
    //kiểm tra
    if(in_array('csss', $myArray)){
        echo "yes, it in array";
    }
    // hiển thị ngẩu nhiên tất cả array
    shuffle($myArray);
    // hiển thị ngẩu nhiên 1 array
    $rand = array_rand($myArray);
    print_r($myArray[$rand]);
    // viết hoa... khi chay qua array
    $viet_hoa = array_map('ucfirst', $array);
    foreach($viet_hoa as $hoa) {
    echo "<li>{$hoa}</li>";
    }
    /*number*/
    $num = 3.14;
    echo round($num, 1)."<br />"; //3.1
    echo ceil($num)."<br />"; //4
    echo floor($num)."<br />"; //3
    echo rand()."<br />"; //tất cả số ngẩu nhiên
    echo rand(1,100)."<br />"; //1=>100 số ngẩu nhiên
    $float = 30456;
    echo number_format($float, 3)."<br />"; //30,456,000
    /*range min => max*/
    $ngay = range(1 ,31);
?>

<?php
    /*su dung if*/
    if(isset($_POST['submit'])){
        //Kiem tra su ton tai, su dung if
        if($_POST['gender'] == 'nu'){
            echo "chao chi";
        }elseif($_POST['gender'] == 'nam'){
            echo "chao anh";
        }else{
            echo "chao bn hehe!";
        }
        //or        
        echo ($_POST['gender']=='nu') ? "chao chi" : "chao anh";
    }
    /*su dung switch*/
    $user_lever = 10;
    switch ($user_lever) {
        case 1:
        echo "<li><a href=''>User</a></li>";
        break;
        
        //...
        
        default:
        echo "<li><a href=''>never</a></li>";
        break;
    }
    /*vong lap for*/
    for($i=1; $i<=8; $i++){
        echo "<li><a href='{$i}'>{$i}</a></li>";
    }
    /*vong lap while*/
    $count = 0;
    while($count <= 10){
        // co the long if vao trong
        if($count == 7){
            echo "...";
        }else{
        echo "<li><a href='{$count}'>{$count}</a></li>";
        }//end if
        $count++;
    }// End while
    /*vong lap foreach*/
    $names = array('hoangtu', 'tin', 'thang', 'tho', 45, 82);
    foreach ($names as $name){
        echo $name . "<br />";
    }
    
    foreach ($names as $key => $value) {
        echo $key . " " . $value . "<br />";
    }      
?>

<?php
    /*tao function*/
    function xin_chao($name) {
        echo "xin chao, $name!";
    }
    xin_chao("chi nga");
    /*tao function de loc*/
    $chuthuong = "day la mot doan chu thuong";
    function strong($txt){
        echo "<strong>{$txt}</strong>";
    }
    echo $chuthuong . "<br />";
    strong($chuthuong);
    /*return de ket thuc 1 gt*/
    return $chuthuong;
    /*return ve nhieu gt*/
    function cong_tru($x, $y){
        $tong = $x + $y;
        $hieu = $x - $y;
        $dap_so = array($tong, $hieu);
        return $dap_so;
    }
    $total = cong_tru(8 ,5);
    echo "Tong so: $total[0] <br />";
    echo "hieu so: $total[1] <br />";
        //or
    list($tong, $hieu) = cong_tru(8, 5);
    echo "Tong so: $tong <br />";
    echo "hieu so: $hieu <br />";
    /*bien toan cuc*/
    $var = "toi nam ngoai function";
    function scope($var){
        // lay $var ngoai cho vao trong sd global
        //global $var;
        $var = "toi nam trong function";
        return $var;
    }
    echo scope($var) . '<br />'; //toi nam trong function
    echo $var; //toi nam ngoai function
?>

<?php
    /*post trong if*/
    $ngay = $_POST['ngay'];
    echo "hom nay {$ngay}";
    //trong form thi => name="ngay"
    /*get tu 1 trang*/
    ?>
    <a href="$_get.php?id=1&name=tu">go go go!</a>
    <?php
    //chuyen sang trang #
    $id = $_GET['id'];
    $name = $_GET['name'];
    echo $id . $name;// 1tu
    /*tu 1 trang co bao ve*/
    ?>
    <a href="<?php echo rawurlencode('encode-2.php'); ?>?name=<?php echo urlencode('tu nghti'); ?>">
    <?php echo htmlentities('<script>url encode</script>'); ?></a><br />
    <?php
    //wa trang #
    $name = $_GET['name'];
    echo $name;
    /*luu session*/
    session_start();
    //del session
    session_destroy();
    /*header phai dat tren nhu session ko thi them*/
    ob_start();
    //tren cung
    header("Location: cookies.php");
    //duoi cung
    ob_end_flush();
    /*include */
    //loi -> van hien
    include('include.inc.php');
    //loi -> ko chay
    require('include.inc.php');
    //ko chay 2 lan
    require_once('include.inc.php');   
?>
	// tao box yes/ no
	onclick="return confirm('Ban chac khong');

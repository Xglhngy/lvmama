<?php
    require "../inc/dbconn.php";
    // header("content-type:text/html;charset=utf8");
    $sql="select * from rexiao order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from dujia order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from ximpin order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from cz_kh order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from cz_sh order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from cz_xm order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from xs_loeve order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from xs_ecclu order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from xs_what order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from gj_hot order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from gj_exclu order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from gj_what order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from ns_hot order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from ns_exclu order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from ns_what order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from xy_hot order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from xy_exclu order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from xy_what order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from mf_hot order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from mf_exclu order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    $sql="select * from mf_what order by id";
    $result =$conn->query($sql);
    while($row=mysqli_fetch_assoc($result)){
        $rows[]=$row;
    }
    echo json_encode($rows);
?>
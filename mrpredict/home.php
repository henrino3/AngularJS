<?php
include'app.php';

/*print_r($data);
print_r($data->caption);*/
?>


<!DOCTYPE html>
<html ng-app="mrPredict">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title>Mr Predict</title>

   <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-theme.css" rel="stylesheet">
   <!--  <link href="css/style.css" rel="stylesheet"> -->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">


  </head>

  <body ng-controller="AppController" style="background:#fff">

<?php
        echo $data->caption;
?>
     <?php foreach ($data as $a){ 
    //  var_dump($a);
      if(isset($a->fixtures->href)){
       echo $a->fixtures->href;
      }
      }


             ?>
     </ul>
  </body>

<!-- 
  http://mrpredict.com:2082/cpsess9135321398/frontend/paper_lantern/filemanager/index.html?dirselect=webroot&domainselect=mrpredict.com&dir=%2Fhome%2Fmrpredic%2Fpublic_html -->
</html>

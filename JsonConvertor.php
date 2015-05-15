<?php
/**
 * Created by PhpStorm.
 * User: Julian
 * Date: 10/11/14
 * Time: 5:43 PM
 */

class JsonConvertor
{



   public function __construct()
   {

   }



}



//$filename = "dataset/weekend.csv";
//
//if($filename != null)
//{
//    if (($handle = fopen($filename, "r")) !== FALSE)
//    {
//        fgetcsv($handle, 1000, ",");
//        echo "var chartData = [";
//        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE)
//        {
//            $num = count($data);
//            $name = $data[0];
//            $population = $data[1];
//
//            echo "{";
//            echo "\"country\"".":\"".$name."\",";
//            echo "\"visits\"".":\"".$population."\"";
//            echo "},";
//
//        }
//        echo "];";
//
//        fclose($handle);
//    }
//}


$filename = "dataset/prediction.csv";

$zones = array();

if($filename != null)
{
    if (($handle = fopen($filename, "r")) !== FALSE)
    {
        fgetcsv($handle, 1000, ",");
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE)
        {

           // echo $data[0];
            $zone = array();
            $zone['zoneNumber'] = $data[0];
            $zone['vkt'] = $data[2];
            $zone['weeklyIncome'] = $data[3];
            $zone['bike'] = $data[4];
            $zone['resident'] = $data[5];
            $zone['commercial'] = $data[6];
            $zone['mixIndex'] = $data[7];

            $zones[$zone['zoneNumber']] = $zone;
        }

        echo json_encode($zones,JSON_FORCE_OBJECT);

        fclose($handle);
    }
}







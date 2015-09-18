<?php

$api_url = 'http://api.football-data.org/alpha/soccerseasons/351';

$jsons = file_get_contents($api_url); // returns JSON
        $data=json_decode($jsons);

        return $data;

        ?>
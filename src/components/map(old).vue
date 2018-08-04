<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                    <v-card>
                        <!-- <div id="map" style="width:400px;height:400px;background:yellow"></div> -->
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047218.2298541768!2d78.46090439788068!3d7.857177635330965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri+Lanka!5e0!3m2!1sen!2slk!4v1531573489005" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    function initMap() {
        var myLatLng = {lat: 6.927079, lng: 79.861244};

        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}
</script>

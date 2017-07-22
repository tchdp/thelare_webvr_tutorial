var onViewLoad = function() {
  var vrViewOne = new VRView.Player('#vrview-one', {
    image: 'https://i.imgur.com/L9FeGZI.jpg',
  });

  var vrViewTwo = new VRView.Player('#vrview-two', {
    image: 'http://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/room-2.jpg',
  });

  var vrViewThree = new VRView.Player('#vrview-three', {
    image: 'http://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/room-5.jpg',
  });

  vrView.addHotspot('dining-room', {
    pitch: 30, // In degrees. Up is positive.
    yaw: 20, // In degrees. To the right is positive.
    radius: 0.05, // Radius of the circular target in meters.
    distance: 2, // Distance of target from camera in meters.
  });

  vrViewTwo.on('click', function(event) {
    if (event.id == 'dining-room') {
      // Handle hotspot click.
    }
  });

  alert('hello!!');
}

window.addEventListener('load', onViewLoad);

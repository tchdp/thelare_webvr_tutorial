var vrHomePage = vRViewPlayer('#vr-homepage', {
    image: '../IMG_20170729_155953.vr.jpg',
    is_stereo: false,
    is_autopan_off: true,
});

// when you're ready
var setReadyEvents = function(event) {
  vrHomePage.addHotspot('this-is-a-hotspot-name', {
    pitch: 0,
    yaw: 0,
    radius: 0.05,
    distance: 1
  });

  // add second hotspot
  vrHomePage.addHotspot('this-is-another-hotspot', {
    pitch: 0,
    yaw: 10,
    radius: 0.05,
    distance: 1
  });
};

vrHomePage.on('ready', setReadyEvents());

// when you click
vrHomePage.on('click', function(event) {
  // if you are hotspot named 'this-is-a-hotspot-name', print alert
  if (event.id == 'this-is-a-hotspot-name') {
    alert('I CLICKED!');
  }

  // if you are a hotspot named 'this-is-another-hotspot', set new picture
  if (event.id == 'this-is-another-hotspot') {
    vrHomePage.setContent({
      image: 'assets/dolphins.jpg',
      is_stereo: true,
      is_autopan_off: true,
    });
  }
});

vrHomePage.on('error', function(event) {
  console.log('there was an error', event);
});

// every time you load 'vr-picture-1' you will call the function vrViewPlayer
window.addEventListener('load', vrHomePage);

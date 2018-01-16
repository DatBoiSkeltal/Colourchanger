function huedisplay() {
  var hue = document.getElementById('hue').value;
  document.getElementById('hue-value').innerHTML = hue;

  var sat = document.getElementById('saturation').value;
  document.getElementById('sat-value').innerHTML = sat;

  var light = document.getElementById('lightness').value;
  document.getElementById('light-value').innerHTML = light;


  document.getElementsByTagName('BODY')[0].style.backgroundColor = hsl;
  var displaytest = JSON.stringify(hsl(hue,sat,light));
  document.getElementById('test').innerHTML = displaytest;
}

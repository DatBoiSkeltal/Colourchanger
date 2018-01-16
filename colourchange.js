function huedisplay() {
  var hue = document.getElementById('hue').value;


  var sat = document.getElementById('saturation').value + '%';


  var light = document.getElementById('lightness').value + '%';



  var hsl = {hue: hue, sat: sat, light};
  var color = "hsl" + "(" + hsl.hue + "," + hsl.sat + "," + hsl.light + ")";
  document.getElementsByTagName('BODY')[0].style.backgroundColor = color;

}

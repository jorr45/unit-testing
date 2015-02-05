var App = {
   triangleExists: function() {
      try{
        if (arguments.length<3 || arguments.length>3) return false;
	var a = parseFloat(arguments[0]);
	var b = parseFloat(arguments[1]);
	var c = parseFloat(arguments[2]);
        if (a < b+c && b<c+a && c<a+b) return true;
	else return false;
      }
      catch (err){
	return false;
      }
   },
   triangleType: function() {
      if (arguments.length>3 | arguments.length<3) throw "Triangle does not exist.";
      var a = (arguments[0]);
	var b = (arguments[1]);
	var c = (arguments[2]);
      if (!App.triangleExists(a, b, c)){
	throw "Triangle does not exist.";
      }
      //find max
      var max=a;
      var s1=b;
      var s2=c;
      if (b>max) {
	max=b;
	s1=a;
	s2=c;
      }
      if (c>max) {
	max=c;
	s1=b;
	s2=a;
      }
      if (max*max>s1*s1+s2*s2) return "obtuse";
      if (max*max==s1*s1+s2*s2) return "right";
      if (max*max<s1*s1+s2*s2) return "acute";
   }
};

QUnit.test('triangleExists', function (assert) {
    assert.strictEqual(App.triangleExists(), false, 'Too few parameters');
    assert.strictEqual(App.triangleExists(4,6,7,8), false, 'Too many parameters');
    assert.strictEqual(App.triangleExists(3, 2, 4), true, 'Ordinary triangle');
    assert.strictEqual(App.triangleExists(3, 1, 2), false, 'Sum of two sides equals third');
    assert.strictEqual(App.triangleExists(1, 1, 5), false, 'Sum of two sides less than third');
    assert.strictEqual(App.triangleExists("hi", 1, 5), false, 'Sum of two sides less than third');
});
 
QUnit.test('triangleType', function (assert) {
    assert.strictEqual(App.triangleType(2,2,2), "acute", 'equilateral triangles are acute');
    assert.strictEqual(App.triangleType(3,4,5), "right", 'right triangle');
    assert.strictEqual(App.triangleType(3,4,6), "obtuse", 'obtuse triangle');
    assert.throws(function () {
        App.triangleType(3,1,2);
    },
    'Triangle does not exist');
});





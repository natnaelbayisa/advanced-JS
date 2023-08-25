for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("i is " + i);
  }, i + 5000);
}

//closure
function outerFunction() {
  var fooBar = "Hey there";

  function logFooBar() {
    console.log(fooBar);
  }

  return logFooBar();
}

function otherFunction() {
  outerFunction();
}

otherFunction();

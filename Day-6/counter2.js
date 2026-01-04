function counter() {
  let count = 0;

  function time() {
    console.log(count);
    count++;

    setTimeout(time, 1000); // call again after 1 second
  }

  time(); // start the counter
}

counter();

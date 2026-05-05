stop = false;

for (let index = 10; stop != true; index--) {
    console.log(index);
    if (index == 0) {
        console.log('Lancar!');
        stop = true;
    }
}
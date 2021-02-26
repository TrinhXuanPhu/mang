let array = [4, -2, 5, 4, 0, 20, 10];
max = array[0];
for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }

}
document.write('max=' + max);
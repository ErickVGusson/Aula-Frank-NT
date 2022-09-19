b = 0 

function slideshow() {
    switch (b) {
        case 0: foto.src = "1.jpg";
            break;
        case 1: foto.src = "2.jpg";
            break;
        case 2: foto.src = "3.jpg";
            break;
        case 3: foto.src = "4.jpg";
            break;
        case 4: foto.src = "5.jpg";
            b = -1;
    }
    b++
}
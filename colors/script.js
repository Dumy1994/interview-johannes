let colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

// sezione 1 retangles 5 
let rectangles5 = document.getElementById("retangles5");
for(let i = 0; i <= 4; i++){
    let retangleFive = document.createElement("div");
    retangleFive.className= 'retangle-first-section '
    retangleFive.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    retangles5.appendChild(retangleFive);
    // make 4 retangles
    for (let i = 0; i <= 3; i++) {
        let retangleInside = document.createElement('div');
        retangleInside.className = 'retangle-second-section';
        retangleInside.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        retangleInside.style.display = 'none'
        retangleFive.appendChild(retangleInside);
        // show div
        retangleFive.addEventListener('click', function () {
            retangleInside.style.display = 'block';
        }); 
        for (let i = 0; i <= 3; i++) {
            let retangleInsideTwo = document.createElement('div');
            retangleInsideTwo.className = 'retangle-second-section';
            retangleInsideTwo.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            retangleInsideTwo.style.display = 'none'
            retangleInside.appendChild(retangleInsideTwo);
            // show div
            retangleInside.addEventListener('click', function () {
                retangleInsideTwo.style.display = 'block';
            }); 
        }
    }
}

// sezione 2 retangles 4
let retangles4 = document.getElementById("retangles4")
for( let i = 0; i <= 3; i++){
    let retangleFour = document.createElement("div");
    retangleFour.className= 'retangle-second-section'
    retangleFour.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    retangles4.appendChild(retangleFour);
    // make 4 retangles
    for (let i = 0; i <= 3; i++) {
        let retangleInside = document.createElement('div');
        retangleInside.className = 'retangle-second-section';
        retangleInside.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        retangleInside.style.display = 'none'
        retangleFour.appendChild(retangleInside);
        // show div
        retangleFour.addEventListener('click', function () {
            retangleInside.style.display = 'block';
        }); 
    
        for (let i = 0; i <= 3; i++) {
            let retangleInsideTwo = document.createElement('div');
            retangleInsideTwo.className = 'retangle-second-section';
            retangleInsideTwo.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            retangleInsideTwo.style.display = 'none'
            retangleInside.appendChild(retangleInsideTwo);
            // show div
            retangleInside.addEventListener('click', function () {
                retangleInsideTwo.style.display = 'block';
            }); 
        }
    }
}

// sezione 3 retangles 25 
let retangles25 = document.getElementById("retangles25")
for (let i = 0; i <= 24; i++) {
    let retangle = document.createElement('div');
    retangle.className = 'retangle-third-section clicked';
    retangle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    retangles25.appendChild(retangle); 
    // make 4 retangles inside 1 retangle infinite
    for (let i = 0; i <= 3; i++) {
        let retangleInside = document.createElement('div');
        retangleInside.className = 'retangle-second-section';
        retangleInside.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        retangleInside.style.display = 'none'
        retangle.appendChild(retangleInside);
        // show div
        retangle.addEventListener('click', function () {
            retangleInside.style.display = 'block';
        }); 
        for (let i = 0; i <= 3; i++) {
            let retangleInsideTwo = document.createElement('div');
            retangleInsideTwo.className = 'retangle-second-section';
            retangleInsideTwo.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            retangleInsideTwo.style.display = 'none'
            retangleInside.appendChild(retangleInsideTwo);
            // show div
            retangleInside.addEventListener('click', function () {
                retangleInsideTwo.style.display = 'block';
            }); 
        }
    }
    
}
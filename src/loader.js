$(document).ready(() => {
  let index = 28;

  // add #bookmark to window url
  let href = window.location.href;
  if (href.includes('#')) {
    let bookmark = parseInt(href.split('#')[1]);
    if (bookmark !== '' && bookmark > 0 && bookmark < dataset.length) {
      index = bookmark - 1;
    }
  }

  // render sketch
  let renderSketch = index => {
    let path = `./sketches/${dataset[index].path}/index.html`;
    $('#canvas iframe').attr('src', path);

    // render dom elements
    $('#btnGroupDrop1').html(`${index + 1}/${dataset.length}`);
    $('#title').html(`#${index + 1} - ${dataset[index].name}`);
    $('#codepen').attr('href', `${dataset[index].codepen}`);
  }
  renderSketch(index);

  // switch sketch
  $('.dropdown-item').on('click', function(){
    index = $(this).attr('index');
    renderSketch(parseInt(index));
  });

  // navigate to previous or next sketch
  $('#btn-next').on('click', () => {
    if (index < dataset.length - 1) {
      index++;
    } else {
      index = 0;
    }
    renderSketch(index);
  });
  $('#btn-prev').on('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = dataset.length - 1;
    }
    renderSketch(index);
  });

  // reload current sketch
  $('#reload').on('click', () => {
    $('#canvas').empty();
    $('#canvas').append('<iframe>');
    renderSketch(index);
  })

});

let dataset = [
  {
    path: '01',
    name: 'AutoCAD Canvas',
    codepen: 'https://codepen.io/chendf/pen/gOpxrWX'
  },
  {
    path: '02',
    name: 'Bouncing Ball',
    codepen: 'https://codepen.io/chendf/pen/rNVzoRq'
  },
  {
    path: '03',
    name: 'Recursion Golden Spiral',
    codepen: 'https://codepen.io/chendf/pen/NWqadXV'
  },
  {
    path: '04',
    name: 'Graphics iPad',
    codepen: 'https://codepen.io/chendf/pen/abOVNMb'
  },
  {
    path: '05',
    name: 'Charts',
    codepen: 'https://codepen.io/chendf/pen/VwLrrWW'
  },
  {
    path: '06',
    name: 'Mandala',
    codepen: 'https://codepen.io/chendf/pen/PoqOQNN'
  },
  {
    path: '07',
    name: 'Bezier',
    codepen: 'https://codepen.io/chendf/pen/LYVOXML'
  },
  {
    path: '08',
    name: 'Satelite',
    codepen: 'https://codepen.io/chendf/pen/dyoZwbJ'
  },
  {
    path: '09',
    name: 'Clock Wave',
    codepen: 'https://codepen.io/chendf/pen/XWbVXQV'
  },
  {
    path: '10',
    name: 'DNA Double Helix',
    codepen: 'https://codepen.io/chendf/pen/abOqNdY'
  },
  {
    path: '11',
    name: 'Gazing Kumamon',
    codepen: 'https://codepen.io/chendf/pen/BaNYMWa'
  },
  {
    path: '12',
    name: 'Random Arc',
    codepen: 'https://codepen.io/chendf/pen/LYVQwVR'
  },
  {
    path: '13',
    name: 'Street Light',
    codepen: 'https://codepen.io/chendf/pen/xxGWBby'
  },
  {
    path: '14',
    name: 'Parametric Equation',
    codepen: 'https://codepen.io/chendf/pen/QWbrbeG'
  },
  {
    path: '15',
    name: 'Lantern',
    codepen: 'https://codepen.io/chendf/pen/ZEGoQYw'
  },
  {
    path: '16',
    name: 'Constructor Solar System',
    codepen: 'https://codepen.io/chendf/pen/XWbqooJ'
  },
  {
    path: '17',
    name: 'Mouse Follow',
    codepen: 'https://codepen.io/chendf/pen/YzXvbGx'
  },
  {
    path: '18',
    name: 'Wave Maker',
    codepen: 'https://codepen.io/chendf/pen/WNvKjPq'
  },
  {
    path: '19',
    name: 'Simple Particles',
    codepen: 'https://codepen.io/chendf/pen/zYGLVjP'
  },
  {
    path: '20',
    name: 'Star Field',
    codepen: 'https://codepen.io/chendf/pen/QWbVGpV'
  },
  {
    path: '21',
    name: 'Terrian',
    codepen: 'https://codepen.io/chendf/pen/ExjeLaE'
  },
  {
    path: '22',
    name: 'Rhodonea Spinner',
    codepen: 'https://codepen.io/chendf/pen/abOaxrx'
  },
  {
    path: '23',
    name: 'Phyllotaxis',
    codepen: 'https://codepen.io/chendf/pen/VwLEzMN'
  },
  {
    path: '24',
    name: 'Perlin Noise Field',
    codepen: 'https://codepen.io/chendf/pen/oNXaJMV'
  },
  {
    path: '25',
    name: 'Perlin Noise Flow Field',
    codepen: 'https://codepen.io/chendf/pen/jOPXMqO'
  },
  {
    path: '26',
    name: 'Fractal Tree Generator',
    codepen: 'https://codepen.io/chendf/pen/mdJaxGq'
  },
  {
    path: '27',
    name: 'Lorenz Attractor',
    codepen: 'https://codepen.io/chendf/pen/oNXJOVM'
  },
  {
    path: '28',
    name: 'Lissajous Curve Table',
    codepen: 'https://codepen.io/chendf/pen/yLNWOGJ'
  },
  {
    path: '29-cover',
    name: 'Steering Behavior',
    codepen: 'https://codepen.io/chendf/pen/zYGQgPX'
  },
  {
    path: '30',
    name: '10 Print',
    codepen: 'https://codepen.io/chendf/pen/abOgwra'
  },
  {
    path: '31',
    name: 'Plankton',
    codepen: 'https://codepen.io/chendf/pen/eYNwbqo'
  },
  {
    path: '32',
    name: 'Mandelbrot Set',
    codepen: 'https://codepen.io/chendf/pen/XWmrYpG'
  },
  {
    path: '33',
    name: 'Julia Set',
    codepen: 'https://codepen.io/chendf/pen/ExVxmjO'
  },
  {
    path: '34',
    name: 'Times Table Cardioid',
    codepen: 'https://codepen.io/chendf/pen/abvzvKZ'
  },
  {
    path: '35',
    name: 'Black Hole',
    codepen: 'https://codepen.io/chendf/pen/qBOEJJz'
  },
  {
    path: '36',
    name: 'Dancing Circles',
    codepen: 'https://codepen.io/chendf/pen/bGVdGmj'
  },
  {
    path: '37',
    name: 'Metaballs',
    codepen: 'https://codepen.io/chendf/pen/GRppoGB'
  },
  {
    path: '38',
    name: 'Flying Fabric',
    codepen: 'https://codepen.io/chendf/pen/eYpZeMV'
  },
  {
    path: '39',
    name: 'Woolen Ball Generator',
    codepen: 'https://codepen.io/chendf/pen/dyYXWGN'
  },
  {
    path: '40',
    name: 'Starry Night',
    codepen: 'https://codepen.io/chendf/pen/yLYJXJa'
  },
  {
    path: '41',
    name: 'Firework',
    codepen: 'https://codepen.io/chendf/pen/qBONYwd'
  },
  {
    path: '42',
    name: 'Noise Wave',
    codepen: 'https://codepen.io/chendf/pen/xxwEXVb'
  },
  {
    path: '43',
    name: 'Noise Letter',
    codepen: 'https://codepen.io/chendf/pen/RwWGOoX'
  },
  {
    path: '44',
    name: 'Sine Cube',
    codepen: 'https://codepen.io/chendf/pen/rNOWbYp'
  },
  {
    path: '45',
    name: 'Genie in a Bottle',
    codepen: 'https://codepen.io/chendf/pen/YzyNrJW'
  },
  {
    path: '46',
    name: '3D Wave',
    codepen: 'https://codepen.io/chendf/pen/YzyQavq'
  },
  {
    path: '47',
    name: 'Sphere Space',
    codepen: 'https://codepen.io/chendf/pen/JjYrrEN'
  },
  {
    path: '48',
    name: 'Particle Sparks',
    codepen: 'https://codepen.io/chendf/pen/RwWxbmJ'
  },
  {
    path: '49',
    name: 'Water Ripple',
    codepen: 'https://codepen.io/chendf/pen/zYvpPep'
  },
  {
    path: '50',
    name: 'Sparkling Heart',
    codepen: 'https://codepen.io/chendf/pen/MWarQYz'
  }
]

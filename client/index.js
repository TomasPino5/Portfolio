window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");
  const contenido = document.getElementById("contenido");

  preloader.style.display = "none";
  contenido.style.display = "block";
});

const { Engine, Render, World, Bodies, Mouse, MouseConstraint } = Matter;

const canvas = document.getElementById('iconCanvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '1000';

const engine = Engine.create();

engine.world.gravity.y = 0;
engine.world.gravity.x = 0;

const render = Render.create({
  canvas: canvas,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: 'transparent',
  }
});

Render.run(render);

const runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);

const world = engine.world;

const boundaries = [
  Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, { isStatic: true }),
  Bodies.rectangle(window.innerWidth / 2, -25, window.innerWidth, 50, { isStatic: true }),
  Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
  Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
];
World.add(world, boundaries);

const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  constraint: { stiffness: 0.8, render: { visible: false } }
});
World.add(world, mouseConstraint);

document.getElementById("bonus").addEventListener("click", () => {
  for (let i = 0; i < 100; i++) {
    const size = 20 + Math.random() * 10;
    const icon = Bodies.circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, size, {
      restitution: 0.9,
      angle: Math.random() * Math.PI * 2,
      collisionFilter: {
        group: -1
      },
      render: {
        sprite: {
          texture: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f47e.png',
          xScale: 0.05,
          yScale: 0.05
        }
      }
    });
    World.add(world, icon);
  }

  let aux;

  if (document.body.className == 'dark-mode') {
    aux = './images/iconWhite.png';
  } else {
    aux = './images/iconBlack.png';
  }



  const miIcono = Bodies.circle(
    window.innerWidth / 2,
    window.innerHeight / 2,
    120,
    {
      restitution: 1,
      frictionAir: 0,
      friction: 0,
      collisionFilter: {
        group: 1
      },
      render: {
        sprite: {
          texture: aux,
          xScale: 0.3,
          yScale: 0.3
        }
      }
    }
  );
  Matter.Body.setVelocity(miIcono, {
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 20
  });
  World.add(world, miIcono);

  setInterval(() => {
    Matter.Body.applyForce(miIcono, miIcono.position, {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01
    });
  }, 500);
});
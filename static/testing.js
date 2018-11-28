'use strict';

var base_sound_url = 'http://www.taorankings.com/html5/sounds/';
var TILE_HEIGHT = 56;

PIXI.ticker.shared.autoStart = false;

window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('board');
  let app = new PIXI.Application(canvas.width, canvas.height, {
    autoStart:   false,
    view:        canvas,
    transparent: true,
  });
  let loader = PIXI.loader;

  let unit_list = document.getElementById('unit_list');
  let unit_actions = document.getElementById('unit_actions');
  let unit_container;
  let sounds;
  let timer;

  loader.add('board', 'http://www.taorankings.com/html5/images/board.jpg');
  loader.load(() => {
    // The full board image
    let board = PIXI.BaseTexture.fromImage('board');

    // Place the center of the board in our much smaller canvas.
    let texture = new PIXI.Texture(board, new PIXI.Rectangle(
      (board.width  / 2) - (canvas.width  / 2),
      (board.height / 2) - (canvas.height - TILE_HEIGHT),
      canvas.width,
      canvas.height,
    ));

    let background = new PIXI.Sprite(texture);
    app.stage.addChild(background);

    // Position the unit container in the center of the canvas.
    unit_container = new PIXI.Container();
    unit_container.position = new PIXI.Point(
      canvas.width  / 2,
      canvas.height - TILE_HEIGHT,
    );
    app.stage.addChild(unit_container);

    app.render();

    fetch('unit_list.json')
      .then(rsp => rsp.json())
      .then(unit_list_data => {
        // Sort the list alphabetically by name
        unit_list_data.sort((a, b) => a.name.localeCompare(b.name));

        // Add the list to the HTML select element
        unit_list_data.forEach(unit => {
          let option = document.createElement('option');
          option.value = unit.name;
          option.text = unit.name;

          unit_list.add(option);
        });

        unit_list.remove(0);
        unit_list.selectedIndex = 0;
        unit_list.disabled = false;
      });
  });

  /*
   * When the selected unit changes, load the action list.
   */
  unit_list.addEventListener('change', () => {
    let unit_name = unit_list.options[unit_list.selectedIndex].value;

    // Clear the action list and unit container until unit is loaded.
    unit_actions.innerHTML = '';
    unit_container.removeChildren();

    load_unit(unit_name).then(unit => {
      let link = document.createElement('a');
      link.text = 'All';
      link.addEventListener('click', () => play_action(unit));
      unit_actions.appendChild(link);

      Object.keys(unit.actions).forEach(action_name => {
        let link = document.createElement('a');
        link.text = action_name;
        link.addEventListener('click', () => play_action(unit, action_name));
        unit_actions.appendChild(link);
      });
    });
  });

  /*
   * Get a promise that unit JSON, images, and sounds will be loaded.
   */
  function load_unit(unit_name) {
    return fetch('/units/' + unit_name + '.json')
      .then(rsp => rsp.json())
      .then(unit => {
        /*
         * Load all images and sounds asynchronously at the same time.
         */
        // This promise resolves once all images are loaded.
        let images_promise = new Promise((resolve, reject) => {
          // Images are cached as PIXI textures and accessed by index.
		  loader.reset()
          unit.images.forEach((url, index) => {
            loader.add(index.toString(), '/units/' + url);
          });

          loader.load(resolve);
        });

        // This promise resolves once all sounds are loaded.
        let sounds_promise = new Promise((resolve, reject) => {
          // Sounds are cached as audio objects in the sounds array.
          let loaded_count = 0;

          sounds = unit.sounds.map(filename => {
            let audio = new Audio();
            audio.addEventListener('loadeddata', () => {
              loaded_count++;
              if (loaded_count === unit.sounds.length)
                resolve();
            });
            audio.src = base_sound_url + filename + '.mp3';
          });
        });

        // Wait for both images and sounds to load.
        return Promise.all([images_promise, sounds_promise])
          .then(() => unit);
      });
  }

  function play_action(unit, action_name) {
    let loop = document.getElementById('loop');
    let fps = document.getElementById('fps');
    let rendered_index = document.getElementById('rendered_index');
    let start_index = 0;

    clearTimeout(timer);

    let frames;
    if (action_name === undefined)
      frames = unit.frames;
    else {
      start_index = unit.actions[action_name].start;

      frames = unit.frames.slice(
        unit.actions[action_name].start,
        unit.actions[action_name].end + 1,
      );
    }

    let frame_index = 0;
    let animator = () => {
      if (frame_index === frames.length)
        if (loop.checked === true)
          frame_index = 0;
        else
          return;
      timer = setTimeout(animator, 1000 / fps.value);

      renderFrame(frames[frame_index]);
      rendered_index.innerText = start_index + frame_index;

      frame_index++;
    };

    animator();
  }

  function renderFrame(frame) {
    unit_container.removeChildren();

    frame.frame.reverse().forEach(layer => {
      let spritesheet = PIXI.BaseTexture.fromImage(layer.i.toString());
      let texture = new PIXI.Texture(spritesheet, new PIXI.Rectangle(
        layer.vx,
        layer.vy,
        layer.vw,
        layer.vh,
      ));

      let sprite = new PIXI.Sprite(texture);
      sprite.position = new PIXI.Point(-layer.x, -layer.y);
      unit_container.addChild(sprite);
    });

    app.render();
  }
});

# EE5808 OBJL serve models

For CDN usage in EE5808.  

We are welcome for you to use your own models / assert in general. But for demo and other usage, you can use the following models for your assignment 2.

## Usage
Url link refer
```md
## Basic endpoint
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/<dir_path>/<file_name>

## E.g. get and load the Bird Orange GLTF model from this repo
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/bird_orange/scene.gltf
```

In the Javascript
```js
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

async function createGltfModelsStatic(modalPath) {
  const gltfLoader = new GLTFLoader();
  const gltf = await gltfLoader.loadAsync(modalPath);
  const root = gltf.scene;

  root.traverse((obj) => {
    if (obj.castShadow !== undefined) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  return root
}

const bird = await createGltfModelsStatic(
    "https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/bird_orange/scene.gltf"
);
```

## Demo html
- [Click here](https://github.com/devReemoNg/EE5808-models/blob/main/demo%20html/index.js)

## References Models Link
- [Bird Orange](https://sketchfab.com/3d-models/bird-orange-0d31748606c2499fb652c0c1052b7cfa)
```md
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/bird_orange/scene.gltf
```

- [Eye Robot](https://sketchfab.com/3d-models/eye-robot-0f62aedb1f564133b259b1dd02297673)
```md
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/eye_robot/scene.gltf
```

- [Constitution II Class Railgun Destroyer DDR-2000](https://sketchfab.com/3d-models/constitution-ii-class-railgun-destroyer-ddr-2000-3b04b0a0dc1244d28d99382f7d33d54e)
```md
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/constitution_ii_class_railgun_destroyer_ddr-2000/scene.gltf
```
 
- [Shiba](https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c)
```md
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/shiba/scene.gltf
```

- [Quirky Series - FREE Animals Pack](https://sketchfab.com/3d-models/quirky-series-free-animals-pack-19e91ef86cd0448f9cbb5d6c538dade2)
```md
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/free_animals_pack/scene.gltf
```

## References Scene Link
- [Metro/Subway Station Interior](https://sketchfab.com/3d-models/quirky-series-free-animals-pack-19e91ef86cd0448f9cbb5d6c538dade2)
```md
https://cdn.jsdelivr.net/gh/devReemoNg/EE5808-models/metrosubway_station_interior/scene.gltf
```

## Licenses

Attribution 4.0 International

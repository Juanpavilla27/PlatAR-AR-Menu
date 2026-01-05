<template>
  <div>
    <a-scene
      mindar-image="imageTargetSrc: ./targets/platillo.mind;"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: true"
      embedded
    >
      <a-assets>
        <a-asset-item id="model" src="/models/platillo.glb"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity
        mindar-image-target="targetIndex: 0"
        gltf-model="#model"
        scale="0.5 0.5 0.5"
        gesture-detector
      ></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: "ARView",
};
</script>

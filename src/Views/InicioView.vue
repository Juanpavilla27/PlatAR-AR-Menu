<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/corazon-mx.jpg" class="d-block w-100">
        </div>
        <div class="carousel-item">
            <img src="../assets/Fondo-corazonmx.jpg" class="d-block w-100">
        </div>
    </div>
    <button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
</template>

<script>
import fondo from '../assets/corazon-mx.jpg'

export default {
  name: 'Inicio',
  data() {
    return {
      fondo
    }
  }
}
</script>

<style scoped>

</style>

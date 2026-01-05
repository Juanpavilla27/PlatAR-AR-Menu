<template>
  <div class="view-background-split">
    <!-- Contenedor con fondo e imagen -->
    <div class="banner-container">
      <!-- 🔙 Botón Regresar sobre la imagen -->
      <button class="btn-back absolute-back" @click="$router.back()">←</button>
      <div class="background-banner"></div>
    </div>

    <div>
      <h5 class="center-title">Bienvenido a Corazón Mexicano</h5>

      <!-- Tarjeta tipo botón para ir al menú -->
      <div class="menu-card center-align">
        <router-link to="/menu" class="menu-link">
          <span> Menú Completo</span>
        </router-link>
      </div>

      <h5 class="center-title" style="margin-top: 2rem;">Platillos Destacados</h5>

      <div class="highlight-list">
        <div
          v-for="(item, index) in featured"
          :key="index"
          class="highlight-card"
        >
          <img :src="item.src" :alt="item.title" class="highlight-image" />
          <div class="highlight-info">
            <h6 class="highlight-title">{{ item.title }}</h6>
            <p class="highlight-price">${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featured: [
        {
          title: 'Esquites tatemados',
          src: 'https://www.mylatinatable.com/wp-content/uploads/2019/07/Esquites-3.jpg',
          price: 90
        },
        {
          title: 'Alitas',
          src: 'https://consalyazucar.com/cdn/recipes/alitas_de_pollo_bbq_parmesano_y_bufalo.jpg',
          price: 120
        },
        {
          title: 'Tamal Oaxaqueño',
          src: 'https://th.bing.com/th/id/OIP.I2TXpbe1veQLQr07USLdkAHaE7?w=288&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          price: 65
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Contenedor para posicionar botón sobre la imagen */
.banner-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.background-banner {
  background-image: url('../assets/corazon-mx.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

/* Botón sobre la imagen */
.absolute-back {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  background-color: rgba(5, 56, 124, 0.9);
}

/* Botón estilo general */
.btn-back {
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}
.btn-back:hover {
  background-color: rgba(0, 85, 170, 0.95);
}

/* Títulos destacados */
.center-title {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #222;
}

/* Tarjeta de Menú Completo */
.menu-card {
  margin: 2rem auto;
  padding: 1.2rem 2rem;
  background-color:rgb(8, 137, 135);
  color: white;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.menu-card:hover {
  transform: scale(1.03);
  background-color:rgba(0, 124, 112, 0.47);
}

.menu-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Lista de platillos destacados */
.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.highlight-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.highlight-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.highlight-card:hover .highlight-image {
  transform: scale(1.05);
}

.highlight-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  backdrop-filter: blur(4px);
  text-align: center;
}

.highlight-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.highlight-price {
  font-size: 1rem;
  margin: 0.3rem 0 0;
}
</style>

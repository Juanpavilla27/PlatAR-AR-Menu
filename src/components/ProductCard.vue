<template>
  <div class="product-card">
    <div class="product-header">
      <h3 class="product-title">{{ title }}</h3>
    </div>

    <div class="product-image">
      <img :src="src" :alt="title" class="product-img" />
    </div>

    <p class="product-description">{{ description }}</p>

    <div class="product-footer">
      <span class="product-price">${{ price }}</span>
      <!-- Ícono más grande al lado del precio -->
      <img :src="icon" alt="icon" class="product-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: String,
    src: String,
    description: String,
    price: Number,
    icon: String, // Propiedad para el ícono del platillo
  },
}
</script>

<style scoped>
.product-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-3px);
}

.product-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.product-image {
  text-align: center;
}

.product-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.2rem;
  color: #28a745;
  font-weight: bold;
}

.product-icon {
  width: 50px; /* Tamaño más grande del ícono */
  height: 50px;
  object-fit: contain;
}
</style>
<template>
  <div class="view-background-split">
    <!-- 🔙 Botón Regresar -->
    <div style="margin-bottom: 1rem;">
      <button class="btn-back" @click="$router.back()">←</button>
    </div>

    <div>
      <h5 class="center-align">Menú por Categorías</h5>

      <!-- Categorías con imágenes -->
      <div class="tabs-container">
        <button
          v-for="(category, index) in categories"
          :key="index"
          @click="activeCategory = index"
          :class="['tab-button', { active: activeCategory === index }]"
        >
          <img :src="category.image" :alt="category.name" class="category-image" />
        </button>
      </div>

      <!-- Productos -->
      <div class="product-list" v-if="currentItems.length">
        <div
          v-for="(item, i) in currentItems"
          :key="item.title"
          class="product-card-wrapper"
        >
          <ProductCard
            :title="item.title"
            :src="item.src"
            :description="item.description"
            :price="item.price"
            :icon="raIcon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import PaComenzarImg from '../assets/PaComenzar.png'
import TacosBurritosImg from '../assets/Tacos-Burritos.png'
import EspecialidadesCasaImg from '../assets/Especialidades-casa.png'
import PlatillosMexicanosImg from '../assets/PlatillosMuyMx.png'
import RaIcon from '../assets/ra.png' // <-- Ícono agregado

export default {
  name: 'Menu',
  components: { ProductCard },
  data() {
    return {
      activeCategory: 0,
      raIcon: RaIcon, // Asignando el ícono
      categories: [
        {
          name: 'PaComenzar',
          image: PaComenzarImg,
          items: [
            {
              title: 'Esquites tatemados',
              src: 'https://www.mylatinatable.com/wp-content/uploads/2019/07/Esquites-3.jpg',
              description: 'Granos de elotes tatemados acompañados con dip cremoso de queso de cabra, cenizas de chile y limón',
              price: 90,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Platon Cervantino',
              src: 'https://th.bing.com/th/id/OIP._UTiehEkaVdwQSpQs0GE5AHaEX?w=638&h=376&rs=1&pid=ImgDetMain',
              description: 'Mix de sopecitos, tlacoyos, quesadillas fritas, y flautitas acompañadas de lechuga, jitomate, cebolla, queso, crema',
              price: 130,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Alitas',
              src: 'https://consalyazucar.com/cdn/recipes/alitas_de_pollo_bbq_parmesano_y_bufalo.jpg',
              description: 'Jugosas alitas de pollo bañadas en salsa picante. En salsa hot o BBQ',
              price: 160,
              icon: RaIcon // <-- Ícono asignado aquí
            }
          ]
        },
        {
          name: 'Tacos-Burritos',
          image: TacosBurritosImg,
          items: [
            {
              title: 'Tacos',
              src: 'https://th.bing.com/th/id/OIP.U595nSoPXbvOkyPWPlZ8LQHaHa?rs=1&pid=ImgDetMain',
              description: 'De bisteck o chorizo acompañados con cebolla asada y chiles toreados',
              price: 40,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Taco de arrachera',
              src: 'https://i.pinimg.com/originals/30/c6/df/30c6df693247344f2c5e192f47d172b2.jpg',
              description: 'De bisteck o chorizo acompañados con cebolla asada y chiles toreados',
              price: 45,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Taco de chamorro adobado',
              src: 'https://th.bing.com/th/id/OIP.dU5HrT-66qOWFVJLv-8jhgHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              description: 'acompañados con frijoles de la olla y pico de gallo',
              price: 160,
              icon: RaIcon // <-- Ícono asignado aquí
            }
          ]
        },
        {
          name: 'Especialidades-casa',
          image: EspecialidadesCasaImg,
          items: [
            {
              title: 'Enchiladas Mineras (4 pzas.)',
              src: 'https://th.bing.com/th/id/OIP.-dfJwv2F3MTKvodAOnIu5AHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              description: 'La autentica receta guanajuatense, bañadas en adobo de chiles, rellenas de queso acompañadas con papa y zanahoria',
              price: 185,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Fajitas de arrachera',
              src: 'https://th.bing.com/th/id/OIP.-gy9Ntle1ejV7IqdByNPIQHaE6?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              description: '200 gr de arrachera en corte de fajita, bañadas en salsa negra, mix de pimientos',
              price: 195,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Hamburguesa Mexicana',
              src: 'https://th.bing.com/th/id/OIP.xL7HV1U8QF9emp3EcmdnSwHaDo?w=312&h=171&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              description: '180 gr de carne de res premium con queso gratinado, lechuga, jitomate',
              price: 185,
              icon: RaIcon // <-- Ícono asignado aquí
            }
          ]
        },
        {
          name: 'Platillos-Muy-Mexicanos',
          image: PlatillosMexicanosImg,
          items: [
            {
              title: 'Pozole Rojo',
              src: 'https://th.bing.com/th/id/OIP.1Q92PrkpnVf1lsM9sJCA_QHaFf?w=258&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              description: 'Con carne de puerco acompañados con lechuga, cebolla, chile de arbol, oregano, rabonos, limon y tostadas.',
              price: 160,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Arrachera tampiqueña',
              src: 'https://th.bing.com/th/id/OIP.Fh8kpmUwHGyrv41XdhtB_wHaE7?rs=1&pid=ImgDetMain',
              description: '200 gr de arrachera a la plancha acompañada de una enchilada, enfrijolada, frijoles, guacamole y arroz',
              price: 190,
              icon: RaIcon // <-- Ícono asignado aquí
            },
            {
              title: 'Milanesa Tampiqueña',
              src: 'https://th.bing.com/th/id/OIP.DKbm4m28Rig8nWgbPM0MKgHaFE?w=289&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              description: '200 gr de pollo empanizado acompañada de una enchilada, enfrijolada, frijoles, guacamole y arroz',
              price: 170,
              icon: RaIcon // <-- Ícono asignado aquí
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentItems() {
      return this.categories[this.activeCategory].items
    }
  }
}
</script>

<style scoped>
/* Estilos similares a los previos */
.tabs-container {
  display: flex;
  overflow-x: auto;
  padding: 0.5rem 1rem;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: flex-start;
  scroll-padding-left: 1rem;
}

.tab-button {
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-button.active {
  border-color: rgb(8, 137, 135);
  background-color: rgba(8, 137, 135, 0.12);
}

.category-image {
  width: 80px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.tab-button:hover .category-image {
  transform: scale(1.05);
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
}

.product-card-wrapper {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 1rem;
  transition: transform 0.2s ease;
}

.product-card-wrapper:hover {
  transform: translateY(-3px);
}

h5 {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: 'Segoe UI', sans-serif;
  color: rgb(8, 137, 135);
}

/* Botón regresar */
.btn-back {
  background-color: rgb(8, 137, 135);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-back:hover {
  background-color: rgb(6, 115, 114);
}
</style>
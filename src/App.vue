<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/about">Acerca de</router-link>
  </nav> -->
  <div v-if="$store.state.idioma.code == 'ES'">
    <Menubar :model="items" class="menubar">
      <template #end>
        <Dropdown
          v-model="selectedCountry"
          :options="countries"
          optionLabel="name"
          placeholder="SeleccionÃ¡ un idioma"
          class="dropdown"
          @change="cambiarIdioma()"
        >
          <template #value="slotProps">
            <div class="country-item country-item-value" v-if="slotProps.value">
              <img
                :src="slotProps.value.bandera"
                style="
                  width: 15px;
                  height: 10px;
                  margin-right: 10px;
                  margin-top: 8px;
                "
              />
              <div>{{ slotProps.value.name }}</div>
            </div>
          </template>
          <template #option="slotProps">
            <div class="country-item">
              <img
                :src="slotProps.option.bandera"
                style="
                  width: 15px;
                  height: 10px;
                  margin-right: 10px;
                  margin-top: 8px;
                "
              />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </template>
    </Menubar>
  </div>

  <div v-if="$store.state.idioma.code == 'IN'">
    <Menubar :model="itemsIng" class="menubar">
      <template #end>
        <Dropdown
          v-model="selectedCountry"
          :options="countries"
          optionLabel="name"
          placeholder="SeleccionÃ¡ un idioma"
          class="dropdown"
          @change="cambiarIdioma()"
        >
          <template #value="slotProps">
            <div class="country-item country-item-value" v-if="slotProps.value">
              <img
                :src="slotProps.value.bandera"
                style="
                  width: 15px;
                  height: 10px;
                  margin-right: 10px;
                  margin-top: 8px;
                "
              />
              <div>{{ slotProps.value.name }}</div>
            </div>
          </template>
          <template #option="slotProps">
            <div class="country-item">
              <img
                :src="slotProps.option.bandera"
                style="
                  width: 15px;
                  height: 10px;
                  margin-right: 10px;
                  margin-top: 8px;
                "
              />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </template>
    </Menubar>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "App",

  created() {
    this.$store.state.idioma = {
      name: "EspaÃ±ol",
      code: "ES",
      bandera: "/espana.png",
    };
  },

  watch: {
    cambiar() {
      document.getElementById();
    },
  },

  data() {
    return {
      selectedCountry: {
        name: "EspaÃ±ol",
        code: "ES",
        bandera: "/espana.png",
      },
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "/",
        },
        {
          label: "Sobre mi",
          icon: "pi pi-fw pi-info-circle",
          url: "/about",
        },
        {
          label: "Proyectos",
          icon: "pi pi-fw pi-folder",
          url: "/projects",
        },
        {
          label: "Contacto",
          icon: "pi pi-fw pi-phone",
          url: "/contact",
        },
      ],

      itemsIng: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          url: "/",
        },
        {
          label: "About me",
          icon: "pi pi-fw pi-info-circle",
          url: "/about",
        },
        {
          label: "Projects",
          icon: "pi pi-fw pi-folder",
          url: "/projects",
        },
        {
          label: "Contact",
          icon: "pi pi-fw pi-phone",
          url: "/contact",
        },
      ],

      countries: [
        {
          name: "EspaÃ±ol",
          code: "ES",
          bandera: "/espana.png",
        },
        {
          name: "English",
          code: "IN",
          bandera: "/inglaterra.png",
        },
      ],
    };
  },

  methods: {
    cambiarIdioma() {
      console.log("idioma");
      console.log(this.$store.state.idioma);
      console.log(this.selectedCountry);

      this.$store.state.idioma = this.selectedCountry;

      // console.log(this.$store.state.idioma);
    },
  },
};
</script>

<style scoped>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .menubar {
    background-color: #090909;
    border: 1px solid #090909;
    border-radius: 0px;
  }

  .dropdown {
    width: 25vh;
  }

  .country-item {
    display: flex;
  }

  .p-dropdown {
    border: 1px solid #90745c !important;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .p-menubar {
    background-color: #090909;
    border: 1px solid #090909;
  }

  .p-menubar-mobile-active {
    transition: 2s !important;
  }

  .dropdown {
    width: 25vh;
  }

  .p-dropdown {
    border: 1px solid #90745c !important;
  }

  .country-item {
    display: flex;
  }
}
</style>

<style>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  ul {
    background-color: #090909;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  ul {
    background-color: #090909 !important;
    border: 1px solid #090909 !important;
  }

  li {
    background-color: #090909;
    border-bottom: 0.01px solid #b7bcb5 !important;
  }

  .pi-bars {
    transition: 0.5s;
  }

  .p-menubar-mobile-active .pi-bars {
    transform: rotate(90deg);
  }
}
</style>

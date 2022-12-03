<template>
  <div class="saludo">
    <div v-if="$store.state.idioma.code == 'ES'">
      <h2>Hola, soy</h2>
      <h1 class="nombre">Fernando González</h1>
      <h2>desarrollador de software</h2>
    </div>

    <div v-if="$store.state.idioma.code == 'IN'">
      <h2>Hi, I'm</h2>
      <h1 class="nombre">Fernando González</h1>
      <h2>software developer</h2>
    </div>
  </div>

  <div class="img-descripcion">
    <div class="div-img">
      <img src="src/assets/Imagen2.png" alt="" class="img" />
    </div>

    <div class="div-descripcion">
      <div v-if="$store.state.idioma.code == 'ES'">
        <h2 class="descripcion">¡¡¡Hola!!!</h2>
        <h3 class="descripcion">
          Me presento, soy Fernando González, alumno avanzado de la carrera de
          Licenciatura en sistemas de información en la Universidad Nacional de
          Santiago del Estero (Argentina) y desarrollador de software hace 3
          años
        </h3>
        <h3 class="descripcion">
          Te invito a que conozcas las tecnologías que manejo y los proyectos y
          trabajos realizados
        </h3>
      </div>

      <div v-if="$store.state.idioma.code == 'IN'">
        <h2 class="descripcion">Hi!!!</h2>
        <h3 class="descripcion">
          Let me introduce myself, I am Fernando González, advanced student of
          the career of Degree in information systems at the National University
          of Santiago del Estero (Argentina) and software developer 3 years ago
        </h3>
        <h3 class="descripcion">
          I invite you to get to know the technologies I handle and the projects
          and work done
        </h3>
      </div>
    </div>
  </div>

  <div class="separador"></div>

  <div v-if="$store.state.idioma.code == 'ES'">
    <h1 class="separador-titulo">¿Por qué elegirme?</h1>
    <div class="div-eleccion">
      <div class="eleccion">
        <div class="eleccion-contenido">
          <Card class="card">
            <template #title>
              <h2 class="card-titulo">Responsabilidad</h2>
            </template>

            <template #content>
              <h3 class="card-contenido">
                Me considero una persona responsable, que cumple en tiempo y
                forma con su trabajo y obligaciones y actúa conforme a lo que se
                pide
              </h3>
            </template>
          </Card>
        </div>
      </div>

      <div class="eleccion">
        <div class="eleccion-contenido">
          <Card class="card">
            <template #title>
              <h2 class="card-titulo">Proactivo</h2>
            </template>

            <template #content>
              <h3 class="card-contenido">
                Tengo iniciativa y capacidad para llevar a cabo tareas y
                proyectos sin importar la dificultad o tiempo en el que se los
                requiera, para cumplir con cada item acordado
              </h3>
            </template>
          </Card>
        </div>
      </div>

      <div class="eleccion">
        <div class="eleccion-contenido">
          <Card class="card">
            <template #title>
              <h2 class="card-titulo">Trabajo individual y en equipo</h2>
            </template>

            <template #content>
              <h3 class="card-contenido">
                Puedo trabajar solo o en grupo, amoldandome a cada grupo de
                trabajo para llegar a cumplir los objetivos de la mejor manera
                posible y por el camino más eficiente
              </h3>
            </template>
          </Card>

          <!-- <Accordion :activeIndex="0">
            <AccordionTab header="Trabajo individual y en equipo" class="card">
              <h3>
                Puedo trabajar solo o en grupo, amoldandome a cada grupo de
                trabajo para llegar a cumplir los objetivos de la mejor manera
                posible y por el camino más eficiente
              </h3>
            </AccordionTab>
          </Accordion> -->
        </div>
      </div>
    </div>
  </div>

  <div v-if="$store.state.idioma.code == 'IN'">
    <h1 class="separador-titulo">Why choose me?</h1>
    <div class="div-eleccion">
      <div class="eleccion">
        <div class="eleccion-contenido">
          <Card class="card">
            <template #title>
              <h2 class="card-titulo">Responsibility</h2>
            </template>

            <template #content>
              <h3 class="card-contenido">
                I consider myself a responsible person, who complies on time and
                forms with his work and obligations and acts according to what
                is asks
              </h3>
            </template>
          </Card>
        </div>
      </div>

      <div class="eleccion">
        <div class="eleccion-contenido">
          <Card class="card">
            <template #title>
              <h2 class="card-titulo">Proactive</h2>
            </template>

            <template #content>
              <h3 class="card-contenido">
                I have initiative and ability to carry out tasks and projects
                regardless of the difficulty or time in which they are required,
                to comply with each agreed item
              </h3>
            </template>
          </Card>
        </div>
      </div>

      <div class="eleccion">
        <div class="eleccion-contenido">
          <Card class="card">
            <template #title>
              <h2 class="card-titulo">Individual work and on team</h2>
            </template>

            <template #content>
              <h3 class="card-contenido">
                I can work alone or in a group, adapting to each group of work
                to achieve the objectives in the best way possible and by the
                most efficient way
              </h3>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>

  <!-- <div v-if="$store.state.idioma.code == 'ES'">
    <h1 class="separador-titulo">Contactame</h1>
    <div class="contacto">
      <div class="contacto-contenido">
        <i class="pi pi-whatsapp contacto-contenido-icono" id="i1"></i>
        <p class="contacto-contenido-titulo">WhatsApp</p>
        <Button
          label="Contactar"
          class="p-button-link contacto-contenido-contactar"
          @click="contactarWhatsApp()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-linkedin contacto-contenido-icono" id="i2"></i>
        <p class="contacto-contenido-titulo">Linkedin</p>
        <Button
          label="Contactar"
          class="p-button-link contacto-contenido-contactar"
          @click="contactarLinkedin()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-comment contacto-contenido-icono" id="i3"></i>
        <p class="contacto-contenido-titulo">Gmail</p>
        <Button
          label="Contactar"
          class="p-button-link contacto-contenido-contactar"
          @click="contactarGmail()"
        />
      </div>
    </div>
  </div> -->

  <!-- <div v-if="$store.state.idioma.code == 'IN'">
    <h1 class="separador-titulo">Contact me</h1>
    <div class="contacto">
      <div class="contacto-contenido">
        <i class="pi pi-whatsapp contacto-contenido-icono" id="i1"></i>
        <p class="contacto-contenido-titulo">WhatsApp</p>
        <Button
          label="Contact"
          class="p-button-link contacto-contenido-contactar"
          @click="contactarWhatsApp()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-linkedin contacto-contenido-icono" id="i2"></i>
        <p class="contacto-contenido-titulo">Linkedin</p>
        <Button
          label="Contact"
          class="p-button-link contacto-contenido-contactar"
          @click="contactarLinkedin()"
        />
      </div>

      <div class="contacto-contenido">
        <i class="pi pi-comment contacto-contenido-icono" id="i3"></i>
        <p class="contacto-contenido-titulo">Gmail</p>
        <Button
          label="Contact"
          class="p-button-link contacto-contenido-contactar"
          @click="contactarGmail()"
        />
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  },

  methods: {
    async contactarWhatsApp() {
      let mensaje = `¡Hola Fernando!"`;

      mensaje = mensaje + "\n";

      mensaje =
        mensaje +
        " Te envío este mensaje porque estoy interesado en contactarme con vos por motivos laborales, por favor contactame a la brevedad ";

      mensaje = mensaje + "\n";

      mensaje = mensaje + "¡¡¡Saludos!!!";

      let url = encodeURI("https://wa.me/" + 3843407142 + "?text=" + mensaje);

      window.open(url, "_blank");
    },

    async contactarLinkedin() {
      let url = "https://www.linkedin.com/in/fernandogonzalez2021/";

      window.open(url, "_blank");
    },

    async contactarGmail() {
      let url = "mailto:fernandojaviergonzalez2018@gmail.com";

      window.open(url, "_blank");
    },
  },
};
</script>

<style>
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .separador {
    margin: 30px;
  }

  .saludo {
    text-align: center;
    margin-top: 20px;
  }

  .nombre {
    color: #90745c;
    font-size: 40px;
  }

  .img-descripcion {
    margin-top: 20px;
    display: flex;
  }

  .div-img {
    margin: auto;
  }

  .img {
    height: 50vh;
    margin: auto;
    padding: 10px;
  }

  .div-descripcion {
    margin: auto;
    /* border: 1px solid red; */
  }

  .descripcion {
    padding: 10px;
    text-align: center;
  }

  .div-eleccion {
    display: flex;
  }

  .eleccion {
    width: 33%;
    /* margin: auto; */
    /* border: 1px solid red; */
  }

  .eleccion-contenido {
    text-align: center;
    padding: 10px;
    word-wrap: break-word;
  }

  .card {
    background-color: #090909;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    border: 1px solid #90745c;
    height: 100%;
    word-wrap: break-word;
  }

  .card:hover {
    background-color: #212121;
  }

  .card-titulo {
    color: #90745c;
    font-size: calc(1em + 0.5vw);
  }

  .card-contenido{    
    font-size: calc(0.5em + 0.5vw);
  }

  .separador-titulo {
    color: #90745c;
    text-align: center;
    font-size: 40px;
  }

  .contacto {
    display: flex;
  }

  .contacto-contenido {
    margin: auto;
    text-align: center;
    /* border: 1px solid red; */
    transition: 2s;
  }

  .contacto-contenido:hover .contacto-contenido-icono {
    font-size: 5rem;
    transition: 0.5s;
  }

  .contacto-contenido:hover #i1 {
    color: #25d366;
  }

  .contacto-contenido:hover #i2 {
    color: #0077b5;
  }

  .contacto-contenido:hover #i3 {
    color: #c71610;
  }

  .contacto-contenido-icono {
    color: #90745c;
    font-size: 3rem;
  }

  .contacto-contenido-titulo {
    font-size: 20px;
  }

  .contacto-contenido-contactar {
    text-decoration: none !important;
    color: white !important;
  }

  .contacto-contenido-contactar:hover {
    text-decoration: none !important;
    color: #90745c !important;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .saludo {
    text-align: center;
  }

  .nombre {
    color: #90745c;
    font-size: 40px;
  }

  .img-descripcion {
    display: block;
  }

  .div-img {
    margin: auto;
  }

  .img {
    height: 50vh;
    display: block;
    margin: auto;
  }

  .div-descripcion {
    margin: auto;
    /* border: 1px solid red; */
  }

  .descripcion {
    padding: 10px;
    text-align: center;
  }

  .div-eleccion {
    display: block;
  }

  .eleccion {
    margin: auto;
  }

  .eleccion-contenido {
    text-align: center;
    padding: 20px;
  }

  .card {
    background-color: #090909;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    border: 1px solid #90745c;
    min-height: 55vh;
  }

  .card:hover {
    background-color: #212121;
  }

  .card-titulo {
    color: #90745c;
  }

  .separador-titulo {
    color: #90745c;
    text-align: center;
    font-size: 40px;
  }

  .contacto {
    display: block;
  }

  .contacto-contenido {
    margin: auto;
    text-align: center;
    /* border: 1px solid red; */
    transition: 2s;
  }

  .contacto-contenido-icono {
    color: #90745c;
    font-size: 3rem;
  }

  .contacto-contenido-titulo {
    font-size: 20px;
  }

  .contacto-contenido-contactar {
    text-decoration: none !important;
    color: white !important;
  }

  .contacto-contenido-contactar:hover {
    text-decoration: none !important;
    color: #90745c !important;
  }
}
</style>

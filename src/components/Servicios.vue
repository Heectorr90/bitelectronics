<template>
  <v-container id="servicios" class="py-10">
    <h2 class="text-h4 text-center mb-6">Nuestros Servicios</h2>
    <v-row justify="center">
      <v-col cols="12" md="4" v-for="(s, i) in servicios" :key="i">
        <v-card>
          <v-card-title class="text-primary">{{ s.titulo }}</v-card-title>
          <v-card-text>{{ s.descripcion }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const servicios = [
  {
    titulo: "Soporte Técnico",
    descripcion: "Soluciones para equipos y software",
  },
  { titulo: "Redes y Cableado", descripcion: "Instalación y mantenimiento" },
  { titulo: "CCTV y Seguridad", descripcion: "Sistemas de videovigilancia" },
];
</script>

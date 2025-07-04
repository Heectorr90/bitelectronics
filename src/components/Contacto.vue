<template>
  <v-container id="contacto" class="py-10">
    <h2 class="text-h4 text-center mb-6">Contáctanos</h2>
    <v-form>
      <v-text-field label="Nombre" required />
      <v-text-field label="Correo" required />
      <v-textarea label="Mensaje" required />
      <v-btn color="primary" class="mt-4">Enviar</v-btn>
    </v-form>
  </v-container>
</template>

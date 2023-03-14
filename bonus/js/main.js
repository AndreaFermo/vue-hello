 const { createApp } = Vue

  createApp({
    data() {
      return {
        messaggio: 'Benvenuto dal Team di Boolean',
        immagine: 'img/Logo.png',
        bottone: 'Smash the button!',
        count: 0
      }
    }
  }).mount('#app')
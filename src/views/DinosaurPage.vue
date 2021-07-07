<template>
  <div :class="theme" :style="{ color: theme.color }"> 
  <h1>{{theme.title}}</h1>
  <p>Sorry all dinosaurs went extinct</p>
  <p>Please come back later</p>
  </div>
</template>
<script>

export default {
  name: 'Dinosaur',
   data() {
        return {
          theme:{
              title: 'Dino Page',
              color: '#A52A2A'
          }
        }
   }
}
</script>

<template>
 <div :style="{ color: theme.color }"> 
  <h1>{{theme.title}}</h1>
  <p>Coming soon, please comeback later</p>
  </div>
</template>
<script>

export default {
  name: 'Ocean',
  components: {
  },
   data() {
        return {
          theme:{
              title: 'Ovean Life',
              color: '#42c0f3'
          }
        }
   }
}
</script>
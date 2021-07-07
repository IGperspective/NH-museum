<template>
 <div :style="{ color: theme.color }"> 
  <h1>{{theme.title}}</h1>
   <p>Coming soon, please comeback later</p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Wildlife',
  data() {
        return {
          theme:{
              title: 'Wild Life',
              color: '#42b983'
          }
        }
   }

}
</script>
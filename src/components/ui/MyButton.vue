<template>
 <button class="btn">
        <slot></slot>
     </button>   
</template>

<script>
export default {
name: 'my-button'    
}
</script>

<style scoped>

.btn{
  align-self: flex-end;
  width: 228px;
  height: 40px;
  background-color: #5AB910;
  color: #ffffff;
  border: none;
  border-radius: 9px;
}
</style>
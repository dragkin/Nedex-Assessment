<template>
    
        <div class="card ">
            <h2 class="card-title text-center" :class="{'text-warning':nearExpiry}">{{foodName}}</h2>
            <h5 class="card-text text-center">Expiry:{{foodExpiry}}</h5>
            <h5 class="card-text text-center"> Expired/Expired in 30 days? {{nearExpiry ? 'Yes':"No" }}</h5>
          
           
        </div>
    
</template>

<script>
export default {
    props:['nearExpiry','foodName','foodExpiry'],
    
  
    
   
}
</script>

<style>
  .card{
        width: 18rem;
       }
</style>

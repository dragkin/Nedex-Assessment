<template>
    <div class="container wrapper d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-info">Ingredients List</h1>
        
            <ingredients-list class="justify-content-center"  
            v-for="(ingredient,index) in sortedItems"
            :key="index"
            :food-name="ingredient.food"
            :food-expiry="ingredient.expiryDate"
            :near-expiry="ingredient.nearExpiry"
            ></ingredients-list>
           
    </div>
</template>

<script>
export default {
    data(){
        return{
             ingredients:[
            {
                food:'CARROT',
                expiryDate:'2020-12-12',
                nearExpiry:false
            },
            {
                food:'PAPAYA',
                expiryDate:'2018-1-15',
                nearExpiry:false
            },
            {
                food:'ORANGE',
                expiryDate:'2021-10-13',
                nearExpiry:false
            },
            {
                food:'CHICKEN',
                expiryDate:'2019-4-23',
                nearExpiry:false
            },
            {
                food:'MEAT',
                expiryDate:'2021-5-23',
                nearExpiry:true
            }, 
            {
                food:'RICE',
                expiryDate:'2021-2-23',
                nearExpiry:true
            },
            {
                food:'CHOCOLATE',
                expiryDate:'2021-1-20',
                nearExpiry:true
            },
             
            ],
            timenow:new Date().getTime()
            
        }
       
    },
    computed: {
        sortedItems() {
            return this.ingredients.slice().sort( ( a, b) => {
                return new Date(a.expiryDate)- new Date(b.expiryDate);
            }).map((ingredient) => {
                        
                        const expiryDate = new Date(ingredient.expiryDate).getTime()

                        return { ...ingredient,nearExpiry: ( expiryDate - this.timenow) < (30 * 24 * 60 * 60 * 1000) }
                    });
        },
      
    },
    
}
</script>
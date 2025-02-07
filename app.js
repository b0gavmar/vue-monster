const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
        }
    },
    watch:{
        monsterHealth(value){
            if(value===0){

            }
        }
    },
    methods:{
        playerAttack(){
            const attack = getRandomNumber(5,12);
            this.monsterHealth=Math.max(this.monsterHealth-attack,0);
        }
    }
});
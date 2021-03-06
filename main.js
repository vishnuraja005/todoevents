var app = new Vue({
    el:'#next',
    data:{
weekday:'',
weekdy: [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
    
],
month:'',
months:[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
   "September",
   "October",
   "November",
   "December",
],
message:'',
lists:[],

class:false    },

    mounted:function(){
     
    var weekdays = this.weekdy   [new Date().getDay()]
    var date= new Date().getDate();
    this.weekday =  weekdays + "," + date + "th"
     var mont = this.months[new Date().getMonth()]
     this.month = mont;
     var event = localStorage.getItem('events')
     if (event != null) {
       this.lists = JSON.parse(event)
     }
    },

methods:{
    submit(lists){ 
        if(new Date().getHours()>12){
var noon = 'P.M'

    }else{
var noon = 'A.M'    
    }
   var hrs= new Date().getHours()%12
if(new Date().getHours()%12==0){
    var hrs=12
}
if(this.message==''){
alert("please enter the valid input")
}else
{
        this.lists.push({
       id:this.lists.length+1,
 title:this.message,
 lines:false,

time: hrs+'.'+new Date().getMinutes()  +noon  

        })
        this.message='',
        localStorage.setItem('events', JSON.stringify(this.lists))

}
    },
completed(lists) {
lists.lines = ! lists.lines;
var audio = new Audio('applause8.mp3')
if(lists.lines===true)
{
    audio.play();
}

},

clears(index){
this.lists.splice(index,1)
localStorage.setItem('events', JSON.stringify(this.lists))

},
clearfunction(index){
    this.lists.splice(index)
    localStorage.setItem('events', JSON.stringify(this.lists))

},

}
})
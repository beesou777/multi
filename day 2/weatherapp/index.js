const button = document.querySelector(".button")
const input = document.querySelector(".inputFeild")
const name = document.querySelector('.name')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const humidity = document.querySelector(".humi")

button.addEventListener('click',(e)=>{
    const getData = async ()=>{
    e.preventDefault()
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=`+input.value+ `&appid=9a632de86995baf66d4fc3dbcd172043`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    
    const nameValue = data['name']
    const tempValue = data['main']['temp']
    const descValue = data['weather'][0]['description']
    const humiValue = data['main']['humidity']
    const situationValue = data['main']['temp']
    
    
    
    name.innerHTML = nameValue
    temp.innerHTML = tempValue
    desc.innerHTML = descValue
    humidity.innerHTML = humiValue
    //for hot cold
    
    if(situationValue >313.15){
        document.getElemetById("haha").innerHTML = 'very hot';
    }else if(situationValue < 300 && situationValue > 313.15){
        console.log("else")
        document.getElementById("haha").innerHTML = 'warn';
    }else{
        document.getElementById("haha").innerHTML = 'cold';

    }

    
   
}
getData()
})

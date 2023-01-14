import theme from './theme.js'
theme()


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols =  ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const checkboxNum = document.getElementById('numbers')
const checkboxSym = document.getElementById('symbols')

const btn = document.getElementById('btn')
const input = document.querySelector('.input-number')

const passOne = document.getElementById('passOne')
const passTwo = document.getElementById('passTwo')

const passWordOneContainer = document.querySelector('#passWordOne')

const passWordTwoContainer = document.querySelector('#passWordTwo')

async function copyText(element){
    const text = element.textContent
     
   await navigator.clipboard.writeText(text)
    alert('Text copied')
   
}



passWordOneContainer.addEventListener('click', () => copyText(passOne))
passWordTwoContainer.addEventListener('click', () => copyText(passTwo))


// creating a function that loops over the symbols/numbers arrays
// and add one of these arrays or
// both of them to the original array

function loop(array){
    for(let i = 0; i < array.length; i++){
        characters.push(array[i])
    }  
}
// creating a function that removes the number/symbols arrays 
//when the use uncheck the checkboc
function indexNumbers(index){
    const indexNum = characters.indexOf(index)
    
    if(indexNum > -1) characters.splice(indexNum)   
}


checkboxSym.addEventListener('click',function(){

    if(checkboxSym.checked) loop(symbols)
        
    else{
         indexNumbers("~")
    }
    
})



checkboxNum.addEventListener('click',function(){

    if(checkboxNum.checked) loop(numbers)
    
    else{
        indexNumbers('0')
    } 
 })





function generatePassWord(value){
    if(input.value <= 0){
        alert('please enter the length of a password')
        
    }else{
        let passWord = ''
        let passWord2 = ''
        
        //looping by the number the user want 
        //each iteration a random charecter is added to the password variables
        for(let i = 0; i < value; i++){
            passWord +=
                characters[Math.floor(Math.random()*characters.length)]
    
            passWord2 +=
                characters[Math.floor(Math.random()*characters.length)]
        }
            
            // displaying the password
            passOne.textContent = passWord
            passTwo.textContent = passWord2
    }
   
 
}


btn.addEventListener('click',() => generatePassWord(input.value))



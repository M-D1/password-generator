// javascript
function theme(){
const spanContainr = document.querySelector('.span-container');
const span = document.querySelector('#span')
const body = document.body
console.log(body)
// console.log(span)

 let theme = 'light'

 

spanContainr.addEventListener('click',function(){
     
    
    if(theme == 'light'){
        theme = 'dark'
    }else{
        theme = 'light'
    }
  
    
     const white = document.querySelectorAll('.color')
      
     white.forEach(color => {
     
         if(theme == 'light'){
            color.classList.remove('white')
            span.classList.remove('light')
            span.classList.add('dark')
         }else{
            color.classList.add('white')
            span.classList.remove('dark')
            span.classList.add('light')
         }
     })
       
       body.style.backgroundColor = theme == 'light'? '#ECFDF5' : '#222'
       
      
})
}

export default theme

const txt_area = document.getElementById('desencriptar');
const error=document.getElementById('error');
const encripta=document.getElementById('encripta');
const desen=document.getElementById('desec');


//let reg=/[A-ZÑ][áéíóú][ÁÉÍÓÚ]/;
let reg=/^[a-z]+$/;





function captura(){

    let encriptar = document.getElementById("encripta").value;
    console.log(encriptar);

    if(reg.test(encriptar)){


        console.log('validacion texto',reg.test(encriptar));

        error.setAttribute('class','error');
        encripta.setAttribute('class','texto');   
        
        desen.removeAttribute('disabled');
        
        
       
    
       /* let texto = encriptar.replaceAll('a','ai').replaceAll('e','enter').replaceAll('i','imes')
                    .replaceAll('o','ober').replaceAll('u','ufat'); */
    
                    let texto = encriptar.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai')
                    .replaceAll('o','ober').replaceAll('u','ufat');   
    
                    document.getElementById('muestra').value = texto;
                    
                    document.getElementById('muestra').style.background = "white"
                   /* document.getElementById('muestra').createElement('input').setAttribute('type','button').setAttribute('value','copiar');*/
                    document.getElementById('encripta').value='';
    
                   
                    
    
                    const btn_copiar = document.createElement('button');
                    
                    btn_copiar.textContent="copiar"
                    
                    btn_copiar.setAttribute("class","copiar");
                    btn_copiar.setAttribute("id","copiar");
                   
    
                    txt_area.appendChild(btn_copiar);
                    const copiar=document.getElementById("copiar");
    
                    const mitexto=document.getElementById("muestra");
                   
    
                    copiar.addEventListener('click',()=>{
                       
                        
                        
                        navigator.clipboard.writeText(muestra.value)
                        const txt_copiado =document.createElement('p');
                        txt_copiado.textContent="COPIADO"
                        txt_copiado.setAttribute("class","text_copiar");
                        txt_copiado.setAttribute("id","texto_copiado");
    
                        txt_area.appendChild(txt_copiado);
    
                        document.getElementById('texto_copiado')
                        setTimeout(() => {
                            
                            txt_copiado.classList.add("text_copiar2")
                            
                        }, 3000);
                        
    
                        
                    })
        
    
    

   

                }else{
                    console.log(encriptar.value)
                    console.log('aquí muestra validacion',reg.test(encriptar))
                    

                    error.setAttribute('class','muestraerror');
                    encripta.setAttribute('class','textoerror');
                    

                }

              

                
            }
                

                

                
               
               
                
    

  

function desencriptar(){
    
    let encriptar = document.getElementById("encripta").value;
    console.log(encriptar);

    let texto = encriptar.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i')
                .replaceAll('ober','o').replaceAll('ufat','u');

                document.getElementById('muestra').value = texto;
                
                document.getElementById('muestra').style.background = "white"
               /* document.getElementById('muestra').createElement('input').setAttribute('type','button').setAttribute('value','copiar');*/
                document.getElementById('encripta').value='';

            /*const txt_area = document.getElementById('desencriptar');
                var btn_copiar = document.createElement('button');
                btn_copiar.textContent="copiar"
                btn_copiar.setAttribute("class","copiar");
                txt_area.appendChild(btn_copiar); */

              /*      const btn_copiar = document.createElement('button');
             btn_copiar.textContent="copiar"
                btn_copiar.setAttribute("class","copiar");
                btn_copiar.setAttribute("id","copiar");


               const copiar = document.getElementById('copiar');

                copiar.addEventListener('click',()=>{

                    alert("angela");
                }) */

               
               
                
    



  
}




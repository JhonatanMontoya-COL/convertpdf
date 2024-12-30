console.log("conectado")
function generatePdf() {
/*


   var { jsPDF } = window.jspdf

    var doc = new jsPDF()

    let comentario = document.getElementById("textarea").value
    let img = ('./mario.png')
    
    doc.text(nombre, 10 , 10) 
    doc.text(apellido, 10 , 20) 
    doc.text(comentario, 10 , 30) 
    
    
    if(nombre === "" ){
        alert('Por favor ingrese su nombre real')
        } else if(apellido === ""){
            alert('Por favor ingrese su apellido real')
            }
            else if(comentario === ""){
                doc.text("El usuario no puso comentarios", 10, 40)
                doc.save("pruebaTrueMasterSinComentarios.pdf")
                }else { doc.addImage(img, 'PNG', 10, 50, 50, 50) , doc.save("pruebaTrueMaster.pdf")}
                
                
                */

   let nombre = document.getElementById("nombre").value
   let apellido = document.getElementById("apellido").value

   if(nombre === "" ){
    alert('Por favor ingrese su nombre real')
    } else if(apellido === ""){
        alert('Por favor ingrese su apellido real')
        }else { html2pdf()
                .from(content)
                .set({
                    margin: 12,        
                    filename: 'TrueMaster.pdf', 
                    html2canvas: { scale: 2 },  
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                })
                .save();}
}



 
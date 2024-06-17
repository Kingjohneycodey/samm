

function setProduct(type, id){
    sessionStorage.setItem("activeProduct", id)
    sessionStorage.setItem("activeType", type)

    if(type == 1){
        location.href = "../product/afro-oasis.html"
    }   else  if(type == 2){
        location.href = "../product/agbada.html"
    }else  if(type == 3){
        location.href = "../product/dashiki.html"
    }else  if(type == 4){
        location.href = "../product/eleganza.html"
    }
}




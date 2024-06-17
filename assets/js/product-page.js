const image = document.getElementById("product-zoom");
const price = document.getElementById("price");
const description = document.getElementById("description");

function getProduct() {
  const activeProduct = sessionStorage.getItem("activeProduct");
  const activeType = sessionStorage.getItem("activeType");

  if (activeType == 1) {
    description.innerHTML =
      "A vibrant collection celebrating African fashion and style, with bold colors, intricate patterns, and modern silhouettes.";

    if (activeProduct == 1) {
      image.src =
        "../assets/images/Afro Oasis/4dcf4505-8141-4add-aef9-d0df23c2ec72.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 2) {
      image.src =
        "../assets/images/Afro Oasis/805d9f6a-bdb1-41c8-af90-d1f547133c13.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 3) {
      image.src =
        "../assets/images/Afro Oasis/Anya Hindmarch - X Dye Lab Adire-dyed Cotton-blend Poplin Kaftan - Womens - Lime.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 4) {
      image.src =
        "../assets/images/Afro Oasis/fb01782f-4184-4517-b232-5f270c7e2e7a.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 5) {
      image.src = "../assets/images/Afro Oasis/Green Lagos Dress.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 6) {
      image.src =
        "../assets/images/Afro Oasis/Lagos Fashion Week 2022 _ Awa Miete _ BN Style.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 7) {
      image.src =
        "../assets/images/Afro Oasis/The Best Of Lagos Fashion Week _ Moda Operandi.jpeg";
      price.innerHTML = "900";
    }
  } else if (activeType == 2) {
    description.innerHTML = `A sophisticated collection of luxurious agbada wear, with opulent fabrics, precise tailoring, and regal flair.`;

    if (activeProduct == 1) {
      image.src =
        "../assets/images/Agbada/33 Latest Agbada Style Inspos To Make You More Stylish For Your Next Event.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 2) {
      image.src =
        "../assets/images/Agbada/A white agbada, grey embroidery detailing, 3_4 sleeve buba & sokoto.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 3) {
      image.src =
        "../assets/images/Agbada/Agbada Styles for men - Zanaposh.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 4) {
      image.src = "../assets/images/Agbada/Best Agbada Design For Men.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 5) {
      image.src =
        "../assets/images/Agbada/Luxury Black Agbada _ Custom Sizing _ Black - XL US Letter.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 6) {
      image.src =
        "../assets/images/Agbada/MG Prestige 3 Piece Yoruba Agbada Traditional Clothing AGP14 - XS.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 7) {
      image.src =
        "../assets/images/Agbada/Yinka African Agbada Set for Men With Matching Shirt and Pant, for Wedding Suits, Prom Men Outfits - Etsy.jpeg";
      price.innerHTML = "900";
    }
  } else if (activeType == 3) {
    description.innerHTML = `A luxurious take on the classic dashiki, with rich fabrics, elegant embroidery, and refined designs.`;

    if (activeProduct == 1) {
      image.src =
        "../assets/images/dashiki/5112ce4a-0b84-4e46-a4f3-a7ced3d6c282.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 2) {
      image.src =
        "../assets/images/dashiki/53e5157d-285c-4e12-91c1-8a9364df9716.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 3) {
      image.src =
        "../assets/images/dashiki/Black African Men's Outfits, Shirts Matching Pants, Wedding Guest Groomsmen Suits, Men's Wear Fashion, Fashions Embroidery Buba and Sokoto - Etsy.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 4) {
      image.src = "../assets/images/dashiki/BOLA DANSHIKI.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 5) {
      image.src =
        "../assets/images/dashiki/Grass-Fields.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 6) {
      image.src =
        "../assets/images/dashiki/Mud Cloth Dashiki.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 7) {
      image.src =
        "../assets/images/dashiki/Sleeveless Woven Dashiki Poncho.jpeg";
      price.innerHTML = "900";
    }
  } else if (activeType == 4) {
    description.innerHTML = `A sophisticated collection inspired by the vibrant city of Lagos, with modern designs, bold colors, and luxurious fabrics`;

    if (activeProduct == 1) {
      image.src =
        "../assets/images/Eleganza Lagos/86cbf01c-42f3-4851-91c7-eb3bf97263df.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 2) {
      image.src =
        "../assets/images/Eleganza Lagos/A Bronx Fashion Story.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 3) {
      image.src =
        "../assets/images/Eleganza Lagos/City of Joy _ Vlisco fashion news.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 4) {
      image.src = "../assets/images/Eleganza Lagos/Good morning Africa.jpeg";
      price.innerHTML = "900";
    } else if (activeProduct == 5) {
      image.src =
        "../assets/images/Eleganza Lagos/Meet Tchiana Tchicou-Pembey The Congolese Designer Paying Homage To Africa.jpeg";
      price.innerHTML = "900";
    } 
  }
}

getProduct();

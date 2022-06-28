const productDom =document.querySelector('.products-center');
const cartContent = document.querySelector('cart-content')

class Products{
    async fetchProducts(){
       try{
        const res = await fetch('../data/dat.json');
        let data = await res.json();
       let productData = data.items.map((me) => {
            const { title, price, type, rating} = me.fields
            const id = me.id;
            const imageUrl = me.fields.image.url
            return {title, price, type, rating, imageUrl}
        })
        return productData
       }
       catch(e){
        console.log(e);
       }
    }
}

class UserInterface{
    insertProductsInDom(productArray){
        let productHtml=""
        productArray.forEach((ele) => {
            productHtml = productHtml+ `
            <section>
            <div class="img-container">
                <img src="${ele.imageUrl}" class="product-img">
                <button class="bag-btn">Add to Cart</button>
                <p>${ele.title}</p>
            </div>
            <div>
            <h4 class="light">${ele.type}</h4>
            <h4 class="price">${ele.price}</h4>
            <h4 class="rating">${ele.rating}</h4>
</div>
            </section>

            `
        })
        productDom.innerHtml =productHtml

    }
}
let product= new Products();
let ui = new UserInterface();



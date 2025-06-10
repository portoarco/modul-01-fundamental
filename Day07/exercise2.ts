/*
EXERCISE 2 
 ● Create a program to create transaction
 ● Product Class
    ○ Properties
        ■ Name
        ■ Price
 ● Transaction Class
    ○ Properties
        ■ Total
        ■ Product
            ● All product data
            ● Qty
    ○ Add to cart method → Add product to transaction
    ○ Show total method → Show total current transaction
    ○ Checkout method → Finalize transaction, return transaction data
*/ 

class ProductInfo{
    prdName:string;
    prdPrice:number;

    constructor(prdName:string,prdPrice:number){
        this.prdName = prdName
        this.prdPrice = prdPrice
    }

    addtoCart(prdName:string,prdPrice:number){
        this.prdPrice += prdPrice
    }
    showTotal(){}
    coPayment(){}
}


// class TransactionInfo{
//     allPrd:number;
//     totalQty:number;

//     constructor()

// }

const product1 = new ProductInfo ('Mi Goreng',20000)
const product2 = new ProductInfo ('Mi Jamur',15000)
console.log(product1); //testing 1   



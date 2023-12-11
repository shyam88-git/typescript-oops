//contracts

interface ProductContracts{

    Name:string;
    Price:number;
    Qty:number;
    total():number;
    print():void
}

class ProductTemplate implements ProductContracts{


    Name:"Samsung";
    Price:45000.44;
    Qty: 24;
    total(){

        return this.Price*this.Qty;
    }

    print(){

        console.log(`Name=${this.Name}\n Price=${this.Price}\n Qty=${this.Qty}\n total=${this.total()} `);
    }
}

let p=new ProductTemplate();
p.print();
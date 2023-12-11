interface interface1{

    sub_first:string,
}

class Class_Eight implements interface1{

    sub_first: string="React JS with Typescript";
}

let obj8:Class_Eight=new Class_Eight();
console.log(obj8.sub_first);
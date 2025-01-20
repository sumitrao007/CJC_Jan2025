 class Myclass{
    public id:number;
    private fname:string;
    protected lname:string;


    constructor(id:number,f:string,l:string){

        this.id=id;
        this.fname=f;
        this.lname=l;
    }
      

    display(){
        console.log(`
            ID         :: ${this.id}
            First Name :: ${this.fname}
            Last Name  :: ${this.lname}    
        `)
    }

}

let obj=new Myclass(9,"Sumit","Raokhande");
obj.display();
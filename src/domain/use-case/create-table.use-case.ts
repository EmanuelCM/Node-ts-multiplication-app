

export interface CreateTableUseCase{

    execute:(options:CreateTableOptions)=>string;

}

export interface CreateTableOptions{
    base:number;
    limit?:number;
}


export class CreateTable implements CreateTableUseCase{


    constructor() {
        /* 
        /DI - dependency injection
        ... */
    }

    execute({base,limit=10}:CreateTableOptions){
        let tabla='';


        for( let i=1 ; i<=limit; i++){
            const resultado=base*i;
              tabla+=`${base} x ${i} = ${resultado}\n`;
          }
          return tabla


    }

    

}




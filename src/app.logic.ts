import { transferableAbortSignal } from "util";
import { yarg } from "./config/plugins/yargs.plugin";

console.log(yarg);

const fs = require('fs');



    const calculadora=(base:number,limit:number)=>{
        let tabla:string='================================\n';
        tabla +=    '             Tabla del 5       \n';
                     tabla+='================================\n';

        for( let i=1 ; i<=limit; i++){
          const resultado=base*i;
            tabla+=`${base} x ${i} = ${resultado}\n`;
        }
        return tabla
    }

    const saveFileSystem=(tablaTexto:string,nombre:string)=>{

    const output='outputs'
    fs.mkdirSync(output,{recursive:true});
    fs.writeFileSync(`${output}/tabla-${base}.txt`, tablaTexto,'utf8');
   

    }
    

const {b:base,l:limit,s:showTable}=yarg;
let tablaTexto:string=calculadora(base,limit);
saveFileSystem(tablaTexto,base.toString());



(showTable)
 ? console.log(tablaTexto)
 : console.log('Tabla creada')




//grabar en fs 


// const output='outputs'
// fs.mkdirSync(output,{recursive:true});
// fs.writeFileSync(`${output}/tabla-${base}.txt`, tablaTexto,'utf8');
// console.log(tablaTexto);

const fs = require('fs');

export interface SaveFileUseCase{

    excute:(options:Options)=>boolean;

}

export interface Options {
    fileContent:string;
    fileDestination?:string;
    fileName? :string;

}
export class SaveFile implements SaveFileUseCase{

    constructor (


    ){}

    excute({
        fileContent,
        fileDestination,
        fileName='table'
    }:Options):boolean{
    
        try {
        
            fs.mkdirSync(fileDestination,{recursive:true});
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent,'utf8');
            console.log('File Created');
            return true
        } catch (err) {
            console.error(err);
            return false
        }

    }


}



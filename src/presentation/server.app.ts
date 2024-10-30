import { CreateTable } from "../domain/use-case/create-table.use-case";
import { SaveFile } from "../domain/use-case/save-file.use-case";


interface RunOptions{

    base:           number;
    limit:          number;
    showTable:      boolean;
    fileDestination:string;
    fileName:       string;
}

export class ServerApp{


    static run({base,limit,showTable,fileName,fileDestination}:RunOptions){
        
        console.log('Server running');

        const table= new CreateTable().execute({base,limit});
        const wasCreated=new SaveFile()
        .excute({
            fileContent:table,
            fileDestination:fileDestination,
            fileName:fileName

        });

        if(showTable)console.log(table);

        (wasCreated)
        ? console.log('Table created')
        : console.error('Table not created')
    }
}
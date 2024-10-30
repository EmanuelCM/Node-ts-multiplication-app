import yargs from 'yargs';
import{hideBin} from 'yargs/helpers';

export const yarg=yargs(process.argv)
.options('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Multiplication table base'
})
.options('l',{
    alias:'limit',
    type:'number',
    default:10,
    describe:'Multiplication table limit'
})
.options('s',{
    alias:'show',
    type:'boolean',
    default:false,
    describe:'Show multiplication table'

})
.options('n',{
    alias:'name',
    type:'string',
    default:'multiplication-table',
    describe:'File Name',
    
 })
.options('d',{
    alias:'destination',
    type:'string',
    default:'outputs',
    describe:'File Destination'
})
.check((argv,option)=>{

    if(argv.b<1) throw'Error:base must be greater than 0';

    return true;

})
.parseSync();





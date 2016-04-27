import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
    name: 'truncate'
})
export class TruncatePipe {
    transform(value: string, args: string[]) : string {

       // console.log(args.length);
        // TODO: Need to fix args length
        let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
        let trail = args.length > 1 ? args[1] : '...';

        return value.length > limit ? value.substring(0, limit) + trail : value;

    }
}
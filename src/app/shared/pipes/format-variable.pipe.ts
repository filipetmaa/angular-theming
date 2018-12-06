import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatVariable' })
export class FormatVariablePipe implements PipeTransform {
    transform(variable: string): string {
        return variable.toLowerCase().split('-').filter(String)
            .map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
    }
}
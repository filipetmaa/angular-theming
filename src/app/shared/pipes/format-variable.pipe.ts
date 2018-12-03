import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatVariable' })
export class FormatVariablePipe implements PipeTransform {
    transform(variable: string): string {
        return variable.replace(/-/g, " ").trim();
    }
}
import * as _ from 'lodash'
export function Template(template: string) {
    return (target: any, key: string, descriptor) => {
        const originMethod = descriptor.value;
        const compiled = _.template(template.split(/\n/).map(o => o.trim()).join("\n"));

        descriptor.value = async function (...args: any[]) {
            const result =  await originMethod.apply(this, args);
            return compiled(result)
        };
        return descriptor;
    }
}


import * as _ from 'lodash'
export function Template(template: string) {
    return (target: any, key: string, descriptor) => {
        let originMethod = descriptor.value;
        const compiled = _.template(template.trim());

        descriptor.value = async function (...args: any[]) {
            const result =  await originMethod.apply(this, args);
            return compiled(result)
        };
        return descriptor;
    }
}


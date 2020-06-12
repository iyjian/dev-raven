export function Template(template: Function) {
    return (target: any, key: string, descriptor) => {
        const originMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const result =  await originMethod.apply(this, args);
            return template(result).split(/\n/).map(o => o.trim()).join('\n').trim()
        };
        return descriptor;
    }
}

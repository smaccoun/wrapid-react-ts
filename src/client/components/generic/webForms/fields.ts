export interface Field {
    label: string,
    value: string,
    related?: Array<string>,
    placeholder?: string,
    rules?: string,
    bindings?: string
}
export type NullString = string | null
export type UndefinedNullString = NullString | undefined
export type KeyObject = { [key: string]: string | number | boolean | null | object } & object
export type KeyStringObject = { [key: string]: string } & object

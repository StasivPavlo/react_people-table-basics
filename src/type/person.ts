export interface Person {
  name: string,
  sex: string,
  born: number,
  died: number,
  motherName: string,
  fatherName: string,
  mother: Person | undefined,
  father: Person | undefined,
}
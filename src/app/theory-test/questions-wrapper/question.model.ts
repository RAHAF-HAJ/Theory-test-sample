interface Answer {
  text: string,
  translated_text: string,
  img: string
}

export class Question{
  constructor(
  public id: number,
  public text: string,
  public translated_text: string,
  public img: string,
  public answers: Answer[],
  public correct_answer: number,
  public user_answer: number = -1
  ){}
}

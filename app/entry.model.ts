export class Entry {
  public name: string;
  public description: string;
  public calories: number;
  public category: string;

  constructor(public entryDetails: any[]) {
    this.name = entryDetails[0];
    this.description = entryDetails[1];
    this.calories = entryDetails[2];
    this.category = entryDetails[3];
  }
}

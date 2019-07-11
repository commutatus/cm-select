export class Options {
  filter: boolean;
  image: boolean;
  imageUrlKey: string;
  single: boolean;

  constructor(option) {
    this.filter = option ? option.filter : false;
    this.image = option ? option.image : false;
    this.imageUrlKey = option ? option.imageUrl : null;
    this.single = option ? option.single : false;
  }
}

export class ItemType {
  id: number;
  value?: string;
  name: string;
  text?: string;
  checked?: boolean;
}


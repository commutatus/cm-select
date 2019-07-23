export class Options {
  filter: boolean;
  image: boolean;
  imageUrlKey: string;
  single: boolean;
  top: number;

  constructor(option) {
    this.filter = option ? option.filter : false;
    this.image = option ? option.image : false;
    this.imageUrlKey = option ? option.imageUrl : null;
    this.single = option ? option.single : false;
    this.filter = option ? option.top : 32;
  }
}

export class ItemType {
  id: number;
  value?: string;
  name: string;
  text?: string;
  checked?: boolean;
}


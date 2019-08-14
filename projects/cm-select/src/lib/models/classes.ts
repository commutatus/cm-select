export class Options {
  filter: boolean;
  image: boolean;
  imageUrlKey: string;
  single: boolean;
  top: number;
  loadingText: string;

  constructor(option) {
    this.filter = option ? option.filter : false;
    this.image = option ? option.image : false;
    this.imageUrlKey = option ? option.imageUrl : null;
    this.single = option ? option.single : false;
    this.top = option ? option.top : 32;
    this.loadingText = option ? option.loadingText || 'Loading ...' : 'Loading...';
  }
}

export class ItemType {
  id: number | string;
  value?: string;
  name: string;
  text?: string;
  checked?: boolean;
}


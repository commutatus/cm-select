import {Directive, ElementRef, EventEmitter, Input, Output, Renderer2} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Directive({selector: '[libSearchInput]'})
export class SearchInputDirective {

  q: string;
  searchInputUpdated: Subject<string> = new Subject();
  searchChangeEmitter: Observable<string>;

  @Input()
  set text(text: string) {
    this.q = text;
    this.searchInputUpdated.next(this.q);
  }

  get text(): string {
    return this.q;
  }

  @Output() inputChanged = new EventEmitter();

  constructor(elem: ElementRef, renderer: Renderer2) {
    this.subscribeToSearchInput();
  }

  subscribeToSearchInput() {
    this.searchChangeEmitter = this.searchInputUpdated.asObservable()
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      );

    this.searchChangeEmitter.subscribe(searchInput => {
      this.inputChanged.emit(searchInput);
    });
  }
}

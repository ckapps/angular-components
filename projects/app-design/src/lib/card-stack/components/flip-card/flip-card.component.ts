import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { map, mapTo, scan, startWith, switchMap } from 'rxjs/operators';

type FlipOn = 'hover' | 'click';

@Directive({
  selector: '[ckad-flip-card-front]',
})
export class CkadFlipCardFrontDirective {}

@Directive({
  selector: '[ckad-flip-card-back]',
})
export class CkadFlipCardBackDirective {}

@Component({
  selector: 'ckad-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CkadFlipCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() invert = false;
  @Input() flipOn: FlipOn = 'click';

  /**
   * Observable that emits when the card should be flipped
   */
  public flipped$?: Observable<boolean>;

  private readonly flipOnSubject = new Subject<FlipOn>();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.flipped$ = this.flipOnSubject.asObservable().pipe(
      startWith(this.flipOn),
      switchMap(flipOn =>
        this.getFlippedHandlers(flipOn).pipe(
          startWith(false),
          map(isFlipped => (this.invert ? !isFlipped : isFlipped)),
        ),
      ),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.flipOn && !changes.flipOn.firstChange) {
      this.flipOnSubject.next(changes.flipOn.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.flipOnSubject.complete();
  }

  getFlippedHandlers(flipOn: FlipOn): Observable<boolean> {
    const host = this.el.nativeElement;
    const clicked$ = fromEvent(host, 'click');
    const mouseEnter$ = fromEvent(host, 'mouseenter');
    const mouseLeave$ = fromEvent(host, 'mouseleave');

    const flipOnClick$ = clicked$.pipe(
      mapTo(1),
      scan((acc, cur) => acc + cur, 0),
      map(x => x % 2 !== 0),
    );

    const flipOnHover$ = merge(
      mouseEnter$.pipe(mapTo(true)),
      mouseLeave$.pipe(mapTo(false)),
    );

    switch (flipOn) {
      case 'click':
        return flipOnClick$;
      case 'hover':
        return flipOnHover$;
    }
  }
}

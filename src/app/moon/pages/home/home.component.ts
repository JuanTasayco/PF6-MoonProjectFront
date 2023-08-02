import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  BackGroundService,
  Background,
} from '../../services/background.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  /* administrar cambios de backgrounds por seccion y por tamaño del vw */
  currentBackground?: Background;
  pathBackground: string = '';
  private currentSubscription?: Subscription;
  ngOnInit(): void {
    this.currentSubscription =
      this.backgroundService.getNameComponent.subscribe((nameSection) => {
        if (nameSection) this.currentBackground = <Background>nameSection;
        this.detectSizeVw();
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', [''])
  detectSizeVw() {
    if (window.innerWidth <= 400) {
      this.pathBackground = this.currentBackground?.path.mobile ?? '';
    } else if (window.innerWidth <= 1200) {
      this.pathBackground = this.currentBackground?.path.tablet ?? '';
    } else {
      this.pathBackground = this.currentBackground?.path.desktop ?? '';
    }
  }

  constructor(
    private backgroundService: BackGroundService,
    private cdr: ChangeDetectorRef
  ) {}
}

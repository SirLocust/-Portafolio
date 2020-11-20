import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
})
export class SocialButtonComponent implements OnInit, AfterViewInit {
  @Input() urlSocialMedia = '';
  @Input() nameSocialMedia = '';
  @ViewChild('anchorButton', { read: ViewContainerRef, static: false })
  anchorButton: ViewContainerRef;
  showTooltip = false;

  constructor(private rederer: Renderer2) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.rederer.listen(
      this.anchorButton.element.nativeElement,
      'mouseenter',
      () => {
        this.showTooltip = !this.showTooltip;
      }
    );
    this.rederer.listen(
      this.anchorButton.element.nativeElement,
      'mouseleave',
      () => {
        this.showTooltip = !this.showTooltip;
      }
    );
  }
}

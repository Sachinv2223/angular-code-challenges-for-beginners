import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardComponent } from './card-component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have card element', () => {
    const card = debugElement.query(By.css('.card'));
    expect(card).toBeTruthy();
  });

  it('should render card body', () => {
    const body = debugElement.query(By.css('.card-body'));
    expect(body).toBeTruthy();
  });

  it('should display title when title is provided', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const titleEl = debugElement.query(By.css('.title'));
    expect(titleEl.nativeElement.textContent).toBe('Test Title');
  });

  it('should display subtitle when subtitle is provided', () => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();

    const subtitleEl = debugElement.query(By.css('.subtitle'));
    expect(subtitleEl.nativeElement.textContent).toBe('Test Subtitle');
  });

  it('should display icon when icon is provided', () => {
    component.icon = 'fas fa-star';
    fixture.detectChanges();

    const iconEl = debugElement.query(By.css('i'));
    expect(iconEl.nativeElement.classList.contains('fas')).toBe(true);
    expect(iconEl.nativeElement.classList.contains('fa-star')).toBe(true);
  });

  it('should call onIconClick when icon is clicked', () => {
    spyOn(console, 'log');
    component.icon = 'fas fa-star';
    fixture.detectChanges();

    const iconContainer = debugElement.query(By.css('.icon-container'));
    iconContainer.triggerEventHandler('click', null);

    expect(console.log).toHaveBeenCalledWith('Icon clicked!');
  });

  it('should render header when title is provided', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const header = debugElement.query(By.css('.card-header'));
    expect(header).toBeTruthy();
  });

  it('should render header when subtitle is provided', () => {
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();

    const header = debugElement.query(By.css('.card-header'));
    expect(header).toBeTruthy();
  });

  it('should render header when icon is provided', () => {
    component.icon = 'fas fa-star';
    fixture.detectChanges();

    const header = debugElement.query(By.css('.card-header'));
    expect(header).toBeTruthy();
  });

  it('should not render header when no title, subtitle, or icon', () => {
    component.title = '';
    component.subtitle = '';
    component.icon = '';
    fixture.detectChanges();

    const header = debugElement.query(By.css('.card-header'));
    expect(header).toBeFalsy();
  });

  it('should render footer when showFooter is true', () => {
    component.showFooter = true;
    fixture.detectChanges();

    const footer = debugElement.query(By.css('.card-footer'));
    expect(footer).toBeTruthy();
  });

  it('should not render footer when showFooter is false', () => {
    component.showFooter = false;
    fixture.detectChanges();

    const footer = debugElement.query(By.css('.card-footer'));
    expect(footer).toBeFalsy();
  });

  it('should handle empty string inputs gracefully', () => {
    component.title = '';
    component.subtitle = '';
    component.icon = '';
    component.showFooter = false;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    const header = debugElement.query(By.css('.card-header'));
    expect(header).toBeFalsy();
  });
});

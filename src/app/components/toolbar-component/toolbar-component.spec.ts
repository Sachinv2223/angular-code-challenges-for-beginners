import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar-component';

@Component({
  selector: 'host-comp',
  template: `
    <app-toolbar-component [title]="hostTitle">
      <a class="proj-link" href="#" role="button" aria-label="Projected Link">Projected Link</a>
    </app-toolbar-component>
  `,
  standalone: true,
  imports: [ToolbarComponent]
})
class HostComponent {
  hostTitle = 'My Toolbar';
}

describe('ToolbarComponent', () => {
  describe('standalone host usage', () => {
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HostComponent]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(HostComponent);
      fixture.detectChanges();
    });

    it('should render the provided title in the toolbar', () => {
      const titleEl: HTMLElement | null = fixture.debugElement.query(By.css('.toolbar-title'))?.nativeElement;
      expect(titleEl).withContext('title element should exist').not.toBeNull();
      expect(titleEl!.textContent?.trim()).toBe('My Toolbar');
    });

    it('should project arbitrary content to the right side', () => {
      const projected = fixture.debugElement.query(By.css('.toolbar-right .proj-link'));
      expect(projected).withContext('projected link should be found').not.toBeNull();
      expect((projected!.nativeElement as HTMLAnchorElement).textContent?.trim()).toBe('Projected Link');
    });

    it('should have proper accessibility attributes', () => {
      const toolbar = fixture.debugElement.query(By.css('nav[role="navigation"]'));
      expect(toolbar).withContext('navbar should have role="navigation"').not.toBeNull();

      // const link = fixture.debugElement.query(By.css('.proj-link'));
      // expect(link.attributes['role']).toBe('button');
      // expect(link.attributes['aria-label']).toBe('Projected Link');
    });
  });

  describe('direct component testing', () => {
    let fixture: ComponentFixture<ToolbarComponent>;
    let component: ToolbarComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ToolbarComponent]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ToolbarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should have empty title by default', () => {
      expect(component.title).toBe('');
      const titleEl = fixture.debugElement.query(By.css('.toolbar-title'));
      expect(titleEl).withContext('title element should still exist with empty title').not.toBeNull();
    });

    it('should handle null/undefined title', () => {
      component.title = null as unknown as string;
      fixture.detectChanges();
      const titleEl = fixture.debugElement.query(By.css('.toolbar-title'));
      expect(titleEl.nativeElement.textContent.trim()).toBe('');
    });

    it('should update DOM when title input changes', () => {
      component.title = 'New Title';
      fixture.detectChanges();
      const titleEl = fixture.debugElement.query(By.css('.toolbar-title'));
      expect(titleEl.nativeElement.textContent.trim()).toBe('New Title');
    });

    it('should have proper CSS classes', () => {
      const toolbar = fixture.debugElement.query(By.css('nav'));
      expect(toolbar.nativeElement.classList).toContain('toolbar');

      const leftSection = fixture.debugElement.query(By.css('.toolbar-left'));
      expect(leftSection).withContext('should have left section').not.toBeNull();

      const rightSection = fixture.debugElement.query(By.css('.toolbar-right'));
      expect(rightSection).withContext('should have right section').not.toBeNull();
    });
  });
});

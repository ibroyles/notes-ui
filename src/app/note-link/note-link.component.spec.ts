import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteLinkComponent } from './note-link.component';

describe('NoteLinkComponent', () => {
  let component: NoteLinkComponent;
  let fixture: ComponentFixture<NoteLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

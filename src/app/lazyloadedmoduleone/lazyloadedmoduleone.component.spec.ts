import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadedmoduleoneComponent } from './lazyloadedmoduleone.component';

describe('LazyloadedmoduleoneComponent', () => {
  let component: LazyloadedmoduleoneComponent;
  let fixture: ComponentFixture<LazyloadedmoduleoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyloadedmoduleoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyloadedmoduleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

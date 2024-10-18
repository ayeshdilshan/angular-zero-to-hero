import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadedmoduletwoComponent } from './lazyloadedmoduletwo.component';

describe('LazyloadedmoduletwoComponent', () => {
  let component: LazyloadedmoduletwoComponent;
  let fixture: ComponentFixture<LazyloadedmoduletwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyloadedmoduletwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyloadedmoduletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNavComponent } from './default-nav.component';

describe('DefaultNavComponent', () => {
  let component: DefaultNavComponent;
  let fixture: ComponentFixture<DefaultNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultNavComponent]
    });
    fixture = TestBed.createComponent(DefaultNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancoNavComponent } from './danco-nav.component';

describe('DancoNavComponent', () => {
  let component: DancoNavComponent;
  let fixture: ComponentFixture<DancoNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DancoNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

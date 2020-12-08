import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomScriptComponent } from './bottom-script.component';

describe('BottomScriptComponent', () => {
  let component: BottomScriptComponent;
  let fixture: ComponentFixture<BottomScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

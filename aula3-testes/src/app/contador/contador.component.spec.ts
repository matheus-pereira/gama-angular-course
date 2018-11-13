import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponent } from './contador.component';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;
  let element: HTMLDivElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('deve aumentar valor da div contador ao executar o método aumentar', () => {
    component.aumentar();
    fixture.detectChanges();
    expect(element.querySelector('#contador').textContent).toBe('1');
  });

  it('deve diminuir valor da div contador ao executar o método diminuir', () => {
    component.diminuir();
    fixture.detectChanges();
    expect(element.querySelector('#contador').textContent).toBe('-1');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMusicComponent } from './cadastro-music.component';

describe('CadastroMusicComponent', () => {
  let component: CadastroMusicComponent;
  let fixture: ComponentFixture<CadastroMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

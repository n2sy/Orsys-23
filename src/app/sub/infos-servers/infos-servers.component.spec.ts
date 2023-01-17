import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosServersComponent } from './infos-servers.component';

describe('InfosServersComponent', () => {
  let component: InfosServersComponent;
  let fixture: ComponentFixture<InfosServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

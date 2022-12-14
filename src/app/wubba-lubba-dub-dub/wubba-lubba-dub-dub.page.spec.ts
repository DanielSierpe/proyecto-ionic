import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WubbaLubbaDubDubPage } from './wubba-lubba-dub-dub.page';

describe('WubbaLubbaDubDubPage', () => {
  let component: WubbaLubbaDubDubPage;
  let fixture: ComponentFixture<WubbaLubbaDubDubPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WubbaLubbaDubDubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WubbaLubbaDubDubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

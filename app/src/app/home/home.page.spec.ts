import { async, fakeAsync, tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomePage } from './home.page';
import { NavController } from '@ionic/angular';



describe('HomePage', () => {

  let fixture: ComponentFixture<HomePage>;
  let instance: HomePage;
  let storage: Storage;

  const navControllerStub = {};
  const storageStub = {
    get: (key: string): Promise<any> => Promise.resolve(undefined),
    set: (key: string, value: any): Promise<any> => Promise.resolve(undefined),
    clear: (): Promise<null> => Promise.resolve(null)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        HomePage
      ],
      providers: [
        {provide: NavController, useValue: navControllerStub},
        {provide: Storage, useValue: storageStub}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    instance = fixture.debugElement.componentInstance;
    storage = fixture.debugElement.injector.get(Storage);
  });

  it('should create the home page', () => {
    expect(instance).toBeTruthy();
  });  

});

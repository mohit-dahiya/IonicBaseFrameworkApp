import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { resolve, reject } from 'q';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let instance: AppComponent;

  const platformStub = {
    ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
  };
  const statusBarStub = {
    styleDefault: (): void => undefined
  };
  const splashScreenStub = {
    hide: (): void => undefined
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: Platform, useValue: platformStub},
        {provide: StatusBar, useValue: statusBarStub},
        {provide: SplashScreen, useValue: splashScreenStub}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the root page', () => {
    expect(instance).toBeTruthy();
  });

});

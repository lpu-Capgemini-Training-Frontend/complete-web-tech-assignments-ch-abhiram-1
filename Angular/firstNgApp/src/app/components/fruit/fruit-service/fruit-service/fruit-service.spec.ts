import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitService } from './fruit-service';

describe('FruitService', () => {
  let component: FruitService;
  let fixture: ComponentFixture<FruitService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitService],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

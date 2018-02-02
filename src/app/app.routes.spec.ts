import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppModule } from './app.module';
import { BASE_ROUTES } from './app.routes';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, fakeAsync, tick, inject, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

describe('Router tests', () => {
	let location: Location;
	let fixture: ComponentFixture<AppComponent>;
	// setup
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes(BASE_ROUTES),
				AppModule
			]
		});
	});

	beforeEach(inject([Location], (_location: Location) => {
		location = _location;
	}));

	// specs
	// it('can navigate to home (async)', async(() => {
	// 	fixture = TestBed.createComponent(AppComponent);
	// 	TestBed.get(Router)
	// 		.navigate(['/home'])
	// 		.then(() => {
	// 			expect(location.path().endsWith('/home')).toBe(true);
	// 		});
	// }));

//   it('can navigate to home (fakeAsync/tick)', fakeAsync(() => {
//     let fixture = TestBed.createComponent(AppComponent);
//     TestBed.get(Router).navigate(['/home']);
//     fixture.detectChanges();
//     // execute all pending asynchronous calls
//     tick();
//     expect(location.path().endsWith('/home')).toBe(true);
//   }));

//   it('can navigate to home (done)', done => {
//     let fixture = TestBed.createComponent(AppComponent);
//     TestBed.get(Router)
//       .navigate(['/home'])
//         .then(() => {
//           expect(location.path().endsWith('/home')).toBe(true);
//           done();
//         })
// 		//.catch(e => console.log(e))
// 		;
//   });
});

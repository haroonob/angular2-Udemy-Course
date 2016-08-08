/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('Component: Voter', () => {
  it('should create an instance', () => {
    let component = new VoterComponent();
    expect(component).toBeTruthy();
  });
});

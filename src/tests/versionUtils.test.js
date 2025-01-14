/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { versionStringToVersion } from '../versionUtils';

const version0_4_0_2String = '0.4.0-alpha.2';
const version1_5_2String = '1.5.2';
const version10_12_3String = '10.12.3';

const version0_4_0 = {
  major: 0,
  minor: 4,
  patch: 0,
  build: 1,
};

const version0_4_0_2 = {
  major: 0,
  minor: 4,
  patch: 0,
  build: 2,
};

const version1_5_2 = {
  major: 1,
  minor: 5,
  patch: 2,
  build: 1,
};

const version10_12_3 = {
  major: 10,
  minor: 12,
  patch: 3,
  build: 1,
};

describe('versionStringToVersion:', () => {
  it('Should match version0_4_0_2 object when version string is 0.4.0, current version is 0.4.0 and current version code is 4001', () => {
    expect(versionStringToVersion(
      version0_4_0_2String,
      version0_4_0,
      4001,
    )).toEqual(version0_4_0_2);
  });

  it('Should match version1_5_2 object when version string is 1.5.2', () => {
    expect(versionStringToVersion(version1_5_2String)).toEqual(version1_5_2);
  });

  it('Should match version10_12_3 object when version string is 10.12.3', () => {
    expect(versionStringToVersion(version10_12_3String)).toEqual(version10_12_3);
  });
});

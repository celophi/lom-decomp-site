import { describe, expect, it } from 'vitest';
import { modules, statusCounts } from '../src/data/project';

describe('project module manifest', () => {
  it('contains the main executable plus 17 overlays', () => {
    expect(modules).toHaveLength(18);
    expect(modules.filter((module) => module.kind === 'main')).toHaveLength(1);
    expect(modules.filter((module) => module.kind === 'overlay')).toHaveLength(17);
  });

  it('matches the repository status breakdown', () => {
    expect(statusCounts['fully-linked']).toBe(3);
    expect(statusCounts.matching).toBe(1);
    expect(statusCounts['non-matching']).toBe(3);
    expect(statusCounts['in-progress']).toBe(2);
    expect(statusCounts['not-started']).toBe(9);
  });

  it('has unique module names', () => {
    expect(new Set(modules.map((module) => module.name)).size).toBe(modules.length);
  });
});

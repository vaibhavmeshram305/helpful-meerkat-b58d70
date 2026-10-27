// Quick content and structure tests before running the portfolio.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { projects } from '../src/data/projects.js';
import { skills } from '../src/data/skills.js';

const html = await readFile(new URL('../index.html', import.meta.url),'utf8');
assert.equal(projects.length,9,'There should be nine engineering missions');
assert.equal(new Set(projects.map(p=>p.id)).size,projects.length,'IDs must be unique');
assert.equal(skills.length,12,'There should be twelve loadout skills');
for (const id of ['lobby','operations','loadout','intel','record','missionList','projectDialog','projectSearch']) {
  assert.ok(html.includes(`id="${id}"`),`Missing HTML element: ${id}`);
}
for (const p of projects) {
  for (const field of ['title','kind','description','overview','tags','groups']) {
    assert.ok(p[field],`${p.id} needs field ${field}`);
  }
}
console.log(`CHECK PASSED: ${projects.length} missions, ${skills.length} skills, key sections available.`);

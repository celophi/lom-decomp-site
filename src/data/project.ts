export type ModuleStatus =
  | 'not-started'
  | 'in-progress'
  | 'non-matching'
  | 'matching'
  | 'fully-linked';

export interface GameModule {
  name: string;
  status: ModuleStatus;
  kind: 'main' | 'overlay';
}

export const statusLabels: Record<ModuleStatus, string> = {
  'not-started': 'Not started',
  'in-progress': 'In progress',
  'non-matching': 'Non-matching',
  'matching': 'Matching',
  'fully-linked': 'Fully linked',
};

export const modules: GameModule[] = [
  { name: 'SLUS_010.13', status: 'in-progress', kind: 'main' },
  { name: 'ADDHERO.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'CARDA.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'CHECKPS.BIN', status: 'non-matching', kind: 'overlay' },
  { name: 'CLOAD.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'FIELD.BIN', status: 'in-progress', kind: 'overlay' },
  { name: 'GNAME.BIN', status: 'fully-linked', kind: 'overlay' },
  { name: 'GOLEM.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'GOSUB.BIN', status: 'non-matching', kind: 'overlay' },
  { name: 'GOVER.BIN', status: 'fully-linked', kind: 'overlay' },
  { name: 'MENU.BIN', status: 'non-matching', kind: 'overlay' },
  { name: 'MOVIE.BIN', status: 'fully-linked', kind: 'overlay' },
  { name: 'NIKI.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'SHOP.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'TITLE.BIN', status: 'matching', kind: 'overlay' },
  { name: 'WMAP.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'WSEL.BIN', status: 'not-started', kind: 'overlay' },
  { name: 'ZUKAN.BIN', status: 'not-started', kind: 'overlay' },
];

export const statusOrder: ModuleStatus[] = [
  'fully-linked',
  'matching',
  'non-matching',
  'in-progress',
  'not-started',
];

export const statusCounts = Object.fromEntries(
  statusOrder.map((status) => [
    status,
    modules.filter((module) => module.status === status).length,
  ]),
) as Record<ModuleStatus, number>;

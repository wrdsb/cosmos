import { fromEventPattern, from } from 'rxjs';

export * from './trillium-assignment-store';
export * from './trillium-class-store';
export * from './trillium-enrolment-store';
export * from './trillium-school-store';
export * from './trillium-staff-store';
export * from './trillium-student-store';
export * from './trillium-teacher-store';

export * from './trillium-assignments-reconcile';
export * from './trillium-classes-reconcile';
export * from './trillium-enrolments-abc-reconcile';
export * from './trillium-schools-reconcile';
export * from './trillium-staff-reconcile';
export * from './trillium-students-reconcile';
export * from './trillium-teachers-reconcile';

export * from './trillium-staff-reap';

export * from './view-gclassroom-process';
export * from './view-skinnerassignments-process';
export * from './view-skinnerstaff-process';

export * from './view-gclassroom-extract-classes';
export * from './view-gclassroom-extract-enrolments';
export * from './view-gclassroom-extract-schools';
export * from './view-gclassroom-extract-students';
export * from './view-gclassroom-extract-teachers';

export * from './view-skinnerassignments-extract-assignments';
export * from './view-skinnerstaff-extract-staff';

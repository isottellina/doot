import { Mock } from "@types/jest";

export interface TaskObj {
  id: number;
  name: string;
  description: string;
}

export interface MockStore {
  dispatch: Mock;
  commit: Mock;
}

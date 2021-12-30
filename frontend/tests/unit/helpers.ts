import { MockStore } from "./types";

export function createMockStore(): MockStore {
  return {
    dispatch: jest.fn(),
    commit: jest.fn(),
  };
}

import { queryReturnedVal } from "../../src/pgsql";

jest.mock("../../src/pgsql");

const mGetDbConnection = jest.mocked(queryReturnedVal);

test("database returned value", () => {
  expect(mGetDbConnection).toBeInstanceOf(String);
});

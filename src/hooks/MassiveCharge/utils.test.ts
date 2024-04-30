import { validationFileExtension } from "./utils";  

describe("validationFileExtension test", () => {

  it("should return false when file is not an excel", () => {
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    expect(validationFileExtension(file)).toBe(false);
    const file2 = new File(["hello"], "hello.txt", { type: "text/plain" });
    expect(validationFileExtension(file2)).toBe(false);
  });

  it("should return true when file is an excel", () => {
    const file = new File(["hello"], "hello.xlsx", { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    expect(validationFileExtension(file)).toBe(true);
    const file2 = new File(["hello"], "hello.xls", { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    expect(validationFileExtension(file2)).toBe(true);
  })

})
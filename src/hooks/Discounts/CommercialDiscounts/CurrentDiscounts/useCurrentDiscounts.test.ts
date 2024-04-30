import { renderHook, act } from "@testing-library/react";
import useCurrentDiscount from "./useCurrentDiscount";
import 'whatwg-fetch'

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    LOGOUT_URL: 'http://seller-center.development.com/signout'
  }
}))
describe('useExpiredDiscount hook test', () => {  

  describe("On load", () => {

    beforeAll(() => {
      global.fetch = fetch;
    });  
    test("should return default values", async () => {

      const page = 0;
      const pageSize = 10;
      const searchTerm = "";
      const selected = {
        id: "sku",
        label: "sku",
      }

      const skus = selected.id === "sku" ? searchTerm : "";
      const seller = selected.id === "seller" ? searchTerm : "";
      const url = `/api/discount/list/?page=${page}&pageSize=${pageSize}&skus=${skus}&seller=${seller}`;
     
      const { result } = renderHook(
        () => useCurrentDiscount()
      );          

      expect(result.current.state.discounts.count).toBe(0);

      // await waitForNextUpdate();

      expect(result.current.state.loading).toBe(true);

      expect(result.current.state.error).toBe(false);

      expect(result.current.state.errorMessage).toBe("");

      expect(result.current.state.downloading).toBe(false);

      
    }); 

  })

});

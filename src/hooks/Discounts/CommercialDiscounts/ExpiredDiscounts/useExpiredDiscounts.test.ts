import { renderHook, act } from "@testing-library/react";
import useExpiredDiscount from "./useExpiredDiscount";
// import fetchMock from "fetch-mock";
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
      const skus = '';
      const seller = '';
     
      const { result } = renderHook(
        () => useExpiredDiscount()
      );     
      
     

      expect(result.current.state.discounts.count).toBe(0);        

      expect(result.current.state.error).toBe(false);
      expect(result.current.state.errorMessage).toBe("");
      expect(result.current.state.downloading).toBe(false);

      
    }); 

  })

});

import { renderHook, waitFor } from "@testing-library/react";
import { useErrorsOnPercent } from "./useErrorsOnPercent";
import { VALIDATIONS } from "@/constants/validations";
import { act } from "react-dom/test-utils";

// global.fetch = jest.fn();

describe("useErrorsOnPercent test", () => { 

  it("should initially return false and then true", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { rateError, setRateError } = result.current;
    // asserting that the initial value of loading is true
    // before the re-render
    act(() => {
      /* fire events that update state */
      expect(rateError.hasError).toBe(false);
      expect(rateError.message).toBe("");
      setRateError({ hasError: true, message: "Error" });
    });

    await waitFor(() => {
      const { rateError } = result.current;
      //after the re-render
      expect(rateError.hasError).toBe(true);
      expect(rateError.message).toBe("Error");
    });
  });

  it("validateOnSubmit should return required error", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { validateOnSubmit } = result.current;

    act(() => {
      /* fire events that update state */
      validateOnSubmit("");
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(true);
      expect(rateError.message).toBe(VALIDATIONS.required);
    });
  });

  it("validateOnSubmit should not return required error", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { validateOnSubmit } = result.current;

    act(() => {
      /* fire events that update state */
      validateOnSubmit(12);
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(false);
      expect(rateError.message).toBe("");
    });
  });

  it("validateOnSubmit should return minimum value error ", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { validateOnSubmit } = result.current;

    act(() => {
      /* fire events that update state */
      validateOnSubmit(0);
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(true);
      expect(rateError.message).toBe(VALIDATIONS.outOfRange);
    });
  });


  it("setErrorsOnRate should not return required error", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { setErrorsOnRate } = result.current;

    act(() => {
      /* fire events that update state */
      setErrorsOnRate(undefined);
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(false);
      expect(rateError.message).toBe("");
    });
  });

  it("setErrorsOnRate should return check decimals error", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { setErrorsOnRate } = result.current;

    act(() => {
      /* fire events that update state */
      setErrorsOnRate(11.111);
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(true);
      expect(rateError.message).toBe(VALIDATIONS.checkDecimals);
    });
  });


  it("setErrorsOnRate should return minimum value error", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { setErrorsOnRate } = result.current;

    act(() => {
      /* fire events that update state */
      setErrorsOnRate(-1);
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(true);
      expect(rateError.message).toBe(VALIDATIONS.outOfRange);
    });
  });


  it("setErrorsOnRate should not return any error", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { setErrorsOnRate } = result.current;

    act(() => {
      /* fire events that update state */
      setErrorsOnRate(12);
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(false);
      expect(rateError.message).toBe("");
    });
  });


  it("setErrorsOnRate should return maximum value error", async () => {
    const { result } = renderHook(() => useErrorsOnPercent(true));
    const { setErrorsOnRate } = result.current;

    act(() => {
      /* fire events that update state */
      setErrorsOnRate(122);
    });

    await waitFor(() => {
      const { rateError } = result.current;

      expect(rateError.hasError).toBe(true);
      expect(rateError.message).toBe(VALIDATIONS.outOfRange);
    });
  });


});

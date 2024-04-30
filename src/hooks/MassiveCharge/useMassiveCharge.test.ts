import {
  fireEvent,
  getByLabelText,
  renderHook,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useMassiveCharge from "./useMassiveCharge";
import { ChangeEvent } from "react";
import { importError } from "./constants";

// import getByLabelText from "@testing-library/user-event"

describe("useMassiveCharge test", () => {
  it("check initial state values", async () => {
    const { result } = renderHook(() => useMassiveCharge());
    const { state } = result.current;

    expect(state.file).toBe(null);
    expect(state.message).toBe("");
    expect(state.loading).toBe(false);
    expect(state.success).toBe(false);
  });

  it("file should not be null and must have a name", async () => {
    const { result } = renderHook(() => useMassiveCharge());
    const { actions } = result.current;

    act(() => {
      const file = new File(["foo"], "foo.xlsx", {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const e = {
        target: { files: [file] },
      } as unknown as ChangeEvent<HTMLInputElement>;

      actions.onChangeFile(e);
    });

    await waitFor(() => {
      const { state } = result.current;
      expect(state.file).not.toBe(null);
      expect(state.file?.name).toBe("foo.xlsx");
    });
  });

  it("onChange return format error", async () => {
    const { result } = renderHook(() => useMassiveCharge());
    const { actions } = result.current;

    act(() => {
      const file = new File(["foo"], "foo.txt", {
        type: "text/plain",
      });

      const e = {
        target: { files: [file] },
      } as unknown as ChangeEvent<HTMLInputElement>;

      actions.onChangeFile(e);
    });

    await waitFor(() => {
      const { state } = result.current;
      expect(state.message).toBe(importError);
    });
  });

  // onUploadFile
  it("onUploadFile should set loading to false", async () => {
    const { result } = renderHook(() => useMassiveCharge());
    const { actions } = result.current;

    act(() => {
      const file = new File(["foo"], "foo.xlsx", {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const e = {
        target: { files: [file] },
      } as unknown as ChangeEvent<HTMLInputElement>;

      actions.onChangeFile(e);
    });

    await waitFor(() => {
      const { state } = result.current;
      expect(state.loading).toBe(false);
    });
  });

  //   onCleanMessage
  it("onCleanMessage should set message to empty string", async () => {
    const { result } = renderHook(() => useMassiveCharge());
    const { actions } = result.current;
    act(() => {
      actions.onCleanMessage();
    });

    await waitFor(() => {
      const { state } = result.current;
      expect(state.message).toBe("");
    });
  });

  // onDeleteFile
  it("onDeleteFile should set file to null", async () => {
    const { result } = renderHook(() => useMassiveCharge());
    const { actions } = result.current;
    act(() => {
      actions.onDeleteFile();
    });

    await waitFor(() => {
      const { state } = result.current;
      expect(state.file).toBe(null);
    });
  });
});

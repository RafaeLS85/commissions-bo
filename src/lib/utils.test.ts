import formatedDate, {
  calculateTotalPages,
  checkDecimals,
  compareDates,
  compareDatesUTCString,
  disabledText,
  getDate,
  getFileDate,
  getHeader,
  getToken,
  headersConfig,
  isBeforeToday,
  isFuture,
  monthsDiff,
  setCookie,
  setUtcDateFrom,
  setUtcDateTo,
  setUtcForFutureCommission,
  splitText,
} from "./utils";

import { log } from "console";

describe("utils", () => {
  it("getToken", () => {
    expect(getToken()).toEqual("");
  });

  it("calculateTotalPages ", () => {
    expect(calculateTotalPages({ count: 0, pageSize: 10 })).toEqual(0);
    expect(calculateTotalPages({ count: 5, pageSize: 10 })).toEqual(1);
    expect(calculateTotalPages({ count: 12, pageSize: 10 })).toEqual(2);
    expect(calculateTotalPages({ count: 77, pageSize: 10 })).toEqual(8);
  });

  it("getDate must return dd-mm-yyyy format ", () => {
    log("getDate:", getDate()); //dd-mm-yyyy
    const splitDate = getDate().split("-");
    //log("splitDate", splitDate);
    expect(splitDate.length).toEqual(3);
    const day = splitDate[0];
    const month = splitDate[1];
    const year = splitDate[2];
    expect(day.length).toEqual(2);
    expect(month.length).toEqual(2);
    expect(year.length).toEqual(4);
  });

  it("setCookie must return a string with key, expires and path", () => {
    // log("setCookie", setCookie("key", "value", 1)); // key=value;expires=Thu, 07 Mar 2024 15:07:15 GMT;path=/
    const cookieValue = setCookie("key", "value", 1);
    //must have key, expires and path values
    const cookieSplit = cookieValue.split(";");
    expect(cookieSplit.length).toEqual(3);
    //value should be typeof string
    expect(typeof cookieValue).toEqual("string");
  });

  it("headersConfig", () => {
    const { headers } = headersConfig("MyToken");
    expect(headers.authorization).toEqual("Bearer MyToken");
  });

  it("getFileDate", () => {
    const date = getFileDate();
    // log("getFileDate", date); //2024-3-6
    const splitDate = date.split("-");
    expect(splitDate.length).toEqual(3);
  });

  it("checkDecimals", () => {
    //log("checkDecimals", checkDecimals(100.00));
    expect(checkDecimals(10)).toEqual(true);
    expect(checkDecimals(100)).toEqual(true);
    expect(checkDecimals(100.0)).toEqual(true);
    expect(checkDecimals(100.0)).toEqual(true);
    expect(checkDecimals(100.111)).toEqual(false);
    expect(checkDecimals(0.111123)).toEqual(false);
  });

  it("disabledText", () => {
    expect(disabledText("lorem ipsum")).toEqual(false);
    // more than 100 characters
    expect(
      disabledText(`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur at sapien sit amet sapien tempus faucibus.
      Vivamus euismod, nisl in sagittis sagittis,
      nunc dui ultricies nunc, sit amet ultricies nunc nunc dui ultricies nunc.
      Curabitur at sapien sit amet sapien tempus faucibus.    
    `)
    ).toEqual(true);
  });
 
  it("splitText", () => {
    const { text, overFlowText } = splitText("Lorem ipsum dolor sit amet", 12);
    expect(text).toEqual("Lorem ipsum ");
    expect(overFlowText).toEqual("dolor sit amet");
  });
  
  it("monthsDiff", () => {
    const date1 = new Date();
    const date2 = new Date();
    date2.setFullYear(date2.getFullYear() - 1);
    expect(monthsDiff(date1, date2)).toEqual(true);
  });
  
  it("formatedDate should return yyyy-mm-dd format", () => {
    const date = new Date();
    const formated = formatedDate(date);
    const splitDate = formated.split("-");
    expect(splitDate.length).toEqual(3);
    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2];
    expect(year.length).toEqual(4);
    expect(month.length).toEqual(2);
    expect(day.length).toEqual(2);
  });
  
  it("isBeforeToday", () => {
    expect(isBeforeToday("")).toEqual(true);
    expect(isBeforeToday("1/1/2022")).toEqual(false);
  });
 
  it("compareDates", () => {
    // dates are equal
    const dateFrom = new Date();
    const dateTo = new Date();
    expect(compareDates(dateTo, dateFrom)).toEqual(true);

    // date to is before date from
    const dateTo2 = new Date(dateTo.getDate() - 1);
    expect(compareDates(dateTo2, dateFrom)).toEqual(false);
  });

  it("compareDatesUTCString", () => {
    const today = new Date();
    expect(compareDatesUTCString("2024-01-01", today)).toEqual(false);
  });

  it("setUtcDateTo", () => {
    const date = new Date();
    const formated = setUtcDateTo(date);
    // log("setUtcDateTo", formated);//2024-03-07T02:59:59.885Z
    const splitDate = formated.toISOString().split("T");
    expect(splitDate.length).toEqual(2);
    // log("splitDate", splitDate);
    // verify hours, minutes, seconds
    const time = splitDate[1].split(":");
    const hours = time[0];
    const minutes = time[1];
    let seconds = time[2];
    seconds = seconds.split(".")[0];
    // log("hours", hours);
    // log("minutes", minutes);
    // log("seconds", seconds);
    expect(hours).toBe("02" || "23");
    expect(minutes).toBe("59");
    expect(seconds).toBe("59");
  });

  //   setUtcDateFrom

  it("setUtcDateFrom", () => {
    const date = new Date();
    const formated = setUtcDateFrom(date);
    // log("setUtcDateFrom", formated);//2024-03-06T20:49:11.574Z
    const splited = formated.split("T");
    expect(splited.length).toEqual(2);
    const formated2 = setUtcDateFrom("2024-01-01");
    // log("setUtcDateFrom", formated2);//2024-01-01T20:49:11.000Z
    const splited2 = formated2.split("T");
    expect(splited2.length).toEqual(2);
  });
 

  it("isFuture", () => {
    const today = new Date();
    let tomorrow = new Date(today);
    tomorrow = new Date(tomorrow.setDate(today.getDate() + 1));
    // log("Tomorrow is", tomorrow) //
    expect(isFuture(tomorrow)).toEqual(true);
  });
  

  it("setUtcForFutureCommission", () => {
    const date = new Date();
    log("setUtcForFutureCommission", date);
    const formated = setUtcForFutureCommission(date);
    log("setUtcForFutureCommission", formated); //2024-03-06T03:00:00.781Z
    const splitDate = formated.toISOString().split("T");
    expect(splitDate.length).toEqual(2);
    const time = splitDate[1].split(":");
    const hours = time[0];
    const minutes = time[1];
    let seconds = time[2];
    seconds = seconds.split(".")[0];
    expect(hours).toBe("03" || "00");
    expect(minutes).toBe("00");
    expect(seconds).toBe("00");
  });
});

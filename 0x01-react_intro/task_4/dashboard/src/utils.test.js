import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Testing Utilities functions
describe('Utilities Tests', () => {
  // Testing the getFullYear function
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });

  // Testing the getFooterCopy function
  it('should return correct string when argument is true', () => {
    except(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('should return correct string when argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });

  // Testing the getLatestNotification function
  it('should return the correct latest notification string', () => {
    const latestNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(latestNotification);
  });
});

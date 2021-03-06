/**
 * @class
 * The Cortex Error class handles the error string returned to the user. Made to be easier for the user to understand 
 * and easier to make changes of an error throughout the entire system. 
 */
class CortexError {
  private errorId: number;
  private cortexMessage: string;

  constructor(errorId: number, cortexMessage: string) {
    this.errorId = errorId;
    this.cortexMessage = cortexMessage;
  }

  /**
   * Returns the id of the CortexError.
   */
  public get id() {
    return this.errorId;
  }
  /**
   * Returns the error message you would like the user to see.
   */
  public get errMessage() {
    return this.getErrorMessage(this.errorId);
  }
  /**
   * Returns the cortex error message. Could be used to debug. 
   */
  public get cMessage() {
    return this.cortexMessage;
  }

  private getErrorMessage(errorId: number): string {
    switch (errorId) {
      case 1:
        {
          return 'Can\'t access the Emotive servers.';
        }
        break;

      case 2:
        {
          return 'Cant find any headset. Please connect a headset to your pc and ' +
          'check if the headseth is connected to the Emotiv app';
        }
        break;

        case 3:
          {
            return 'Access to the Emotiv application was denied';
          }
        break;
        case 4:
          {
            return 'Unable to create a session with the Emotiv servers';
          }
        break;

        case 5:
          {
            return 'Headset has been disconnected due to connection timeout';
          }
        break;

        case 6:
          {
            return 'Unable to create a connection with the Emotiv servers';
          }
        break;
        case 7:
          {
            return 'An error has occured';
          }
        break;
        case 8:
          {
            return 'This application cant\'t unload the profile. Check if the headset is used by another application.';
          }
        break;
        case 9:
          {
            return 'Can\'t connect to the headset.';
          }
        break;
       

      default: {
        return 'undefined error';
      }
    }
  }
}

export default CortexError;

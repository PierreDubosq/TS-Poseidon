class Poseidon {
  /**
   * @brief Get the formatted date and time
   * 
   * @returns The formatted date and time
   */
  private static datetime(): string {
    const date = new Date();

    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  /**
   * @brief Log a debug message
   * 
   * @param format The format string
   * @param args The arguments to the format string
   */
  public static debug(format: any, ...args: any[]): void {
    console.log(`\x1b[1;94m${Poseidon.datetime()} [ DEBUG ]\x1b[0m ${format}`, ...args);
  }

  /**
   * @brief Log an error message
   * 
   * @param format The format string
   * @param args The arguments to the format string
   */
  public static error(format: any, ...args: any[]): void {
    console.log(`\x1b[1;91m${Poseidon.datetime()} [ ERROR ]\x1b[0m ${format}`, ...args);
  }

  /**
   * @brief Log an info message
   * 
   * @param format The format string
   * @param args The arguments to the format string
   */
  public static info(format: any, ...args: any[]): void {
    console.log(`\x1b[1;92m${Poseidon.datetime()} [ INFO  ]\x1b[0m ${format}`, ...args);
  }

  /**
   * @brief Log a warning message
   * 
   * @param format The format string
   * @param args The arguments to the format string
   */
  public static warn(format: any, ...args: any[]): void {
    console.log(`\x1b[1;93m${Poseidon.datetime()} [ WARN  ]\x1b[0m ${format}`, ...args);
  }
}

export default Poseidon;
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
}

export default Poseidon;